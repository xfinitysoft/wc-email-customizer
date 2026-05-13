import { JsonToMjml, IBlockData } from 'easy-email-core';
import html2canvas from 'html2canvas';
import mjml from 'mjml-browser';
import services from '@xfinity/services';

export async function emailToImage(content: IBlockData) {
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.innerHTML = mjml(
    JsonToMjml({
      data: content,
      mode: 'production',
      context: content,
    }),
    {
      beautify: true,
      validationLevel: 'soft',
    },
  ).html;
  document.body.appendChild(container);

  const blob = await new Promise<any>(resolve => {
    html2canvas(container, { useCORS: true, logging: false }).then(canvas =>
      canvas.toBlob(resolve, 'png', 0.1),
    );
  });

  document.body.removeChild(container);

  try {
    const picture = await services.common.uploadByQiniu(blob);
    return picture;
  } catch (error) {
    return 'http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841585/use2lx1xqmrhzceshsys.png';
  }
}

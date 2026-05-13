import { request } from './axios.config';
export const common = {
    async uploadByQiniu(file: File | Blob): Promise<string> {
        const data = new FormData();
        data.append('file', file);
        const url = await request.post<string>(
            '/wp-json/xseeb-builder/v1/image/upload',
            data
        );
        return url;
    },
    sendTestEmail(data: {
        toEmail: string;
        subject: string;
        html: string;
        text: string;
        content?: any;
    }) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.toEmail.trim())) {
            throw new Error('Invalid email address.');
        }
        return request.post('/wp-json/xseeb-builder/v1/email/send', {
            to_email: data.toEmail,
            subject: data.subject,
            text: data.text,
            html: data.html,
            content: data.content,
            xseeb_email_builder_rest_api: 'yes'
        });
    },
};

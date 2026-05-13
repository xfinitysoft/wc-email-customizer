import React from 'react';
import { IconQuestionCircle } from '@arco-design/web-react/icon';
import { Tooltip, TooltipProps } from '@arco-design/web-react';

export function Help(
  props: TooltipProps &
    Partial<{ style: Partial<React.CSSProperties> }> & {
      title: React.ReactNode;
    }
) {
  return (
    <Tooltip {...{ ...props, style: undefined }} content={props.title}>
      <span style={{ cursor: 'pointer' }}>
        <IconQuestionCircle style={props.style} />
      </span>
    </Tooltip>
  );
}

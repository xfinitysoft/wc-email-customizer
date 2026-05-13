import React  from 'react';
import { Layout, Breadcrumb } from '@arco-design/web-react';
import { Stack } from '@xfinity/components/Stack';
const { Content } = Layout;

interface PopupFrameProps {
  title: string;
  breadcrumb?: React.ReactElement;
  primaryAction?: React.ReactElement;
  children: React.ReactElement;
}

export default function PopupFrame({
  children,
  title,
  primaryAction,
  breadcrumb,
}: PopupFrameProps) {
  return (
    <Layout>
      <Layout style={{ padding: 24 }}>
        <Stack vertical>
          {breadcrumb && (
            <Breadcrumb>
              <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
            </Breadcrumb>
          )}
          <Stack distribution='center' alignment='center'>
            <Stack.Item><h2><strong>{title}</strong></h2></Stack.Item>
            <Stack.Item>{primaryAction}</Stack.Item>
          </Stack>

          <Stack.Item>
            <Content
              style={{
                padding: 24,
                margin: 0,
                backgroundColor: '#fff',
              }}
            >
              {children}
            </Content>
          </Stack.Item>
        </Stack>
      </Layout>
    </Layout>
  );
}

import {ShortcutToolbar,AttributePanel,SourceCodePanel, InteractivePrompt, BlockLayer ,BlockLayerProps,MergeTagBadgePrompt} from 'easy-email-extensions';
import { Card, ConfigProvider, Layout, Tabs,Button } from '@arco-design/web-react';
import { IconRight,IconLeft } from '@arco-design/web-react/icon';
import { useEditorProps } from 'easy-email-editor';
import React, { useState,useEffect } from 'react';
import styles from './index.module.scss';
import enUS from '@arco-design/web-react/es/locale/en-US';

export const SimpleLayout: React.FC<
  {
    showSourceCode?: boolean;
    defaultShowLayer?: boolean;
    jsonReadOnly?: boolean;
    mjmlReadOnly?: boolean;
    children: React.ReactNode | React.ReactElement;
  } & BlockLayerProps
> = (props) => {
  const { height: containerHeight } = useEditorProps();
  const { showSourceCode = true, defaultShowLayer = true, jsonReadOnly = true, mjmlReadOnly = true  } = props;
  const [collapsed, setCollapsed] = useState(!defaultShowLayer);
  return (
    <ConfigProvider locale={enUS}>
      <Layout
        className={styles.SimpleLayout}
        style={{
          display: 'flex',
          width: 'auto',
          overflow: 'hidden',
        }}
      >
        <Layout.Sider
          style={{ paddingRight: 0 }}
          collapsed={collapsed}
          collapsible
          trigger={null} 
          breakpoint='xl'
          collapsedWidth={60}
          width={'300'}
        >
          <Card bodyStyle={{ padding: 0 }} style={{ border: 'none' }}>
            <Card.Grid style={{ width: 60, textAlign: 'center' }}>
              <ShortcutToolbar />
              <Button style={{
                marginTop: 30,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
                icon={collapsed ? <IconRight /> : <IconLeft />}
                shape='round'
                onClick={() => setCollapsed(v => !v)}
              />
            </Card.Grid>
            <Card.Grid
              className={styles.customScrollBar}
              style={{
                flex: 1,
                paddingBottom: 50,
                border: 'none',
                height: containerHeight,
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
            >
              <Card title='Layout' style={{ border: 'none' }} headerStyle={{ height: 50 }}>
                { !collapsed ? <BlockLayer renderTitle={props.renderTitle} />: '' }
              </Card>
            </Card.Grid>

          </Card>
        </Layout.Sider>

        <Layout style={{ height: containerHeight }}>{props.children}</Layout>

        <Layout.Sider
          style={{
            height: containerHeight,
            width: 340,
          }}
          className={styles.rightSide}
        >
          <Card
            size='small'
            id='rightSide'
            style={{
              maxHeight: '100%',
              height: '100%',
              borderLeft: 'none',
            }}
            bodyStyle={{ padding: 0 }}
            className={styles.customScrollBarV2}
          >
            <Tabs className={styles.layoutTabs}>
              <Tabs.TabPane title={<div style={{ height: 31, lineHeight: '31px' }}>Configuration</div>}>
                <AttributePanel />
              </Tabs.TabPane>
                {showSourceCode && (
                  <Tabs.TabPane
                    destroyOnHide
                    key='Source code'
                    title={
                      <div style={{ height: 31, lineHeight: '31px' }}>{'Source code'}</div>
                    }
                  >
                    <SourceCodePanel jsonReadOnly={jsonReadOnly} mjmlReadOnly={mjmlReadOnly} />
                  </Tabs.TabPane>
                )}
            </Tabs>
          </Card>
        </Layout.Sider>

        <InteractivePrompt />
        <MergeTagBadgePrompt />
      </Layout>
    </ConfigProvider>
  );
};
import React from 'react';
import {Background,Padding,Align,AttributesPanelWrapper,Color,LineHeight,FontFamily,FontSize,FontStyle,FontWeight} from 'easy-email-extensions';
import { Collapse,Grid,Space } from '@arco-design/web-react';
export function AddressPanel() {
    return(
        <AttributesPanelWrapper>
            <Collapse defaultActiveKey={['1']}>
                <Collapse.Item name='1' header='Style'>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <FontSize></FontSize>
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <FontWeight></FontWeight>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <FontFamily></FontFamily>
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <LineHeight></LineHeight>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <Color></Color>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <FontStyle></FontStyle>
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <Align></Align>
                    </Space>
                    <Space direction='vertical'>
                        <Padding title="Padding(px)"/>
                    </Space>
                    <Space direction='vertical'>
                        <Background/>
                    </Space>
                </Collapse.Item>
            </Collapse>
        </AttributesPanelWrapper>
    );

}
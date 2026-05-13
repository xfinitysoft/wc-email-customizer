import React from 'react';
import {RadioGroupField,Background,Padding,AttributesPanelWrapper,Color,TextField,LineHeight,FontSize,FontWeight,FontFamily,BorderWidth,BorderColor} from 'easy-email-extensions';
import { Collapse,Grid,Space } from '@arco-design/web-react';
import { useFocusIdx,TextStyle} from 'easy-email-editor';
const options = [
    {
      value: 'left',
      label: 'left',
    },
    {
      value: 'center',
      label: 'center',
    },
    {
      value: 'right',
      label: 'right',
    },
];
export function TotalTablePanel() {
    const { focusIdx } = useFocusIdx();
    return(
        <AttributesPanelWrapper>
            <Collapse defaultActiveKey={['1']}>
                <Collapse.Item name='1' header='Content'>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <TextField
                                label='SubTotal'
                                name={`${focusIdx}.data.value.subtotal`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <TextField
                                label='Shipping'
                                name={`${focusIdx}.data.value.shipping`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <TextField
                                label='Payment Method'
                                name={`${focusIdx}.data.value.payment_method`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <TextField
                                label='Total'
                                name={`${focusIdx}.data.value.total`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                </Collapse.Item>
                <Collapse.Item name='2' header='Style'>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <TextField
                                label='Last column width (%)'
                                name={`${focusIdx}.data.value.width`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <RadioGroupField
                                label='Align Left Column Text'
                                name={`${focusIdx}.attributes.left-align`}
                                options={options}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <RadioGroupField
                                    label='Align Right Column Text'
                                    name={`${focusIdx}.attributes.right-align`}
                                    options={options}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <TextStyle variation='strong'>{'Border'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                           
                            <Grid.Col span={11}>
                                <BorderWidth/>
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <BorderColor/>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Padding/>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <FontSize/>
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <FontWeight/>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <FontFamily/>
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <Color/>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <LineHeight/>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Background/>
                        </Grid.Row>
                    </Space>
                </Collapse.Item>
            </Collapse>
        </AttributesPanelWrapper>
    );
}
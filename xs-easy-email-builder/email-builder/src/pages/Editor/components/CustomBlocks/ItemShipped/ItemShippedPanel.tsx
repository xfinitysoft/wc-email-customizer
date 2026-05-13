import React from 'react';
import {Background,RadioGroupField,Padding,TextField,AttributesPanelWrapper,InputWithUnitField,ColorPickerField,Color,BorderWidth,BorderColor,Align,LineHeight,FontSize} from 'easy-email-extensions';
import { Collapse,Grid,Space} from '@arco-design/web-react';
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
export function ItemShippedPanel(){
    const { focusIdx } = useFocusIdx();
    return(
        <AttributesPanelWrapper>
            <Collapse defaultActiveKey={['1']}>
                <Collapse.Item name='1' header='Content'>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <TextField
                                label='Heading'
                                name={`${focusIdx}.data.value.heading`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                                <TextField
                                label='Sub Total'
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
                                label='Paymnt Method'
                                name={`${focusIdx}.data.value.method`}
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
                <Collapse.Item name='2' header="Heading style">
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <ColorPickerField
                                label='Heading color'
                                name={`${focusIdx}.attributes.h-color`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <ColorPickerField
                                label='Heading bg color'
                                name={`${focusIdx}.attributes.hbg-color`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Font Size'
                                    name={`${focusIdx}.attributes.h-font-size`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField 
                                    label='Font Weight'
                                    name={`${focusIdx}.attributes.h-font-weight`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <ColorPickerField
                                label='Heading radius color'
                                name={`${focusIdx}.attributes.h-border-color`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <InputWithUnitField 
                                label='Heading  radius'
                                name={`${focusIdx}.attributes.ht-radius`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <InputWithUnitField 
                                label='Heading Border width'
                                name={`${focusIdx}.attributes.h-border-width`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <ColorPickerField
                                label='Heading border color'
                                name={`${focusIdx}.attributes.h-border-color`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <TextStyle variation='strong'>{`Padding(px)`}</TextStyle>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField label='Top' name={`${focusIdx}.attributes.ht-padding`} />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <InputWithUnitField label='Left' name={`${focusIdx}.attributes.hl-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                            <InputWithUnitField label='Bottom' name={`${focusIdx}.attributes.hb-padding`}/>
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                            <InputWithUnitField label='Right' name={`${focusIdx}.attributes.hr-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                </Collapse.Item>
                <Collapse.Item name='3' header="Table Body style">
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <Color></Color>
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
                    </Space>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <TextStyle variation='strong'>{'Image Style'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField label='Width' name={`${focusIdx}.attributes.image-width`} />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField label='Height' name={`${focusIdx}.attributes.image-height`} />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Border Radius'
                                    name={`${focusIdx}.attributes.image-radius`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Border Width'
                                    name={`${focusIdx}.attributes.iborder-width`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <ColorPickerField
                                    label='Border Color'
                                    name={`${focusIdx}.attributes.iborder-color`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <TextStyle variation='strong'>{`Image Padding(px)`}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField label='Top' name={`${focusIdx}.attributes.image-tpadding`} />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <InputWithUnitField label='Left' name={`${focusIdx}.attributes.image-lpadding`} />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                            <InputWithUnitField label='Bottom' name={`${focusIdx}.attributes.image-bpadding`}/>
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                            <InputWithUnitField label='Right' name={`${focusIdx}.attributes.image-rpadding`} />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <TextStyle variation='strong'>{`Product Description Padding`}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField label='Top' name={`${focusIdx}.attributes.ptext-tpadding`} />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <InputWithUnitField label='Left' name={`${focusIdx}.attributes.ptext-lpadding`} />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                            <InputWithUnitField label='Bottom' name={`${focusIdx}.attributes.ptext-bpadding`}/>
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                            <InputWithUnitField label='Right' name={`${focusIdx}.attributes.ptext-rpadding`} />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <TextStyle variation='strong'>{`Quantity Style`}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <ColorPickerField
                                    label='Color'
                                    name={`${focusIdx}.attributes.bquantity-color`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Font Size'
                                    name={`${focusIdx}.attributes.bquantity-fontsize`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField 
                                    label='Font Weight'
                                    name={`${focusIdx}.attributes.bquantity-fontweight`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <TextStyle variation='strong'>{`Price Style`}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <ColorPickerField
                                    label='Color'
                                    name={`${focusIdx}.attributes.bprice-color`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Font Size'
                                    name={`${focusIdx}.attributes.bprice-fontsize`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField 
                                    label='Font Weight'
                                    name={`${focusIdx}.attributes.bprice-fontweight`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <TextStyle variation='strong'>{`Padding(px)`}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField label='Top' name={`${focusIdx}.attributes.bt-padding`} />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <InputWithUnitField label='Left' name={`${focusIdx}.attributes.bl-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                            <InputWithUnitField label='Bottom' name={`${focusIdx}.attributes.bb-padding`}/>
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                            <InputWithUnitField label='Right' name={`${focusIdx}.attributes.br-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                </Collapse.Item>
                <Collapse.Item name='4' header="Table footer style">
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <ColorPickerField
                                    label='Heading color'
                                    name={`${focusIdx}.attributes.fh-color`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <ColorPickerField
                                    label='Heading bg color'
                                    name={`${focusIdx}.attributes.fhbg-color`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                                <TextStyle variation='strong'>{'Heading Border'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Width'
                                    name={`${focusIdx}.attributes.fh-border-width`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <ColorPickerField
                                    label='Color'
                                    name={`${focusIdx}.attributes.fh-border-color`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                                <TextStyle variation='strong'>{'Heading Font'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Size'
                                    name={`${focusIdx}.attributes.fh-font-size`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField 
                                    label='Weight'
                                    name={`${focusIdx}.attributes.fh-font-weight`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <ColorPickerField
                                label='Heading Pricing color'
                                name={`${focusIdx}.attributes.fh-price-color`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                                <TextStyle variation='strong'>{'Heading Price Font'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Size'
                                    name={`${focusIdx}.attributes.fh-price-size`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField 
                                    label='Weight'
                                    name={`${focusIdx}.attributes.fh-price-weight`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <TextStyle variation='strong'>{`heading Padding(px)`}</TextStyle>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField label='Top' name={`${focusIdx}.attributes.fht-padding`} />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <InputWithUnitField label='Left' name={`${focusIdx}.attributes.fhl-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                            <InputWithUnitField label='Bottom' name={`${focusIdx}.attributes.fhb-padding`}/>
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                            <InputWithUnitField label='Right' name={`${focusIdx}.attributes.fhr-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <ColorPickerField
                                    label='Heading color'
                                    name={`${focusIdx}.attributes.fb-color`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <ColorPickerField
                                    label='Heading bg color'
                                    name={`${focusIdx}.attributes.fbbg-color`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <RadioGroupField
                                label='Heading Align'
                                name={`${focusIdx}.attributes.fh-align`}
                                options={options}
                            />
                        </Grid.Row>
                        <Grid.Row>
                                <TextStyle variation='strong'>{'Body Border'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Width'
                                    name={`${focusIdx}.attributes.fb-border-width`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <ColorPickerField
                                    label='Color'
                                    name={`${focusIdx}.attributes.fb-border-color`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                                <TextStyle variation='strong'>{'Body Font'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Size'
                                    name={`${focusIdx}.attributes.fb-font-size`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField 
                                    label='Weight'
                                    name={`${focusIdx}.attributes.fb-font-weight`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <RadioGroupField
                                label='Body Align'
                                name={`${focusIdx}.attributes.fb-align`}
                                options={options}
                            />
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={24}>
                            <ColorPickerField
                                label='Body Pricing color'
                                name={`${focusIdx}.attributes.fb-price-color`}
                            />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                                <TextStyle variation='strong'>{'Body Price Font'}</TextStyle>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField 
                                    label='Size'
                                    name={`${focusIdx}.attributes.fb-price-size`}
                                />
                            </Grid.Col>
                            <Grid.Col offset={2} span={11}>
                                <InputWithUnitField 
                                    label='Weight'
                                    name={`${focusIdx}.attributes.fb-price-weight`}
                                />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <TextStyle variation='strong'>{`Body Padding(px)`}</TextStyle>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <InputWithUnitField label='Top' name={`${focusIdx}.attributes.fbt-padding`} />
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                                <InputWithUnitField label='Left' name={`${focusIdx}.attributes.fbl-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                            <InputWithUnitField label='Bottom' name={`${focusIdx}.attributes.fbb-padding`}/>
                            </Grid.Col>
                            <Grid.Col offset={1} span={11}>
                            <InputWithUnitField label='Right' name={`${focusIdx}.attributes.fbr-padding`} />
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                </Collapse.Item>
                <Collapse.Item name='5' header="style">
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
                            <RadioGroupField
                                label='First Column Align'
                                name={`${focusIdx}.attributes.firstcolumn-align`}
                                options={options}
                            />
                        </Grid.Row>
                        <Grid.Row>
                            <RadioGroupField
                                label='Second Column Align'
                                name={`${focusIdx}.attributes.Secondcolumn-align`}
                                options={options}
                            />
                        </Grid.Row>
                        <Grid.Row>
                            <RadioGroupField
                                label='Third Column Align'
                                name={`${focusIdx}.attributes.Thirdcolumn-align`}
                                options={options}
                            />
                        </Grid.Row>
                    </Space>
                    <Space direction='vertical'>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <FontSize></FontSize>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col span={11}>
                                <LineHeight></LineHeight>
                            </Grid.Col>
                        </Grid.Row>
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
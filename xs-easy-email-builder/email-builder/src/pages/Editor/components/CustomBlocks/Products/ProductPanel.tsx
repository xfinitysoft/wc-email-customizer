import React from 'react';
import {SelectField,CheckboxField,Background,Padding,ColorPickerField,TextField,AttributesPanelWrapper, NumberField ,FontWeight} from 'easy-email-extensions';
import { useFocusIdx, Stack,useEditorProps, TextStyle} from 'easy-email-editor'
import { Collapse, Grid, Space } from '@arco-design/web-react';

const titleproducttype = 'Product Type';
const titleUrl ='Auto add to cart in product URL';
const productName = 'Product Name';
const productBackground = 'Background Image';
const productPrice = 'Product Price';
const selectProductOptions =[
  {
    value:'newest',
    label:'Newest',
  },
  {
    value:'related',
    label:'Related',
  },
  {
    value:'category',
    label:'Category',
  },
  {
    value:'on_sale',
    label:'ON sale',
  },
  {
    value:'featured',
    label:'Featured',
  },
  {
    value:'up_sell',
    label:'UP sell',
  },
  {
    value:'cross_sell',
    label:'Cross sell',
  },
  {
    value:'best_seller',
    label:'Best seller',
  },
  {
    value:'best_rated',
    label:'Best rated',
  },
];
const selectfontWeight =[
  {
    value:'normal',
    label:'Normal'
  },
  {
    value:'bold',
    label:'Bold'
  },
  {
    value:'100',
    label:'100'
  },
  {
    value:'200',
    label:'200'
  },
  {
    value:'300',
    label:'300'
  },
  {
    value:'400',
    label:'400'
  },
  {
    value:'500',
    label:'500'
  },
  {
    value:'600',
    label:'600'
  },
  {
    value:'700',
    label:'700'
  },
  {
    value:'800',
    label:'800'
  },
  {
    value:'900',
    label:'900'
  },

];
const checkBox = [{
  label:'Enable',
  value:'on',
}];
const selectfontOptions=[
  {
    value:"'andale mono', monospace",
    label:'Andale Mono',
  },
  {
    value:'arial, helvetica, sans-serif',
    label:'Arial',
  },
  {
    value:"'arial black', sans-serif",
    label:'Arial Black',
  },
  {
    value:"'book antiqua', palatino, serif",
    label:'Book Antiqua',
  },
  {
    value:"'comic sans ms', sans-serif",
    label:'Comic Sans MS',
  },
  {
    value:"'courier new', courier, monospace",
    label:'Courier New',
  },
  {
    value:"georgia, palatino, serif",
    label:'Georgia',
  },
  {
    value:"helvetica, arial, sans-serif",
    label:'Helvetica',
  },
  {
    value:"impact, sans-serif",
    label:'Impact',
  },
  {
    value:"symbol",
    label:'Symbol',
  },
  {
    value:"tahoma, arial, helvetica, sans-serif",
    label:'Tahoma',
  },
  {
    value:"terminal, monaco, monospace",
    label:'Terminal',
  },
  {
    value:"'times new roman', times, serif",
    label:'Times New Roman',
  },
  {
    value:"'trebuchet ms', geneva, sans-serif",
    label:'Trebuchet MS',
  },
  {
    value:"verdana, geneva, sans-serif",
    label:'Verdana',
  },
  {
    value:"webdings",
    label:'Webdings',
  },
  {
    value:"wingdings, 'zapf dingbats'",
    label:'Wingdings',
  }
  
];

export function ProductPanel() {
  const { focusIdx } = useFocusIdx();
  const { onUploadImage } = useEditorProps();
  return (
    <AttributesPanelWrapper style={{ padding: 0 }}>
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Item name='1' header='Content'>
          <Stack vertical spacing='tight'>
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
                <TextStyle variation='strong'>{titleproducttype}</TextStyle>
                <SelectField 
                  label= ''
                  options={selectProductOptions}
                  name={`${focusIdx}.data.value.producttype`}
                />
              </Grid.Col>
            </Grid.Row>
          </Stack>
          <Space direction='vertical'>
          <Grid.Row>
            <Grid.Col span={11}>
              <TextField
                label='Button'
                name={`${focusIdx}.data.value.buttonText`}
              />
            </Grid.Col>
              <Grid.Col offset={2} span={11}>
                <NumberField
                  label='Quantity'
                  max={12}
                  name={`${focusIdx}.data.value.quantity`}
                />
              </Grid.Col>
            </Grid.Row>
          </Space>
          <Space direction='vertical'>
            <Grid.Row>
                <Grid.Col span={24}>
                  <Background/>
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col span={24}>
                  <CheckboxField
                    label ={titleUrl}
                    options= {checkBox}
                    name ={`${focusIdx}.data.value.pcheckbox`}
                  />
                </Grid.Col>
            </Grid.Row>
          </Space>
        </Collapse.Item>
        <Collapse.Item name ='2' header='Dimension'>
          <Space direction='vertical'>
            <Padding title="Product Distance(px)"/>
          </Space>
        </Collapse.Item>
        <Collapse.Item name='3' header='Color'>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={24}>
                <ColorPickerField
                  label='Heading'
                  name={`${focusIdx}.attributes.hcolor`}
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col span={11}>
                <ColorPickerField
                  label='Product Name'
                  name={`${focusIdx}.attributes.pncolor`}
                />
              </Grid.Col>
              <Grid.Col offset={2} span={11}>
                <ColorPickerField
                  label='Product Price'
                  name={`${focusIdx}.attributes.prcolor`}
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col span={11}>
                <ColorPickerField
                  label='Button'
                  name={`${focusIdx}.attributes.bcolor`}
                />
              </Grid.Col>
              <Grid.Col offset={2} span={11}>
                <ColorPickerField
                  label='Button Text'
                  name={`${focusIdx}.attributes.btcolor`}
                />
              </Grid.Col>
            </Grid.Row>
          </Space>
        </Collapse.Item>
        <Collapse.Item name='4' header='Typography'>
          <TextStyle variation='strong'>{'Heading'}</TextStyle>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <TextField
                  label='Font Size'
                  name={`${focusIdx}.attributes.h-font-size`}
                />
              </Grid.Col>
              <Grid.Col offset={2}  span={11}>
                <FontWeight/>
              </Grid.Col>
            </Grid.Row>
          </Space>
          <TextStyle variation='strong'>{productName}</TextStyle>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <TextField
                  label='Font Size'
                  name={`${focusIdx}.attributes.p-font-size`}
                />
              </Grid.Col>
              <Grid.Col offset={2}  span={11}>
                <SelectField 
                    label= 'Font Weight'
                    options={selectfontWeight}
                    name={`${focusIdx}.attributes.p-font-weight`}
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col span={11}>
                <SelectField 
                    label= 'Font Family'
                    options={selectfontOptions}
                    name={`${focusIdx}.attributes.p-font-family`}
                />
              </Grid.Col>
              <Grid.Col offset={2}  span={11}>
                <TextField
                  label='Line Height (px)'
                  name={`${focusIdx}.attributes.p-line-height`}
                />
              </Grid.Col>
            </Grid.Row>
          </Space>
          <TextStyle variation='strong'>{productPrice}</TextStyle>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <TextField
                  label='Font Size'
                  name={`${focusIdx}.attributes.pr-font-size`}
                />
              </Grid.Col>
              <Grid.Col offset={2}  span={11}>
                <SelectField 
                    label= 'Font Weight'
                    options={selectfontWeight}
                    name={`${focusIdx}.attributes.pr-font-weight`}
                  />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col span={11}>
                <SelectField 
                    label= 'Font Family'
                    options={selectfontOptions}
                    name={`${focusIdx}.attributes.pr-font-family`}
                />
              </Grid.Col>
              <Grid.Col offset={2}  span={11}>
                <TextField
                  label='Line Height (px)'
                  name={`${focusIdx}.attributes.pr-line-height`}
                />
              </Grid.Col>
            </Grid.Row>
          </Space>  
        </Collapse.Item>
      </Collapse> 
    </AttributesPanelWrapper>

  );
}

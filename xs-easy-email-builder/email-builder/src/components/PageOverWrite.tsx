import React from 'react';
import {
  ColorPickerField,
  InputWithUnitField,
  TextAreaField,
  TextField,
  AttributesPanelWrapper,
  FontFamily,
  SelectField,
} from "easy-email-extensions";
import { Collapse, Grid, Space } from '@arco-design/web-react';
import { Stack,useFocusIdx} from 'easy-email-editor';
import {AddFont} from './AddFont';

export default function PageOverWrite() {
  const { focusIdx } = useFocusIdx();
  const types = [
    {
        value: 'wc_new_order',
        label: 'New Order'
    },
    {
        value: 'wc_reset_password',
        label: "Reset Password"
    },
    {
        value:'wc_customer_note',
        label:'Customer Note'
    },
    {
        value:'wc_customer_invoice_unpaid',
        label:'Customer Invoice Unpaid'
    },
    {
        value:'wc_customer_invoice_paid',
        label:'Customer Invoice Paid'
    },
    {
        value:'wc_partial_refunded_order',
        label:'Partial Refunded Order'
    },
    {
        value:'wc_fully_refunded_order',
        label:'Fully Refunded Order'
    },
    {
        value:'wc_completed_order',
        label:'Completed Order'
    },
    {
        value:'wc_processing_order',
        label:'Processing Order'
    },
    {
        value:'wc_order_on_hold',
        label:'Order On-Hold'
    },
    {
        value:'wc_failed_order',
        label:'Failed Order'
    },
    {
        value:'wc_cancelled_order',
        label:'Cancelled Order'
    },
    {
        value:'wc_new_account',
        label:'New Account'
    }
];
  if (!focusIdx) return null;
  return (
    <div>
      <AttributesPanelWrapper>
      <Stack.Item fill>
        <Collapse defaultActiveKey={['0', '1']}>
          <Collapse.Item name='0' header='Email Setting'>
            <Space direction='vertical'>
              <TextField 
              label='Subject' 
              name={'subject'} 
              helpText='Allow only Following Shortcodes Work: {{shop.name}},{{order_number}},{{customer.name}}'
              inline />
              <TextField label='SubTitle' name={'subTitle'} inline />
              <SelectField 
                label="Email Type" 
                name={'etype'}
                options={types}
                inline >
              </SelectField>
              <InputWithUnitField
                label='Width'
                name={`${focusIdx}.attributes.width`}
                inline
              />
              <InputWithUnitField
                label='Breakpoint'
                helpText='Allows you to control on which breakpoint the layout should go desktop/mobile.'
                name={`${focusIdx}.data.value.breakpoint`}
                inline
              />
            </Space>
          </Collapse.Item>
          <Collapse.Item name='1' header='Theme Setting'>
            <Stack vertical spacing='tight'>
              <Grid.Row>
                <Grid.Col span={11}>
                  <FontFamily />
                </Grid.Col>
                <Grid.Col offset={1} span={11}>
                  <InputWithUnitField
                    label='Font size'
                    name={`${focusIdx}.data.value.font-size`}
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col span={11}>
                  <ColorPickerField
                    label='Text color'
                    name={`${focusIdx}.data.value.text-color`}
                  />
                </Grid.Col>
                <Grid.Col offset={1} span={11}>
                  <InputWithUnitField
                    label='Line height'
                    unitOptions='percent'
                    name={`${focusIdx}.data.value.line-height`}
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col span={11}>
                  <ColorPickerField
                    label='Background'
                    name={`${focusIdx}.attributes.background-color`}
                  />
                </Grid.Col>
                <Grid.Col offset={1} span={11}>
                  <ColorPickerField
                    label='Content background'
                    name={`${focusIdx}.data.value.content-background-color`}
                  />
                </Grid.Col>
              </Grid.Row>

              <TextAreaField
                label='Style'
                name={`${focusIdx}.data.value.user-style.content`}
              />
              <AddFont />
            </Stack>
          </Collapse.Item>
        </Collapse>
      </Stack.Item>
      </AttributesPanelWrapper>
    </div>
  );
}
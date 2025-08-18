import { IBlockData, BasicType,getPreviewClassName, AdvancedType,createCustomBlock,mergeBlock, components  } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
const {Section,Table} = components;
export type IOrderDetail = IBlockData<
  {
    'hbg-color':string;
    'h-color':string;
    'ht-padding':string;
    'hl-padding':string;
    'hb-padding':string;
    'hr-padding':string;
    'h-border-color':string;
    'h-border-width':string;
    'ht-radius':string;
    'color':string;
    'border-color': string;
    'border-width': string;
    'bt-padding':string;
    'bl-padding':string;
    'bb-padding':string;
    'br-padding':string;
    'ptext-tpadding':string;
    'ptext-lpadding':string;
    'ptext-bpadding':string;
    'ptext-rpadding':string;
    'bquantity-fontsize':string;
    'bquantity-fontweight':string;
    'bquantity-color':string;
    'bprice-fontsize':string;
    'bprice-fontweight':string;
    'bprice-color':string;
    'firstcolumn-align':string;
    'Secondcolumn-align':string;
    'Thirdcolumn-align':string;
    "background-color": string;
    "background-repeat": string;
    'background-size': string;
    'background-url': string;
    'font-size': string;
    'line-height':string;
    'padding':string;
    'border-radius':string;
  },
  {
    product:string;
    quantity:string;
    price:string;
    width:number;
  }
>;
export const OrderDetail= createCustomBlock<IOrderDetail>( {
    name: 'Order Detail',
    type: CustomBlocksType.OrderDetail,
    validParentType:[AdvancedType.SECTION, BasicType.SECTION],
    create:payload =>{
        const defaultData:IOrderDetail= {
            type: CustomBlocksType.OrderDetail,
            data:{
              value:{
                product:'Product',
                quantity:'Quantity',
                price:'Price',
                width:48,
              }
          },
          attributes:{
            'hbg-color':"#3154A5",
            'h-color':"#FFFFFF",
            'ht-padding':'10px',
            'hl-padding':'20px',
            'hb-padding':'10px',
            'hr-padding':'0px',
            'h-border-color':"#9b9b9b",
            'h-border-width':'0px',
            'ht-radius':'10px',
            'color':"#000000",
            'border-color': "#DBDBDB",
            'border-width': "1px",
            'bt-padding':'10px',
            'bl-padding':'20px',
            'bb-padding':'10px',
            'br-padding':'0px',
            'ptext-tpadding':'5px',
            'ptext-lpadding':'0px',
            'ptext-bpadding':'5px',
            'ptext-rpadding':'0px',
            'bquantity-fontsize':'14px',
            'bquantity-fontweight':'400',
            'bquantity-color':'#000000',
            'bprice-fontsize':'14px',
            'bprice-fontweight':'400',
            'bprice-color':'#000000',
            'firstcolumn-align':'left',
            'Secondcolumn-align':'center',
            'Thirdcolumn-align':'center',
            "background-color": "#ffffff",
            "background-repeat": "no-repeat",
            'background-size': "cover",
            'background-url': "",
            'font-size': '12px',
            'line-height': '2',
            'padding':'0px 0px 0px 0px',
            'border-radius':'0px 0px 0px 0px',

          },
          children: [],
        }
        return mergeBlock(defaultData, payload);
    },
    
    render({data,idx, mode, context, dataSource}){
        const {product,quantity,price,width} = data.data.value;
        const attributes = data.attributes;
        const border = attributes['radius']+' '+attributes['radius']+' 0px 0px';
        const instance = (
          <Section
          background-color={attributes['background-color']} 
          background-url={attributes['background-url']} 
          background-repeat={attributes['background-repeat']}  
          background-size={attributes['background-size']}
          padding={attributes['padding']}
          border-radius={border}
          css-class={mode === 'testing' ? getPreviewClassName(idx, data.type) : 'xseeb-order-detail'}
        >
            <Table>
              {`
                <tr class="xseeb-orderproduct-heading">
                  <th  style="width:`+width+`%; background-color:`+attributes['hbg-color']+`; color:`+attributes['h-color']+`; padding:`+attributes['ht-padding']+` `+attributes['hr-padding']+` `+attributes['hb-padding']+` `+attributes['hl-padding']+`; border:`+attributes['h-border-width']+` solid `+attributes['h-border-color']+`; border-radius: `+attributes['ht-radius']+` 0px 0px 0px; text-align:`+attributes['firstcolumn-align']+`;">`+product+`</th>
                  <th  style="background-color:`+attributes['hbg-color']+`; color:`+attributes['h-color']+`; padding:`+attributes['ht-padding']+` `+attributes['hr-padding']+` `+attributes['hb-padding']+` `+attributes['hl-padding']+`; border:`+attributes['h-border-width']+` solid `+attributes['h-border-color']+`; text-align:`+attributes['secondcolumn-align']+`;">`+price+`</th>
                  <th  style=" background-color:`+attributes['hbg-color']+`; color:`+attributes['h-color']+`; padding:`+attributes['ht-padding']+` `+attributes['hr-padding']+` `+attributes['hb-padding']+` `+attributes['hl-padding']+`; border:`+attributes['h-border-width']+` solid `+attributes['h-border-color']+`; border-radius: 0px  `+attributes['ht-radius']+` 0px 0px; text-align:`+attributes['thirdcolumn-align']+`">`+quantity+`</th>
                </tr>
                <tr class="xseeb-orderdetail-data">
                  <td id="xseeb-orderdetailproduct-style" style="width:`+width+`%; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['color']+`; padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['firstcolumn-align']+`;">
                      <div id="xseeb-orderdetailtitle-style" style="padding:`+attributes['ptext-tpadding']+` `+attributes['ptext-rpadding']+` `+attributes['ptext-bpadding']+` `+attributes['ptext-lpadding']+` ; ">
                          Ablum
                          <br>
                          Sold by: xfinity soft 
                      </div>
                  </td>
                  <td id="xseeb-orderdetailprice-style" style="font-size:`+attributes['bprice-fontsize']+`; font-weight:`+attributes['bprice-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bprice-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['secondcolumn-align']+`">$20</td>
                  <td id="xseeb-orderdetailquantity-style" style="font-size:`+attributes['bquantity-fontsize']+`; font-weight:`+attributes['bquantity-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bquantity-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['thirdcolumn-align']+`">1</td>
                </tr>
                <tr class="xseeb-orderdetail-data">
                  <td style="width:`+width+`%; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['color']+`; padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['firstcolumn-align']+`;">
                      <div  style="padding:`+attributes['ptext-tpadding']+` `+attributes['ptext-rpadding']+` `+attributes['ptext-bpadding']+` `+attributes['ptext-lpadding']+` ; ">
                          Ablum
                      </div>
                  </td>
                  <td  style="font-size:`+attributes['bprice-fontsize']+`; font-weight:`+attributes['bprice-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bprice-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['secondcolumn-align']+`">$20</td>
                  <td  style="font-size:`+attributes['bquantity-fontsize']+`; font-weight:`+attributes['bquantity-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bquantity-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['thirdcolumn-align']+`">1</td>
                </tr>
                <tr class="xseeb-orderdetail-data">
                  <td  style="width:`+width+`%; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['color']+`; padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['firstcolumn-align']+`;">
                      <div  style="padding:`+attributes['ptext-tpadding']+` `+attributes['ptext-rpadding']+` `+attributes['ptext-bpadding']+` `+attributes['ptext-lpadding']+` ; ">
                          Ablum 
                      </div>
                  </td>
                  <td  style="font-size:`+attributes['bprice-fontsize']+`; font-weight:`+attributes['bprice-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bprice-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['secondcolumn-align']+`">$20</td>
                  <td  style="font-size:`+attributes['bquantity-fontsize']+`; font-weight:`+attributes['bquantity-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bquantity-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['thirdcolumn-align']+`">1</td>
                </tr>
              `}
            </Table>
        </Section>
        );
        return instance;
    }
});
export {OrderDetailPanel} from './OrderDetailPanel';
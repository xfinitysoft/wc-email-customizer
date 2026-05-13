import { IBlockData, BasicType,getPreviewClassName, AdvancedType,createCustomBlock,mergeBlock, components  } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
import image1 from '@xfinity/images/image-1.png';
import image2 from '@xfinity/images/image-2.png';
import image3 from '@xfinity/images/image-3.png';
import image4 from '@xfinity/images/image-4.png';
const {Section,Table} = components;
export type IProductCart = IBlockData<
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
    'image-radius':string;
    'iborder-width':string;
    'iborder-color':string;
    'image-height':string;
    'image-width':string;
    'image-tpadding':string;
    'image-lpadding':string;
    'image-bpadding':string;
    'image-rpadding':string;
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
    'fhbg-color':string;
    'fh-color':string;
    'fht-padding':string;
    'fhl-padding':string;
    'fhb-padding':string;
    'fhr-padding':string;
    'fh-border-color':string;
    'fh-border-width':string;
    'fh-font-size':string;
    'fh-font-weight':string;
    'fh-price-color':string;
    'fh-price-size':string;
    'fh-price-weight':string;
    'fh-align':string;
    'fbbg-color':string;
    'fb-color':string;
    'fbt-padding':string;
    'fbl-padding':string;
    'fbb-padding':string;
    'fbr-padding':string;
    'fb-border-color':string;
    'fb-border-width':string;
    'fb-font-size':string;
    'fb-align':string;
    'fb-font-weight':string;
    'fb-price-color':string;
    'fb-price-size':string;
    'fb-price-weight':string;
    'firstcolumn-align':string;
    'Secondcolumn-align':string;
    'Thirdcolumn-align':string;
    "background-color": string;
    "background-repeat": string;
    'background-size': string;
    'background-url': string;
    'font-size': string;
    'line-height': string;
    'padding':string;
    'border-radius':string;
  },
  {
    product:string;
    quantity:string;
    price:string;
    subtotal:string;
    shipping:string;
    tax:string;
    total:string;
    width:number;
  }
>;
export const ProductCart= createCustomBlock<IProductCart>( {
    name: 'Product Cart',
    type: CustomBlocksType.ProductCart,
    validParentType:[AdvancedType.SECTION, BasicType.SECTION],
    create:payload => {
        const defaultData:IProductCart= {
            type: CustomBlocksType.ProductCart,
            data:{
                value:{
                  product:'Product',
                  quantity:'Quantity',
                  price:'Price',
                  subtotal:'SubTotal:',
                  shipping:'Flate-Rate Shipping:',
                  tax:'Estimated Tax:',
                  total:'Order Total',
                  width:48,
                }
            },
            attributes:{
              'hbg-color':"#562482",
              'h-color':"#FFFFFF",
              'ht-padding':'10px',
              'hl-padding':'20px',
              'hb-padding':'10px',
              'hr-padding':'0px',
              'h-border-color':"#9b9b9b",
              'h-border-width':'0px',
              'ht-radius':'0px',

              'color':"#000000",
              'border-color': "#562482",
              'border-width': "1px",
              'bt-padding':'10px',
              'bl-padding':'20px',
              'bb-padding':'10px',
              'br-padding':'0px',
              'image-radius':'10px',
              'iborder-width':'1px',
              'iborder-color':'#E3E3E3',
              'image-height':'70px',
              'image-width':'70px',
              'image-tpadding':'15px',
              'image-lpadding':'15px',
              'image-bpadding':'15px',
              'image-rpadding':'15px',
              'ptext-tpadding':'15px',
              'ptext-lpadding':'15px',
              'ptext-bpadding':'0px',
              'ptext-rpadding':'0px',
              'bquantity-fontsize':'18px',
              'bquantity-fontweight':'600',
              'bquantity-color':'#000000',
              'bprice-fontsize':'18px',
              'bprice-fontweight':'600',
              'bprice-color':'#562482',

              
              'fhbg-color':"#ffffff",
              'fh-color':"#000000",
              'fht-padding':'0px',
              'fhl-padding':'2px',
              'fhb-padding':'0px',
              'fhr-padding':'10px',
              'fh-border-color':"#9b9b9b",
              'fh-border-width':'0px',
              'fh-font-size':'12px',
              'fh-font-weight':'normal',
              'fh-price-color':"#000000",
              'fh-price-size':'18px',
              'fh-price-weight':'400',
              'fh-align':'right',
              'fbbg-color':"#ffffff",
              'fb-color':"#000000",
              'fbt-padding':'0px',
              'fbl-padding':'0px',
              'fbb-padding':'0px',
              'fbr-padding':'10px',
              'fb-border-color':"#9b9b9b",
              'fb-border-width':'0px',
              'fb-font-size':'12px',
              'fb-align':'left',
              'fb-font-weight':'normal',
              'fb-price-color':"#562482",
              'fb-price-size':'18px',
              'fb-price-weight':'bold',

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
        const {product,quantity,price,subtotal,width,shipping,tax,total} = data.data.value;
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
              css-class={mode === 'testing' ? getPreviewClassName(idx, data.type) :'xseeb-order-products'}
            >
                <Table>
                  {`
                    <tr class="xseeb-orderproduct-heading">
                      <th  style="width:`+width+`%; background-color:`+attributes['hbg-color']+`; color:`+attributes['h-color']+`; padding:`+attributes['ht-padding']+` `+attributes['hr-padding']+` `+attributes['hb-padding']+` `+attributes['hl-padding']+`; border:`+attributes['h-border-width']+` solid `+attributes['h-border-color']+`; border-radius: `+attributes['ht-radius']+` 0px 0px 0px; text-align:`+attributes['firstcolumn-align']+`;">`+product+`</th>
                      <th  style="background-color:`+attributes['hbg-color']+`; color:`+attributes['h-color']+`; padding:`+attributes['ht-padding']+` `+attributes['hr-padding']+` `+attributes['hb-padding']+` `+attributes['hl-padding']+`; border:`+attributes['h-border-width']+` solid `+attributes['h-border-color']+`; text-align:`+attributes['secondcolumn-align']+`;">`+quantity+`</th>
                      <th  style=" background-color:`+attributes['hbg-color']+`; color:`+attributes['h-color']+`; padding:`+attributes['ht-padding']+` `+attributes['hr-padding']+` `+attributes['hb-padding']+` `+attributes['hl-padding']+`; border:`+attributes['h-border-width']+` solid `+attributes['h-border-color']+`; border-radius: 0px  `+attributes['ht-radius']+` 0px 0px; text-align:`+attributes['thirdcolumn-align']+`">`+price+`</th>
                    </tr>
                    <tr class="xseeb-orderproduct-data">
                      <td id="xseeb-cartproduct-style" style="width:`+width+`%; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['color']+`; padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['firstcolumn-align']+`;">
                        <div style="display:inline-flex;">
                            <div id="xseeb-cartimage-style" style="border-radius: `+attributes['image-radius']+`; border: `+attributes['iborder-width']+`  solid `+attributes['iborder-color']+` ; height: `+attributes['image-height']+` ; width: `+attributes['image-width']+`; display: inline-flex; padding:`+attributes['image-tpadding']+` `+attributes['image-rpadding']+` `+attributes['image-bpadding']+` `+attributes['image-lpadding']+`">
                              <img src="`+image1+`" alt="image-description"/>
                            </div>
                            <div id="xseeb-carttitle-style" style="display:inline-flex; padding:`+attributes['ptext-tpadding']+` `+attributes['ptext-rpadding']+` `+attributes['ptext-bpadding']+` `+attributes['ptext-lpadding']+` ; ">
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                        </div>
                      </td>
                      <td id="xseeb-cartquantity-style" style="font-size:`+attributes['bquantity-fontsize']+`; font-weight:`+attributes['bquantity-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bquantity-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['secondcolumn-align']+`">1</td>
                      <td id="xseeb-cartprice-style" style="font-size:`+attributes['bprice-fontsize']+`; font-weight:`+attributes['bprice-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bprice-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['thirdcolumn-align']+`">$20</td>
                    </tr>
                    <tr class="xseeb-orderproduct-data">
                      <td  style="width:`+width+`%; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['color']+`; padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['firstcolumn-align']+`;">
                        <div style="display:inline-flex;">
                            <div  style="border-radius: `+attributes['image-radius']+`; border: `+attributes['iborder-width']+`  solid `+attributes['iborder-color']+` ; height: `+attributes['image-height']+` ; width: `+attributes['image-width']+`; display: inline-flex; padding:`+attributes['image-tpadding']+` `+attributes['image-rpadding']+` `+attributes['image-bpadding']+` `+attributes['image-lpadding']+`">
                              <img src="`+image2+`" alt="image-description"/>
                            </div>
                            <div style="display:inlne-flex; padding:`+attributes['ptext-tpadding']+` `+attributes['ptext-rpadding']+` `+attributes['ptext-bpadding']+` `+attributes['ptext-lpadding']+` ; ">
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                        </div>
                      </td>
                      <td style="font-size:`+attributes['bquantity-fontsize']+`; font-weight:`+attributes['bquantity-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bquantity-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['secondcolumn-align']+`">1</td>
                      <td style="font-size:`+attributes['bprice-fontsize']+`; font-weight:`+attributes['bprice-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bprice-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['thirdcolumn-align']+`">$20</td>
                    </tr>
                    <tr class="xseeb-orderproduct-data">
                      <td  style="width:`+width+`%; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['color']+`; padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['firstcolumn-align']+`;">
                        <div style="display:inline-flex;">
                            <div  style="border-radius: `+attributes['image-radius']+`; border: `+attributes['iborder-width']+`  solid `+attributes['iborder-color']+` ; height: `+attributes['image-height']+` ; width: `+attributes['image-width']+`; display: inline-flex; padding:`+attributes['image-tpadding']+` `+attributes['image-rpadding']+` `+attributes['image-bpadding']+` `+attributes['image-lpadding']+`">
                              <img src="`+image3+`" alt="image-description"/>
                            </div>
                            <div style="display:inlne-flex; padding:`+attributes['ptext-tpadding']+` `+attributes['ptext-rpadding']+` `+attributes['ptext-bpadding']+` `+attributes['ptext-lpadding']+` ; ">
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                        </div>
                      </td>
                      <td style="font-size:`+attributes['bquantity-fontsize']+`; font-weight:`+attributes['bquantity-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bquantity-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['secondcolumn-align']+`">1</td>
                      <td style="font-size:`+attributes['bprice-fontsize']+`; font-weight:`+attributes['bprice-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bprice-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['thirdcolumn-align']+`">$20</td>
                    </tr>
                    <tr class="xseeb-orderproduct-data">
                      <td style="width:`+width+`%; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['color']+`; padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['firstcolumn-align']+`;">
                        <div style="display:inline-flex;">
                            <div  style="border-radius: `+attributes['image-radius']+`; border: `+attributes['iborder-width']+`  solid `+attributes['iborder-color']+` ; height: `+attributes['image-height']+` ; width: `+attributes['image-width']+`; display: inline-flex; padding:`+attributes['image-tpadding']+` `+attributes['image-rpadding']+` `+attributes['image-bpadding']+` `+attributes['image-lpadding']+`">
                              <img src="`+image4+`" alt="image-description"/>
                            </div>
                            <div  style="display:inlne-flex; padding:`+attributes['ptext-tpadding']+` `+attributes['ptext-rpadding']+` `+attributes['ptext-bpadding']+` `+attributes['ptext-lpadding']+` ; ">
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                        </div>
                      </td>
                      <td  style="font-size:`+attributes['bquantity-fontsize']+`; font-weight:`+attributes['bquantity-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bquantity-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['secondcolumn-align']+`">1</td>
                      <td  style="font-size:`+attributes['bprice-fontsize']+`; font-weight:`+attributes['bprice-fontweight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`; color:`+attributes['bprice-color']+`;  padding:`+attributes['bt-padding']+` `+attributes['br-padding']+` `+attributes['bb-padding']+` `+attributes['bl-padding']+`; text-align:`+attributes['thirdcolumn-align']+`">$20</td>
                    </tr>
                  `}
                </Table>
                <Table 
                  font-size={attributes['font-size']}
                  font-family={attributes['font-family']}
                  line-height={attributes['line-height']}
                >
                  {`
                    <tr>
                      <th style="background-color:`+attributes['fhbg-color']+`; font-size:`+attributes['fh-font-size']+`; font-weight:`+attributes['fh-font-weight']+`;border:`+attributes['fh-border-width']+` solid `+attributes['fh-border-color']+`;color:`+attributes['fh-color']+`; text-align:`+attributes['fh-align']+`; padding:`+attributes['fht-padding']+` `+attributes['fhr-padding']+` `+attributes['fhb-padding']+` `+attributes['fhl-padding']+`;">`+subtotal+`</th>
                      <td class="xseeb-order-subtotal" style="background-color:`+attributes['fbbg-color']+`;  font-weight:`+attributes['fb-font-weight']+`;border:`+attributes['fb-border-width']+` solid `+attributes['fb-border-color']+`; color:`+attributes['fb-color']+`; text-align:right; padding:`+attributes['fbt-padding']+` `+attributes['fbr-padding']+` `+attributes['fbb-padding']+` `+attributes['fbl-padding']+`;">$20</td>
                    </tr>
                    <tr>
                      <th style="background-color:`+attributes['fhbg-color']+`;  font-size:`+attributes['fh-font-size']+`;font-weight:`+attributes['fh-font-weight']+`;border:`+attributes['fh-border-width']+` solid `+attributes['fh-border-color']+`;color:`+attributes['fh-color']+`; text-align:`+attributes['fh-align']+`; padding:`+attributes['fht-padding']+` `+attributes['fhr-padding']+` `+attributes['fhb-padding']+` `+attributes['fhl-padding']+`;">`+shipping+`</th>
                      <td class="xseeb-order-shipping" style="background-color:`+attributes['fbbg-color']+`; font-size:`+attributes['fb-font-size']+`; font-weight:`+attributes['fb-font-weight']+`;border:`+attributes['fb-border-width']+` solid `+attributes['fb-border-color']+`; color:`+attributes['fb-color']+`; text-align:right; padding:`+attributes['fbt-padding']+` `+attributes['fbr-padding']+` `+attributes['fbb-padding']+` `+attributes['fbl-padding']+`;">$20</td>
                    </tr>
                    <tr>
                      <th style="background-color:`+attributes['fhbg-color']+`;  font-size:`+attributes['fh-font-size']+`; font-weight:`+attributes['fh-font-weight']+`;border:`+attributes['fh-border-width']+` solid `+attributes['fh-border-color']+`;color:`+attributes['fh-color']+`; text-align:`+attributes['fh-align']+`; padding:`+attributes['fht-padding']+` `+attributes['fhr-padding']+` `+attributes['fhb-padding']+` `+attributes['fhl-padding']+`;">`+tax+`</th>
                      <td class="xseeb-order-tax" style="background-color:`+attributes['fbbg-color']+`; font-size:`+attributes['fb-font-size']+`; font-weight:`+attributes['fb-font-weight']+`;border:`+attributes['fb-border-width']+` solid `+attributes['fb-border-color']+`; color:`+attributes['fb-color']+`; text-align:right; padding:`+attributes['fbt-padding']+` `+attributes['fbr-padding']+` `+attributes['fbb-padding']+` `+attributes['fbl-padding']+`;">$0</td>
                    </tr>
                    <tr>
                      <th style="background-color:`+attributes['fhbg-color']+`; font-size:`+attributes['fh-price-size']+`; font-weight:`+attributes['fh-price-weight']+`;border:`+attributes['fh-border-widt']+` solid `+attributes['border-color']+`;color:`+attributes['fh-price-color']+`; text-align:`+attributes['fh-align']+`;padding:`+attributes['fht-padding']+` `+attributes['fhr-padding']+` `+attributes['fhb-padding']+` `+attributes['fhl-padding']+`;">`+total+`</th>
                      <td class="xseeb-order-total" style="background-color:`+attributes['fbbg-color']+`; font-size:`+attributes['fb-price-size']+`; font-weight:`+attributes['fb-price-weight']+`;border:`+attributes['fb-border-width']+` solid `+attributes['fb-border-color']+`; color:`+attributes['fb-price-color']+`; text-align:right; padding:`+attributes['fbt-padding']+` `+attributes['fbr-padding']+` `+attributes['fbb-padding']+` `+attributes['fbl-padding']+`;">$40</td>
                    </tr>
                  `}
                </Table>
            </Section>
        );
        return instance;
    }
});
export {ProductCartPanel} from './ProductCartPanel';
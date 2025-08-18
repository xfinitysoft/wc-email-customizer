import { IBlockData, BasicType,getPreviewClassName, AdvancedType,createCustomBlock,mergeBlock, components } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
const {Section,Table} = components;
export type IOrderTotal = IBlockData<
  {
    'background-color':string;
    'background-repeat':string;
    'background-size':string;
    'background-url':string;
    'color':string;
    'font-size':string;
    'line-height':string;
    'padding':string;
    'border-width':string;
    'font-family':string;
    'font-weight':string;
    'left-align':string;
    'right-align':string;
    'border-color':string;
  },
  {
    total:string;
    width:number;
  }
>;
export const OrderTotal= createCustomBlock<IOrderTotal>({
    name: 'Order Total',
    type: CustomBlocksType.OrderTotal,
    validParentType:[AdvancedType.SECTION, BasicType.SECTION],
    create:payload=>{
        const defaultData: any = {
            type: CustomBlocksType.OrderTotal,
            data:{
                value:{
                  total:'Total',
                  width:30,
                }
            },
            attributes:{
                "background-color": "#ffffff",
                "background-repeat": "no-repeat",
                'background-size': "cover",
                'background-url': "",
                'color':"#000000",
                'font-size': '12px',
                'line-height': '4',
                'padding':'0px 0px 0px 0px',
                'border-width': "1px",
                'font-family': "Times New Roman",
                'font-weight': "normal",
                'left-align': "center",
                'right-align': "center",
                'border-color':'#9b9b9b',
            },
            children: [],
        }
        return mergeBlock(defaultData, payload);
    },
    
    render({data,idx, mode, context, dataSource}){
        const {total,width} = data.data.value;
        const attributes = data.attributes;
        const instance = (
            <Section
              background-color={attributes['background-color']} 
              background-url={attributes['background-url']} 
              background-repeat={attributes['background-repeat']}  
              background-size={attributes['background-size']}
              padding={attributes['padding']}
              css-class={ mode === 'testing' ? getPreviewClassName(idx, data.type) : 'xseeb-order-total'}
            >
                <Table 
                  font-size={attributes['font-size']}
                  font-family={attributes['font-family']}
                  line-height={attributes['line-height']} 
                >
                  {`
                    <tr>
                      <th style="font-weight:`+attributes['font-weight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`;color:`+attributes['color']+`; text-align:`+attributes['left-align']+`">`+total+`</th>
                      <td class="xseeb-order-total" style="font-weight:`+attributes['font-weight']+`; border:`+attributes['border-width']+` solid `+attributes['border-color']+`;width:`+width+`%; color:`+attributes['color']+`; text-align:`+attributes['right-align']+`">$20</td>
                    </tr>
                  `}
                </Table>
            </Section>
        );
        return instance;
    }
});
export { OrderTotalPanel } from './OrderTotalPanel';
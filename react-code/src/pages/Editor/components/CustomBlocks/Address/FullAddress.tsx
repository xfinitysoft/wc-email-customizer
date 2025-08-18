import { IBlockData, BasicType, AdvancedType,getPreviewClassName,createCustomBlock,mergeBlock, components  } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
const {Section, Column,Text } = components;
export type IFullAddress = IBlockData<
  {
    'align':string;
    'background-color': string;
    'background-repeat': string;
    'background-size': string;
    'background-url':string;
    'color': string;
    'font-family': string;
    'font-size': string;
    'font-style': string;
    'font-weight': string;
    'line-height': string;
    'padding':string;
  },
  {
    BillingAddress: string;
    ShippingAddress:string;
  }
>;
export const FullAddress= createCustomBlock<IFullAddress>({
    name: 'Full Address',
    type: CustomBlocksType.FullAddress,
    validParentType:[AdvancedType.COLUMN,BasicType.COLUMN],
    create: payload => {
        const defaultData: IFullAddress= {
            type: CustomBlocksType.FullAddress,
            data:{
                value:{
                    BillingAddress:'Jhon Doe <br/>Ap #867-859 Sit Rd.<br/>Azusa, NY 10001<br/>United States (US)',
                    ShippingAddress:'Jhon Doe <br/>Ap #867-859 Sit Rd.<br/>Azusa, NY 10001<br/>United States (US)',
                }
            },
            attributes:{
                'align':'left',
                "background-color": "#ffffff",
                "background-repeat": "no-repeat",
                'background-size': "cover",
                'background-url': "",
                'color': '#000000',
                'font-family': 'Tahoma',
                'font-size': '12px',
                'font-style': 'italic',
                'font-weight': 'bold',
                'line-height': '1',
                'padding':'0px 0px 0px 0px'
            },
            children: [],
        }
        return mergeBlock(defaultData, payload);
    },
    
    render({data,idx, mode, context, dataSource}){
        const {BillingAddress,ShippingAddress} = data.data.value;
        const attributes = data.attributes;
        const instance = (
            <Section
                background-color={attributes['background-color']} 
                background-url={attributes['background-url']} 
                background-repeat={attributes['background-repeat']}  
                background-size={attributes['background-size']}
                padding={attributes['padding']}
                css-class={mode === 'testing' ? getPreviewClassName(idx, data.type) : ''}
            >
                <Column >
                    <Text 
                        align={attributes['align']}
                        color={attributes['color']}
                        font-size={attributes['font-size']}
                        font-style={attributes['font-style']}
                        font-weight={attributes['font-weight']}
                        line-height={attributes['line-height']}
                        
                    >
                        Billing Address
                    </Text>
                    <Text 
                        align={attributes['align']}
                        color={attributes['color']}
                        font-size={attributes['font-size']}
                        font-style={attributes['font-style']}
                        font-weight={attributes['font-weight']}
                        line-height={attributes['line-height']}
                        css-class='xseeb-billing-address'
                    >
                        {BillingAddress}
                    </Text>
                </Column>
                <Column >
                    <Text 
                        align={attributes['align']}
                        color={attributes['color']}
                        font-size={attributes['font-size']}
                        font-style={attributes['font-style']}
                        font-weight={attributes['font-weight']}
                        line-height={attributes['line-height']}
                        
                    >
                        Shipping Address
                    </Text>
                    <Text 
                        align={attributes['align']}
                        color={attributes['color']}
                        font-size={attributes['font-size']}
                        font-style={attributes['font-style']}
                        font-weight={attributes['font-weight']}
                        line-height={attributes['line-height']}
                        css-class='xseeb-shipping-address'
                    >
                        {ShippingAddress}
                    </Text>
                </Column>
            </Section>
        );
        return instance;
    }
});
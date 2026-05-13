import { IBlockData, BasicType, getPreviewClassName, AdvancedType, createCustomBlock, mergeBlock, components } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
import product from '@xfinity/images/product.png';
const { Group, Section, Column, Image, Button, Text } = components;
const product_list = {
    image: `${product}`,
    title: 'Product Name',
    price: '$59.99',
    url: '#',
};
export type IProductRecommendation = IBlockData<
    {
        'pd-width': string;
        'pd-height': string;
        'background-color': string;
        'hcolor': string;
        'pncolor': string;
        'prcolor': string;
        'bcolor': string;
        'btcolor': string;
        'p-font-family': string;
        'h-font-size': string;
        'p-font-size': string;
        'p-line-height': string;
        'pr-font-family': string;
        'pr-font-size': string;
        'pr-line-height': string;
    },
    {
        heading: string;
        buttonText: string;
        producttype: string;
        quantity: number;
    }
>;
export const Products = createCustomBlock<IProductRecommendation>({
    name: 'Recommended Product',
    type: CustomBlocksType.Products,
    validParentType: [AdvancedType.SECTION, BasicType.SECTION],
    create: payload => {
        const defaultData: IProductRecommendation = {
            type: CustomBlocksType.Products,
            data: {
                value: {
                    heading: 'Recommended Products',
                    buttonText: 'Buy',
                    producttype: 'newest',
                    quantity: 6,
                },
            },
            attributes: {
                'pd-width': '5px',
                'pd-height': '5px',
                'background-color': '#ffffff',
                'hcolor': '#000000',
                'pncolor': '#000000',
                'prcolor': '#000000',
                'bcolor': '#4A90E2',
                'btcolor': '#ffffff',
                'p-font-family': "'andale mono', monospace",
                'h-font-size': '20px',
                'p-font-size': '12px',
                'p-line-height': '1px',
                'pr-font-family': "'andale mono', monospace",
                'pr-font-size': '12px',
                'pr-line-height': '1px'
            },
            children: [],
        };
        return mergeBlock(defaultData, payload);
    },
    render({ data, idx, mode, context, dataSource }) {
        const { buttonText, heading, quantity } = data.data.value;
        const attributes = data.attributes;
        const perWidth = quantity <= 3 ? '' : '33.33%';
        let productlist = new Array(quantity).fill(product_list);
        const instance = (
            <Section
                padding='20px 0px 20px 0px'
                border='none'
                direction='ltr'
                text-align='center'
                background-color={attributes['background-color']}
                background-url={attributes['background-url']}
                background-repeat={attributes['background-repeat']}
                background-size={attributes['background-size']}
                css-class={mode === 'testing' ? getPreviewClassName(idx, data.type) : 'xseeb-product-node'}
            >
                <Section padding='0px'>
                    <Column padding='0px' border='none' vertical-align='top'>
                        <Text
                            font-size={attributes['h-font-size']}
                            padding='10px 25px 10px 25px'
                            font-weight={attributes['font-weight']}
                            align='center'
                            color={attributes['hcolor']}
                        >
                            {heading}
                        </Text>
                    </Column>
                </Section>
                <Section padding='0px'>
                    <Group vertical-align='top' direction='ltr'>
                        {productlist.map((item, index) => (
                            <Column
                                key={index}
                                width={perWidth}
                                padding={attributes['padding']}
                                border='none'
                                vertical-align='top'
                                css-class='xseeb-products'
                            >
                                <Image
                                    align='center'
                                    height='auto'
                                    src={item.image}
                                    css-class='xseeb-img'
                                />
                                <Text
                                    font-size={attributes['p-font-size']}
                                    font-family={attributes['p-font-family']}
                                    font-weight={attributes['p-font-weight']}
                                    align='center'
                                    color={attributes['pncolor']}
                                    width='100vh'
                                    css-class='xseeb-title'
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    font-size={attributes['pr-font-size']}
                                    line-height={attributes['pr-line-height']}
                                    font-weight={attributes['pr-font-weight']}
                                    font-family={attributes['pr-font-family']}
                                    padding='0px'
                                    align='center'
                                    color={attributes['prcolor']}
                                    css-class='xseeb-price'
                                >
                                    {item.price}
                                </Text>
                                <Button
                                    align='center'
                                    padding='15px 0px'
                                    background-color={attributes['bcolor']}
                                    color={attributes['btcolor']}
                                    target='_blank'
                                    vertical-align='middle'
                                    border='none'
                                    text-align='center'
                                    href={item.url}
                                    css-class='xseeb-buy'
                                >
                                    {buttonText}
                                </Button>
                            </Column>
                        ))}
                    </Group>
                </Section>
            </Section>
        )
        return instance;
    },
});
export { ProductPanel } from './ProductPanel'
import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager, BlockMarketManager, BlockMaskWrapper } from 'easy-email-extensions';
import React from 'react';
import { Stack } from 'easy-email-editor';
import { CustomBlocksType } from './constants';
import { Products, ProductPanel } from './Products';
import {BillingAddress,FullAddress,ShippingAddress,AddressPanel} from './Address';
import {OrderDetail,OrderDetailPanel} from './OrderDetail';
import {OrderTotal,OrderTotalPanel} from './OrderTotal';
import {OrderSubTotal,OrderSubTotalPanel} from './OrderSubTotal';
import {TotalTable,TotalTablePanel} from './TotalTable';
import {ProductCart,ProductCartPanel} from './ProductCart';
import {CartDetail,CartDetailPanel} from './CartDetail';
import {ItemShipped,ItemShippedPanel} from './ItemShipped';
import Orderdetails from '@xfinity/images/Orderdetails.png';
import Productcart from '@xfinity/images/Productcart.png';
import CartImage from '@xfinity/images/cartimage.png';
import ItemShip from '@xfinity/images/itemshipped.png';
import fullAddress from '@xfinity/images/FullAddress.png';
import billingaddress from '@xfinity/images/billingaddress.png';
import shippingaddress from '@xfinity/images/shippingaddress.png';
import total from '@xfinity/images/total.png';
import subtotal from '@xfinity/images/subtotal.png';
import totaltable from '@xfinity/images/totaltable.png';
import product from '@xfinity/images/reproduct.png';

BlockManager.registerBlocks({ 
  Products:Products,
  BillingAddress:BillingAddress,
  ShippingAddress:ShippingAddress,
  FullAddress:FullAddress,
  OrderDetail:OrderDetail,
  OrderTotal:OrderTotal,
  OrderSubTotal:OrderSubTotal,
  TotalTable:TotalTable,
  ProductCart:ProductCart,
  CartDetail:CartDetail,
  ItemShipped:ItemShipped,
});


BlockAttributeConfigurationManager.add({
  [CustomBlocksType.Products]: ProductPanel,
  [CustomBlocksType.BillingAddress]:AddressPanel,
  [CustomBlocksType.ShippingAddress]:AddressPanel,
  [CustomBlocksType.FullAddress]:AddressPanel,
  [CustomBlocksType.OrderDetail]:OrderDetailPanel,
  [CustomBlocksType.OrderTotal]:OrderTotalPanel,
  [CustomBlocksType.OrderSubTotal]:OrderSubTotalPanel,
  [CustomBlocksType.TotalTable]:TotalTablePanel,
  [CustomBlocksType.ProductCart]:ProductCartPanel,
  [CustomBlocksType.CartDetail]:CartDetailPanel,
  [CustomBlocksType.ItemShipped]:ItemShippedPanel

});
BlockMarketManager.addCategories([
  {
    title: 'Woocommerce Blocks',
    name: 'Custom',
    blocks: [
      {
        type: CustomBlocksType.Products,
        title: 'Recommended Products',
        description: 'Show All Recommended Products',
        component: () => (
          <BlockMaskWrapper type={CustomBlocksType.Products as any} payload={{}}>
            <div style={{ position: 'relative' }}>
              <img src={product} style={{ maxWidth: '100%' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
            </div>
          </BlockMaskWrapper>
        ),
        thumbnail:
          `${product}`,
      },
      
      {
        type: CustomBlocksType.ProductCart,
        title: 'Cart',
        description: 'Show Cart',
        component: () => (
          <Stack.Item fill>
            <Stack vertical>
                <BlockMaskWrapper type={CustomBlocksType.OrderDetail as any} payload={{}}>
                  <div style={{ position: 'relative' }}>
                    <img src={Orderdetails} style={{ maxWidth: '100%' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                  </div>
                </BlockMaskWrapper>
                <BlockMaskWrapper type={CustomBlocksType.CartDetail as any} payload={{}}>
                  <div style={{ position: 'relative' }}>
                    <img src={CartImage} style={{ maxWidth: '100%' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                  </div>
                </BlockMaskWrapper>
                <BlockMaskWrapper type={CustomBlocksType.ItemShipped as any} payload={{}}>
                  <div style={{ position: 'relative' }}>
                    <img src={ItemShip} style={{ maxWidth: '100%' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                  </div>
                </BlockMaskWrapper>
                <BlockMaskWrapper type={CustomBlocksType.ProductCart as any} payload={{}}>
                  <div style={{ position: 'relative' }}>
                    <img src={Productcart} style={{ maxWidth: '100%' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                  </div>
                </BlockMaskWrapper>
            </Stack>
          </Stack.Item>
        ),
      },
      {
        type: CustomBlocksType.FullAddress,
        title: 'Address',
        description: 'Insert Address in your Template',
        component: () => (
          <Stack.Item fill>
            <Stack vertical>
              <BlockMaskWrapper type={CustomBlocksType.BillingAddress as any} payload={{}}>
                <div style={{ position: 'relative' }}>
                  <img src={billingaddress} style={{ maxWidth: '100%' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                </div>
              </BlockMaskWrapper>
              <BlockMaskWrapper type={CustomBlocksType.ShippingAddress as any} payload={{}}>
                <div style={{ position: 'relative' }}>
                  <img src={shippingaddress} style={{ maxWidth: '100%' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                </div>
              </BlockMaskWrapper>
              <BlockMaskWrapper type={CustomBlocksType.FullAddress as any} payload={{}}>
                <div style={{ position: 'relative' }}>
                  <img src={fullAddress} style={{ maxWidth: '100%' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                </div>
              </BlockMaskWrapper>
            </Stack>
          </Stack.Item>
        ),
      },
      {
        type: CustomBlocksType.OrderTotal,
        title: 'Total',
        description: 'Show Total',
        component: () => (
          <Stack.Item fill>
            <Stack vertical>
              <BlockMaskWrapper type={CustomBlocksType.OrderSubTotal as any} payload={{}}>
                <div style={{ position: 'relative' }}>
                  <img src={subtotal} style={{ maxWidth: '100%' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                </div>
              </BlockMaskWrapper>
              <BlockMaskWrapper type={CustomBlocksType.OrderTotal as any} payload={{}}>
                <div style={{ position: 'relative' }}>
                  <img src={total} style={{ maxWidth: '100%' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                </div>
              </BlockMaskWrapper>
              <BlockMaskWrapper type={CustomBlocksType.TotalTable as any} payload={{}}>
                <div style={{ position: 'relative' }}>
                  <img src={totaltable} style={{ maxWidth: '100%' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
                </div>
              </BlockMaskWrapper>
            </Stack>
          </Stack.Item>
        ),
      },      
    ],
  }
]);


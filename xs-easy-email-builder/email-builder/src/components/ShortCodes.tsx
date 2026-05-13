import React from "react";
import { Table , Modal, Button, Message,Link,Grid } from '@arco-design/web-react';
import { IconCopy } from '@arco-design/web-react/icon';
import {Help} from './Help';
export default function ShortCodes (){
	const [visible, setVisible] = React.useState(false);
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [modalText, setModalText] = React.useState('Content of the modal');

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
	    setVisible(false);

	};
	const handleCancel = () => {
		setVisible(false);
	};
	
	const copyShortCode = async (shortcode) => {
		try {
			await navigator.clipboard.writeText(shortcode);
			var description =shortcode+' is copied'
			Message.success(description);
			handleCancel();
		} catch (err) {
			Message.error('Failed to copy: '+shortcode);
		}
	};
	//for tables 
	const columns = [
	  {
		title: 'ShortCodes',
		dataIndex: 'shortcodes',
		width:330,
		render: shortcodes => (
			<Link hoverable={true} icon={<IconCopy />} onClick={() => copyShortCode(shortcodes)}>
				{shortcodes}
			</Link>
		)
	  },
	  {
		title: 'Description',
		dataIndex: 'description',
	  }
	];
	const shipping_address = [
	  {
		key: '1',
		shortcodes: '{{shipping.first_name}}',
		description: ' To get shipping first name',
	  }, 
	  {
		key: '2',
		shortcodes: '{{shipping.last_name}}',
		description: 'To get shipping last name',
	  },
	  {
		key: '3',
		shortcodes: '{{shipping.full_name}}',
		description: 'To get shipping name',
	  },
	  {
		key: '4',
		shortcodes: '{{shipping.company}}',
		description: 'To get shipping company',
	  },
	  {
		key: '5',
		shortcodes: '{{shipping.address1}}',
		description: 'To get shipping address 1',
	  },
	  {
		key: '6',
		shortcodes: '{{shipping.address2}}',
		description: ' To get shipping address 2',
	  },
	  {
		key: '7',
		shortcodes: '{{shipping.city}}',
		description: ' To get shipping city',
	  },
	  {
		key: '8',
		shortcodes: '{{shipping.state}}',
		description: 'To get shipping state',
	  },
	  {
		key: '9',
		shortcodes: '{{shipping.zip}}',
		description: 'To get shipping zip code',
	  },
	  {
		key: '10',
		shortcodes: '{{shipping.country}}',
		description: 'To get shipping country',
	  },
	  {
		key: '11',
		shortcodes: '{{shipping.full_address}}',
		description: 'To get shipping Complete Address',
	  },
	];
	const site_details=[
        {
			key: '1',
			shortcodes: '{{site.url}}',
			description: 'To get site URL',
		},
		{
			key: '2',
			shortcodes: '{{site.name}}',
			description: 'To get site name',
		},
		{
			key: '3',
			shortcodes: '{{admin.email}}',
			description: 'To get admin email',
		},
		{
			key: '4',
			shortcodes: '{{home.url}}',
			description: 'To get home url' ,
			
		}
	];
	const shop_details = [
		{
		  key: '1',
		  shortcodes: '{{shop.email}}',
		  description: 'To get shop E-Mail',
		},
		{
		  key: '2',
		  shortcodes: '{{shop.url}}',
		  description: 'To get shop URL',
		},
		{
		  key: '3',
		  shortcodes: '{{shop.address1}}	',
		  description: 'To get shop address 1',
		},
		{
		  key: '4',
		  shortcodes: '{{shop.address2}}',
		  description: 'To get shop address 2',
		},
		{
		  key: '5',
		  shortcodes: '{{shop.city}}	',
		  description: 'To get shop city',
		},
		{
		  key: '6',
		  shortcodes: '{{shop.zip}}',
		  description: 'To get shop zip code',
		},
		{
		  key: '7',
		  shortcodes: '{{shop.state}}',
		  description: 'To get shop zip code',
		},
		{
		  key: '8',
		  shortcodes: '{{shop.country}}',
		  description: 'To get shop zip code',
		},
		{
			key: '9',
			shortcodes: '{{checkout.url}}',
			description: 'To get Checkout url',
		},
		
	];
	const customer_details = [
		{
		  key: '1',
		  shortcodes: '{{customer.name}}',
		  description: 'To get customer name',
		},
		{
		  key: '2',
		  shortcodes: '{{customer.email}}',
		  description: 'To get customer E-Mail',
		},
		{
		  key: '3',
		  shortcodes: '{{customer.note}}',
		  description: 'To get customer Note',
		},
		
	];
	const user = [
		{
			key: '1',
			shortcodes: '{{user.name}}',
			description: 'To get user name',
		},
		{
		key: '2',
		shortcodes: '{{first.name}}',
		description: 'To get user first name',
		},
		{
		key: '3',
		shortcodes: '{{last.name}}',
		description: 'To get user last name',
		},
		{
		key: '4',
		shortcodes: '{{user.email}}',
		description: 'To get user email',
		},
		{
		  key: '5',
		  shortcodes: '{{myaccount.url}}',
		  description: 'To get account url',
		},
		{
		  key: '6',
		  shortcodes: '{{user.login}}',
		  description: 'To get login name',
		},
		{
		  key: '7',
		  shortcodes: '{{user.password}}',
		  description: 'To get password',
		},
  
		{
		  key: '8',
		  shortcodes: '{{user.reset_pass_url}}',
		  description: 'To get reset password url',
		},
	];
	const payment_details = [
		{
		  key: '1',
		  shortcodes: '{{payment.method}}',
		  description: 'To get order payment method',
		},
		{
		  key: '2',
		  shortcodes: '{{payment.url}}',
		  description: 'To get payment URL',
		},
	];
	const order_details = [
		{
		  key: '1',
		  shortcodes: '{{order.id}}',
		  description: 'To get order id',
		},
		{
		  key: '2',
		  shortcodes: '{{order.number}}',
		  description: 'To get order number',
		},
		{
		  key: '3',
		  shortcodes: '{{item.count}}',
		  description: 'To get total item count',
		},
		{
		  key: '4',
		  shortcodes: '{{order.note}}',
		  description: 'To get note',
		},
		{
		  key: '5',
		  shortcodes: '{{subtotal.price}}',
		  description: 'To get order sub-total',
		},
		{
		  key: '6',
		  shortcodes: '{{total_price}}',
		  description: 'To get order total',
		},
		{
		  key: '7',
		  shortcodes: '{{order.date}}',
		  description: 'To get order date',
		},
		{
		  key: '8',
		  shortcodes: '{{order.fully.refund}}',
		  description: 'To get order Fully refund',
		},
		{
		  key: '9',
		  shortcodes: '{{order.partial.refund}}',
		  description: 'To get order Partial refund',
		},
		{
		  key: '10',
		  shortcodes: '{{order.received.url}}',
		  description: 'To get order url',
		},
		{
		  key: '11',
		  shortcodes: '{{order.cart}}',
		  description: 'To get order cart details',
		},
		{
		  key: '12',
		  shortcodes: '{{order.discount}}',
		  description: 'To get order Discount',
		},
		{
		  key: '13',
		  shortcodes: '{{order.shipping}}',
		  description: 'To get order shipping price',
		},
		{
		  key: '14',
		  shortcodes: '{{order.tax}}',
		  description: 'To get order tax',
		},
		{
			key: '15',
			shortcodes: '{{order.shipping_method}}',
			description: 'To get order shipping',
		  },
	];
	const data = [
		{
			key: '1',
			shortcodes: '{{billing.first_name}}',
			description: 'To get billing first name',
		},
		{
			key: '2',
			shortcodes: '{{billing.last_name}}',
			description: 'To get billing last name',
		},
		{
			key: '3',
			shortcodes: '{{billing.full_name}}',
			description: 'To get billing name',
		},
		{
			key: '4',
			shortcodes: '{{billing.company}}',
			description: 'To get billing company',
		},
		{
			key: '5',
			shortcodes: '{{billing.phone}}',
			description: 'To get billing phone',
		},
		{
			key: '6',
			shortcodes: '{{billing.address1}}',
			description: 'To get billing address 1',
		},
		{
			key: '7',
			shortcodes: '{{billing.address2}}',
			description: 'To get billing address 2',
		},
		{
			key: '8',
			shortcodes: '{{billing.city}}',
			description: 'To get billing city',
		},
		{
			key: '9',
			shortcodes: '{{billing.state}}',
			description: 'To get billing state',
		},
		{
			key: '10',
			shortcodes: '{{billing.zip}}',
			description: 'To get billing zip code',
		},
		{
			key: '11',
			shortcodes: '{{billing.country}}',
			description: 'To get billing country',
		},
		{
			key: '12',
			shortcodes: '{{billing.email}}',
			description: 'To get billing Email',
		},
		{
			key: '13',
			shortcodes: '{{billing.full_address}',
			description: 'To get billing Complete Address',
		}

		
	];
    return( 
		<div>
			<Modal title="Short Codes"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				alignCenter
				footer={null}
				style={{ width:650}}
			  >	 
			  	<div style={{height:500, overflowY: 'auto',
                overflowX: 'hidden',}}>
					<Grid.Row>
						<Grid.Col>
							<b>Billing Address <Help title='Billing Shortcode use only Order Email' /></b>
							<Table
								columns={columns}
								data={data}
								pagination={false}
								hover={true}
								border={{ wrapper: true, cell: true }}
							/>
							
							<b>Shipping Address <Help title='Shipping Shortcode use only Order Email' /></b>
							<Table
								columns={columns}
								data={shipping_address}
								pagination={false}
								border={{ wrapper: true, cell: true }}
							/>
							<b>Shop Details <Help title='Shop Shortcode use any email' /></b>
							<Table
								columns={columns}
								data={shop_details}
								pagination={false}
								border={{ wrapper: true, cell: true }}
							/>
						</Grid.Col>
						<Grid.Col>
							<b>Order Details <Help title='Order Details Shortcode use only Order email' /></b>
							<Table
								columns={columns}
								data={order_details}
								pagination={false}
								border={{ wrapper: true, cell: true }}
							/>
							<b>Payment Details <Help title='Payment Details Shortcode use only Order email' /></b>
							<Table
								columns={columns}
								data={payment_details}
								pagination={false}
								border={{ wrapper: true, cell: true }}
							/>
							<b>New Account <Help title='New Account Shortcode use only Account email' /></b>
							<Table
								columns={columns}
								data={user}
								pagination={false}
								border={{ wrapper: true, cell: true }}
							/>
							<b>Customer Details <Help title='Customer Details Shortcode use only order email' /></b>
							<Table
								columns={columns}
								data={customer_details}
								pagination={false}
								border={{ wrapper: true, cell: true }}
							/>
							<b>Site Detail <Help title='Site Shortcode use any email' /></b>
							<Table
								columns={columns}
								data={site_details}
								pagination={false}
								border={{ wrapper: true, cell: true }}
							/>
						</Grid.Col>
					</Grid.Row>
				</div>
			</Modal> 
			<Button onClick={showModal}>
				Short Codes
			</Button> 
		</div>
	);
  

}
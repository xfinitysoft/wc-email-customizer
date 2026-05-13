import React from 'react';
import { pushEvent } from '@xfinity/utils/pushEvent';
const basepath = location.pathname;
export function CardItem(props) {
    const { data, tcloseModal } = props;
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
            value: 'wc_customer_note',
            label: 'Customer Note'
        },
        {
            value: 'wc_customer_invoice_unpaid',
            label: 'Customer Invoice Unpaid'
        },
        {
            value: 'wc_customer_invoice_paid',
            label: 'Customer Invoice Paid'
        },
        {
            value: 'wc_partial_refunded_order',
            label: 'Partial Refunded Order'
        },
        {
            value: 'wc_fully_refunded_order',
            label: 'Fully Refunded Order'
        },
        {
            value: 'wc_completed_order',
            label: 'Completed Order'
        },
        {
            value: 'wc_processing_order',
            label: 'Processing Order'
        },
        {
            value: 'wc_order_on_hold',
            label: 'Order On-Hold'
        },
        {
            value: 'wc_failed_order',
            label: 'Failed Order'
        },
        {
            value: 'wc_cancelled_order',
            label: 'Cancelled Order'
        },
        {
            value: 'wc_new_account',
            label: 'New Account'
        }
    ];
    const select_type = types.filter(type => {
        return (type.value == data.etype);
    });
    const EditClick = (() => {
        pushEvent({
            event: 'create',
            payload: { article_id: data.article_id, title: data.title, etype: data.etype },
        });
        window.location.href = `${basepath}?page=xseeb-page&id=${data.article_id}#editor`;
        tcloseModal();
    });
    return (
        <div key={data.article_id} className="cart-detail-section__col">
            <div className="cart-item-block" onClick={EditClick}>
                <div className="cart-item-block__image">
                    <img src={data.picture} alt="image-description" />
                </div>
                <div className="cart-item-block__text-area">
                    <div className="cart-item-block__description">
                        <strong className="cart-item-block__title">{select_type[0].label}</strong>
                        <span className="cart-item-block__text">{data.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

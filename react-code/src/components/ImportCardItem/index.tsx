import React, { useState } from 'react';
import { Checkbox } from '@arco-design/web-react';

export function ImportCardItem(props) {
    const { data, selectedTemplates, setSelectedTemplates } = props;
    const isChecked = selectedTemplates.includes(data.article_id);
    const types = [
        { value: 'wc_new_order', label: 'New Order' },
        { value: 'wc_reset_password', label: 'Reset Password' },
        { value: 'wc_customer_note', label: 'Customer Note' },
        { value: 'wc_customer_invoice_unpaid', label: 'Customer Invoice Unpaid' },
        { value: 'wc_customer_invoice_paid', label: 'Customer Invoice Paid' },
        { value: 'wc_partial_refunded_order', label: 'Partial Refunded Order' },
        { value: 'wc_fully_refunded_order', label: 'Fully Refunded Order' },
        { value: 'wc_completed_order', label: 'Completed Order' },
        { value: 'wc_processing_order', label: 'Processing Order' },
        { value: 'wc_order_on_hold', label: 'Order On-Hold' },
        { value: 'wc_failed_order', label: 'Failed Order' },
        { value: 'wc_cancelled_order', label: 'Cancelled Order' },
        { value: 'wc_new_account', label: 'New Account' }
    ];

    const select_type = types.filter(type => type.value === data.etype);

    const toggleCheckbox = () => {
        const value = data.article_id;
        setSelectedTemplates((prevSelectedTemplates) =>
            isChecked
                ? prevSelectedTemplates.filter((template) => template !== value)
                : [...prevSelectedTemplates, value]
        );
    };

    return (
        <div key={data.article_id} className="cart-detail-section__col">
            <div className="cart-item-block">
                <div
                    className="cart-item-block__import-image"
                    onClick={toggleCheckbox} // Toggle checkbox on image click
                    style={{ cursor: 'pointer' }} // Change cursor to pointer
                >
                    <img src={data.picture} alt="image-description" />
                </div>
                <div className="cart-item-block__text-area">
                    <div className="cart-item-block__description">
                        <strong className="cart-item-block__title">
                            {select_type[0]?.label}
                        </strong>
                        <span className="cart-item-block__text">{data.title}</span>
                    </div>
                    <div className="cart-item-block__cart-btn-wrap">
                        <Checkbox
                            checked={isChecked}
                            onChange={(e) => toggleCheckbox()}
                            className="xseeb-import-checkbox"
                            style={{ borderColor: '#3368cb' }}
                        >
                        </Checkbox>
                    </div>
                </div>
            </div>
        </div>
    );
}

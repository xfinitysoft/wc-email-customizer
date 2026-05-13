import React, { useMemo, useState,useEffect } from 'react';
import { CardItem } from '@xfinity/components/CardItem';
import {templates} from '@xfinity/config/templates';
import {Select} from '@arco-design/web-react';
export function CreateTemplate(){
    const [temData,setTemData] = useState(templates);
    const [visible, setVisible] = useState(false);
    const Option = Select.Option;
    const options = [
        {
            value: 'all',
            label: 'All'
        },
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
    const topenModal = () => {
        setVisible(true);
    };
    const tcloseModal = () => {
        setVisible(false);
    };
    const tmodal = useMemo(() => {
        const showHideClassName = visible ? "create-template-modal create-modal-active" : "create-template-modal";
        var cart = temData.map((item, i)=>{
            return(
                <CardItem data={item} key={item.article_id} tcloseModal={tcloseModal}/>
            )
        });
        return (
            <div className={showHideClassName}>
			    <span className="create-modal-overlay"></span>
                <div className="create-template-modal__wrap">
                    <div className="create-template-modal__holder">
                        <span className="modal-close create-template-close" onClick={() => tcloseModal()}><i className="icon-close"></i></span>
                        <div className="create-template-modal__heading-area">
                            <div className="create-template-modal__heading">
                                <strong className="create-template-modal__title">
                                    Choose Template
                                    <span className="no"> ( {temData.length} )</span>
                                </strong>
                                <div className="template-select-area">
                                    <Select
                                        placeholder='Select Email Type'
                                        className="template-select-dropdown__list"
                                        onChange={(value)=> {
                                            const  newColumns = templates.filter(item => {
                                                return (value == item.etype || value == 'all');
                                            });
                                            setTemData(newColumns);
                                        }}
                                        defaultValue={'all'}
                                    >
                                        {options.map((option) => (
                                            <Option className="template-select-dropdown__item" key={option.value} value={option.value}>
                                                {option.label}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="template-tabs-content">
                            <div className="tabs-slide all-tab-content">
                                <div className="template-tabs-content__wrap">
                                    <div className="template-tabs-content__holder">
                                        <div className="cart-detail-section__row">
                                            {cart.length ? cart : <p className="xs-no-template">No Template found</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },[visible,temData]);
    return {
        tmodal,
        topenModal,
        tcloseModal
    };
}
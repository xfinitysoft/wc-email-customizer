import React, { useCallback, useEffect } from 'react';
import '@xfinity/styles/main.scss';
import { useHistory } from 'react-router-dom';
import { Message, Checkbox } from '@arco-design/web-react';
import template from '@xfinity/store/template';
import { useDispatch } from 'react-redux';
import store from '@xfinity/store';
import templateList from '@xfinity/store/templateList';
import { getLoadingByKey, useLoading } from '@xfinity/hooks/useLoading';
import { Popup } from '@xfinity/components/Popup';
import { pushEvent } from '@xfinity/utils/pushEvent';
import { CheckboxPopup } from '@xfinity/components/CheckboxPopup';
import loading from '@xfinity/store/common/loading';
import { IArticle } from '@xfinity/services/article';

interface CardItemProps {
    data: IArticle;
    onRender?: () => void;
    onDeleteCallback?: () => void;
}

export function CardItem({ data, onRender, onDeleteCallback }: CardItemProps) {
    const dispatch = useDispatch();
    const isDeleting = useLoading(getLoadingByKey(template.loadings.removeById, data.article_id));
    const isDuplicating = useLoading(getLoadingByKey(template.loadings.duplicate, data.article_id));
    const isDisabling = useLoading(getLoadingByKey(template.loadings.disableById, data.article_id));
    const isEanbling = useLoading(getLoadingByKey(template.loadings.enableById, data.article_id));
    const history = useHistory();
    const classstatus = data.status == 'on' ? 'cart-item-block' : 'cart-item-block disabled';
    const basepath = location.pathname;
    const type = {
        wc_new_order: 'New Order',
        wc_reset_password: 'Reset Password',
        wc_customer_note: 'Customer Note',
        wc_customer_invoice_unpaid: 'Customer Invoice Unpaid',
        wc_customer_invoice_paid: 'Customer Invoice Paid',
        wc_partial_refunded_order: 'Partial Refunded Order',
        wc_fully_refunded_order: 'Fully Refunded Order',
        wc_completed_order: 'Completed Order',
        wc_processing_order: 'Processing Order',
        wc_order_on_hold: 'Order On-Hold',
        wc_failed_order: 'Failed Order',
        wc_cancelled_order: 'Cancelled Order',
        wc_new_account: 'New Account',
    }
    useEffect(() => {
        if (onRender) {
            onRender(); // Notify the parent that this item has rendered
        }
    }, []);
    const EditClick = (() => {
        pushEvent({
            event: 'Edit',
            payload: { article_id: data.article_id, title: data.title },
        });
        window.location.href = `${basepath}?page=xseeb-page&id=${data.article_id}#editor`;
    });
    const onDelete = useCallback((close) => {
        dispatch(
            template.actions.removeById({
                id: data.article_id,
                _actionKey: data.article_id,
                success() {
                    dispatch(templateList.actions.fetchwithnow({
                        id: data.article_id,
                        _actionKey: data.article_id,
                        success() {
                            const loadingtype = 'template/removeById/' + data.article_id;
                            store.dispatch(loading.actions.endLoading(loadingtype));
                            Message.success('Successfully removed.');
                            if (onDeleteCallback) {
                                onDeleteCallback(); // Notify the parent to decrease the count
                            }
                            close();
                        },
                    }));
                },
            })
        );
    }, [data, dispatch]);
    const onEnable = useCallback((callback) => {
        dispatch(
            template.actions.enableById({
                id: data.article_id,
                _actionKey: data.article_id,
                success() {
                    dispatch(templateList.actions.fetchwithnow({
                        id: data.article_id,
                        _actionKey: data.article_id,
                        success() {
                            const loadingtype = 'template/enableById/' + data.article_id;
                            store.dispatch(loading.actions.endLoading(loadingtype));
                            Message.success('Successfully enabled.');
                            callback();
                        },
                    }));
                },
            })
        );
    }, [data, dispatch]);
    const onDisable = useCallback((callback) => {
        dispatch(
            template.actions.disableById({
                id: data.article_id,
                _actionKey: data.article_id,
                success() {
                    dispatch(templateList.actions.fetchwithnow({
                        id: data.article_id,
                        _actionKey: data.article_id,
                        success() {
                            const loadingtype = 'template/disableById/' + data.article_id;
                            store.dispatch(loading.actions.endLoading(loadingtype));
                            Message.success('Successfully disabled.');
                            callback();
                        },
                    }));
                },
            })
        );
    }, [data, dispatch]);
    const onDuplicate = useCallback(
        (close) => {
            dispatch(
                template.actions.duplicate({
                    article: data,
                    html: data.html,
                    _actionKey: data.article_id,
                    success() {
                        dispatch(templateList.actions.fetchwithnow({
                            id: data.article_id,
                            _actionKey: data.article_id,
                            success() {
                                const loadingtype = 'template/duplicate/' + data.article_id;
                                store.dispatch(loading.actions.endLoading(loadingtype));
                                Message.success('Successfully duplicated.');
                                close();
                            },
                        }));

                    },
                })
            );
        }, [data, dispatch, history]);

    return (
        <div
            key={data.article_id}
            className="cart-detail-section__col">
            <div className={classstatus}>
                <div className="cart-item-block__image ">
                    <img src={data.picture} alt="image-description" />
                    <div className="cart-option-area">
                        <ul className="cart-option">
                            <li className="cart-option__item">
                                <Popup
                                    title='Duplicate Template'
                                    confirmtext="Are you sure that you want to Duplicate this template?"
                                    className="cart-option__link"
                                    onConfirm={onDuplicate}
                                    loading={isDuplicating}
                                    oktext='Duplicate'
                                    canceltext='Cancel'
                                >
                                    <i className="icon-copy"></i>
                                </Popup>
                            </li>
                            <li className="cart-option__item">
                                <Popup
                                    title='Delete Template'
                                    confirmtext="Are you sure that you want to delete this template?"
                                    className="cart-option__link"
                                    onConfirm={onDelete}
                                    loading={isDeleting}
                                    oktext='Delete'
                                    canceltext='Cancel'
                                >
                                    <i className="icon-delete"></i>
                                </Popup>
                            </li>
                            <li className="cart-option__item" onClick={EditClick}>
                                <span className="cart-option__link"><i className="icon-edit"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cart-item-block__text-area">
                    <div className="cart-item-block__description">
                        <strong className="cart-item-block__title">{type[data.etype]}</strong>
                        <span className="cart-item-block__text">{data.title}</span>
                    </div>
                    <div className="cart-item-block__cart-btn-wrap">
                        <label className="cart-item-block__cart-btn">

                            <input type='checkbox' checked={data.status == 'on' ? true : false} onChange={() => { }} />
                            <CheckboxPopup
                                title='Enable/Disable Template'
                                confirmtext="Are you sure that you want to perform one of the following action?"
                                className="cart-checkbox"
                                onEnable={onEnable}
                                onDisable={onDisable}
                                enabling={isEanbling}
                                disabling={isDisabling}
                                oktext='Enable'
                                canceltext='Disable'
                            ></CheckboxPopup>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

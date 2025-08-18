import React,{useState}from 'react';
import {Button} from '@arco-design/web-react';
export function Popup(props){
    const [visible, setVisible] = useState(false);
    const [event,setEvent] = useState(false);
    const {children,className,title,canceltext,oktext,confirmtext,onConfirm,loading} = props;
    const popupopen = (e) => {
        e.currentTarget.parentElement.closest('.cart-option__item').classList.add("item-confirm-modal-active");
        e.currentTarget.parentElement.closest('.cart-item-block__image').classList.add("hover-item");
        setVisible(true);
        setEvent(e.currentTarget);
    };
    const popupclose = () => {
        event.parentElement.closest('.cart-option__item').classList.remove("item-confirm-modal-active");
        event.parentElement.closest('.cart-item-block__image').classList.remove("hover-item");
        setVisible(false);
    };
    return(
        <>
        <span className={className} onClick={(e)=>popupopen(e)}>{children}</span>
        <div className='item-confirmation-modal'>
            <span className="item-confirm-modal-overlay"></span>
            <div className="item-confirmation-modal__wrap">
                <div className="item-confirmation-modal__holder">
                    <span className="modal-close item-confirm-modal-close" onClick={() => popupclose()}><i className="icon-close"></i></span>
                    <div className="item-confirmation-modal__content">
                        <strong className="item-confirmation-modal__title">{title}</strong>
                        <p>{confirmtext}</p>
                        <ul className="modal-btns-list">
                            <li>
                                <span className="modal-btn cancel-btn" onClick={() => popupclose()}>{canceltext}</span>
                            </li>
                            <li>
                                <Button
                                className="modal-btn confirmation-btn"
                                loading={loading} 
                                onClick={()=>onConfirm(popupclose)}>
                                    {oktext}
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
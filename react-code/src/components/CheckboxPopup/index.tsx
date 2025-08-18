import React,{useState}from 'react';
import {Button} from '@arco-design/web-react';
export function CheckboxPopup(props){
    const [visible, setVisible] = useState(false);
    const {className,title,canceltext,oktext,confirmtext,onEnable,onDisable,enabling,disabling} = props;
    const popupopen = () => {
        setVisible(true);
    };
    const popupclose = () => {
        setVisible(false);
    };
    
    const showHideClassName = visible ? "confirmation-modal confirm-modal-active" : "confirmation-modal";
    return(
        <>
        <span className={className} onClick={()=>popupopen()}></span>
        <div className={showHideClassName}>
            <span className="confirm-modal-overlay"></span>
            <div className="confirmation-modal__wrap">
                <div className="confirmation-modal__holder">
                    <span className="modal-close confirm-modal-close" onClick={() => popupclose()}><i className="icon-close"></i></span>
                    <div className="confirmation-modal__content">
                        <strong className="confirmation-modal__title">{title}</strong>
                        <p>{confirmtext}</p>
                        <ul className="modal-btns-list">
                            <li>
                                <Button
                                    className="modal-btn cancel-btn"
                                    loading={disabling} 
                                    onClick={()=> onDisable(popupclose)}>
                                        {canceltext}
                                </Button>
                            </li>
                            <li>
                                <Button
                                    className="modal-btn confirmation-btn"
                                    loading={enabling} 
                                    onClick={()=> onEnable(popupclose)}>
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
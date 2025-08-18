import React,{useState}from 'react';
export default function VideoPopup(){
    const [visible, setVisible] = useState(false);
    const popupopen = () => {
        setVisible(true);
    };
    const popupclose = () => {
        setVisible(false);
    };
    const showHideClassName = visible ? "video-template-modal video-modal-active" : "video-template-modal";
    return(
        <div>
        <span className="banner-area__btn-wrap" >
            <button  className="banner-area__demo-btn demo-button" onClick={()=>popupopen()}>
            <span className="icon">
                <i className="icon-play-btn"></i>
            </span>
            <span className="text">View Demo</span>
            </button>
        </span>
        <div className={showHideClassName }>
			<span className="video-modal-overlay"></span>
			<div className="video-template-modal__wrap">
				<div className="video-template-modal__holder">
					<span className="video-modal-close" onClick={() => popupclose()}><i className="icon-close"></i></span>
					<div className="video-template-modal__area">
						<div className="video-template-modal__content">
							<div className="template-video">
                                <iframe width="100%" height="400px"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                </iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    );
}
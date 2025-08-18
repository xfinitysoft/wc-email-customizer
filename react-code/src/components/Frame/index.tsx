import React from 'react';
import Editor from '../../images/template-edit.svg';
interface FrameProps {
    title: string;
    breadcrumb?: React.ReactElement;
    primaryAction?: React.ReactElement;
    children: React.ReactElement;
}

export default function Frame({
    children,
    title,
    primaryAction,
    breadcrumb,
}: FrameProps) {
    const url = window.location.href;
    return (
        <div id="wrapper">
            <section className="banner-area">
                <div className="container">
                    <div className="banner-area__holder">
                        <div className="banner-area__caption">
                            <h1>Create <strong>Easy and Fast Template</strong></h1>
                            <div className="banner-area__caption__text">
                                Ch <label className="template-radio"><input type="checkbox" checked onChange={() => { }} /><span className="checkbox-template"></span></label> se your favorite template
                            </div>
                        </div>
                        {/* <VideoPopup></VideoPopup> */}
                    </div>
                    <span className="banner-area__image">
                        <img src={Editor} alt="Edit template" />
                    </span>
                </div>
            </section>
            <div className="heading-block">
                <div className="container">
                    <div className="heading-block__wrap">
                        <div className="heading-block__info">
                            {/* <span className="heading-block__btn-wrap">
                <a href="#" className="upgrade-btn">
                  <span className="icon">
                    <i className="icon-upgrade"></i>
                  </span>
                  <span className="text">Upgrade Now!</span>
                </a>
              </span>
              <span className="heading-block__link-wrap">
                <a href="#" className="heading-block__link">Support</a>
              </span> */}
                        </div>
                        <div className="template-info-area">
                            {primaryAction}
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

import React, { useMemo, useState } from 'react';
import { ImportCardItem } from '@xfinity/components/ImportCardItem';
import { templates } from '@xfinity/config/templates';
import { getTemplate } from '@xfinity/config/getTemplate';
import { Modal, Button, Spin, Message } from '@arco-design/web-react';
import { useDispatch } from 'react-redux';
import { JsonToMjml } from 'easy-email-core';
import template from '@xfinity/store/template';
import '@xfinity/pages/Editor/components/CustomBlocks';
import { mergeTags } from './MergeTags';
import mjml from 'mjml-browser';
import { IEmailTemplate, EmailEditorProviderProps } from 'easy-email-editor';
export function ImportTemplates(close, setClose, dotLoading, setDOTLoading, importData, setImportData, setImportTemplate) {
    const dispatch = useDispatch();
    const [temData, setTemData] = useState(templates);
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(false);
    const [importVisible, setImportVisible] = useState(false);
    const [selectedTemplates, setSelectedTemplates] = useState([]);
    const importopenModal = () => {
        setVisible(true);
    };
    const importcloseModal = () => {
        setVisible(false);
    };
    const handleImportSelected = async () => {
        if (!selectedTemplates || selectedTemplates.length === 0) {
            Message.error('No template select');
            setVisible(false);

        } else {
            setVisible(false);
            setImportVisible(true);
            setDOTLoading(true);
            setClose(false);
            setImportData('');
            selectedTemplates.map((id) => {
                handleTemplate(id);
            });
        }
    };
    const handleTemplate = async (id) => {
        const templatedata = await getTemplate(id);
        const templatevalue: IEmailTemplate = {
            subject: templatedata.title,
            subTitle: templatedata.summary,
            etype: templatedata.etype,
            content: templatedata.content.content
        }
        const html = mjml(JsonToMjml({
            data: templatevalue.content,
            mode: 'production',
            context: templatevalue.content,
            dataSource: mergeTags,
        }), {
            validationLevel: 'soft',
        }).html;
        dispatch(
            template.actions.create({
                template: templatevalue,
                html: html,
                success(id, newTemplate) {
                    setImportTemplate((prevSelectedTemplates) =>
                        id
                            ? [...prevSelectedTemplates, id]
                            : prevSelectedTemplates.filter((template) => template !== id)
                    );
                    setCounter((prevCounter) => {
                        let newCounter = prevCounter + 1;
                        if (selectedTemplates.length === newCounter) {
                            setSelectedTemplates([]);
                            setImportTemplate([]);
                            newCounter = 0;
                        }
                        return newCounter;
                    });
                },
            })
        );
    };

    const importmodal = useMemo(() => {
        const showHideClassName = visible ? "create-template-modal create-modal-active" : "create-template-modal";
        var cart = temData.map((item, i) => {
            return (
                <ImportCardItem
                    data={item}
                    key={item.article_id}
                    selectedTemplates={selectedTemplates}
                    setSelectedTemplates={setSelectedTemplates}
                />
            )
        });
        return (
            <div>
                <div className={showHideClassName}>
                    <span className="create-modal-overlay"></span>
                    <div className="create-template-modal__wrap">
                        <div className="create-template-modal__holder">
                            <span className="modal-close create-template-close" onClick={() => importcloseModal()}><i className="icon-close"></i></span>
                            <div className="create-template-modal__heading-area">
                                <div className="create-template-modal__heading">
                                    <strong className="create-template-modal__title">
                                        Choose to import templates
                                        <span className="no"> ( {temData.length} )</span>
                                    </strong>
                                    <div>
                                        <Button className="template-info-area__create-btn create-template-button"
                                            onClick={() => handleImportSelected()}
                                        >
                                            Import
                                        </Button>
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
                <Modal title="Importing Templates..."
                    visible={importVisible}
                    onOk={() => setImportVisible(false)}
                    closable={close}
                    onCancel={() => setImportVisible(false)}
                    afterClose={() => setImportData('')}
                    maskClosable={false}
                    alignCenter
                    footer={null}
                    style={{ width: 750 }}
                >
                    <Spin dot loading={dotLoading} style={{ width: '100%', textAlign: 'center' }}>
                        <div dangerouslySetInnerHTML={{ __html: importData }} />
                    </Spin>
                </Modal>
            </div>
        );
    }, [visible, temData, selectedTemplates, importData, dotLoading, importVisible, close]);
    return {
        importmodal,
        importopenModal,
        importcloseModal
    };
}
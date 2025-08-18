import { useAppSelector } from '@xfinity/hooks/useAppSelector';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Frame from '@xfinity/components/Frame';
import templateList from '@xfinity/store/templateList';
import { IconDownload } from '@arco-design/web-react/icon';
import { Button } from '@arco-design/web-react';
import { CardItem } from './components/CardItem';
import { Loading } from '@xfinity/components/loading';
import { useLoading } from '@xfinity/hooks/useLoading';
import { CreateTemplate } from '@xfinity/components/CreateTemplate';
import { ImportTemplates } from '@xfinity/components/ImportTemplates';

export default function Home() {
    const dispatch = useDispatch();
    const list = useAppSelector('templateList');
    const [close, setClose] = useState(false);
    const [count, setCount] = useState(0);
    const [importTemplate, setImportTemplate] = useState([]);
    const [dotLoading, setDOTLoading] = useState(false);
    const [importData, setImportData] = useState('');
    const loading = useLoading(templateList.loadings.fetch);
    const { topenModal, tmodal } = CreateTemplate();
    const { importopenModal, importmodal } = ImportTemplates(close, setClose, dotLoading, setDOTLoading, importData, setImportData, setImportTemplate);
    useEffect(() => {
        if (list && list.length > 0 && count === list.length && !close) {
            setClose(true);
            setDOTLoading(false);
            setImportData('<div>Templates Successfully Imported</div>');
        }
    }, [count, list]);
    useEffect(() => {
        dispatch(templateList.actions.fetch(undefined));
    }, [dispatch, importTemplate]);
    if (!list && loading) {
        return (
            <Loading loading={loading}>
                <div style={{ height: '100vh' }} />
            </Loading>
        );
    }
    if (!list) {
        return null;
    }
    if (list.length === 0) {
        return (
            <div>
                <Frame
                    title='Templates'
                    primaryAction={
                        <span className="template-info-area__btn-wrap">
                            <Button className="template-info-area__create-btn create-template-button"
                                onClick={() => topenModal()}
                            >
                                + Create Template
                            </Button>
                            <Button className="template-info-area__create-btn create-template-button"
                                onClick={() => importopenModal()}
                            >
                                <IconDownload />
                            </Button>

                        </span>
                    }
                >

                    <section className="cart-detail-section">
                        <div className="cart-detail-section__holder">
                            <div className="container">
                                <div className="cart-detail-section__wrap">
                                    <div className="cart-detail-section__row">
                                        <p className="xs-no-template">Click the "Create" button to select a template, customize it according to your preferences, and save the changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Frame>
                {tmodal}
                {importmodal}
            </div>
        );
    } else {
        return (
            <div
                onInput={() => setClose(true)}
            >
                <Frame
                    title='Templates'
                    primaryAction={
                        <span className="template-info-area__btn-wrap">
                            <Button className="template-info-area__create-btn create-template-button"
                                onClick={() => topenModal()}
                            >
                                + Create Template
                            </Button>
                            <Button className="template-info-area__create-btn create-template-button"
                                onClick={() => importopenModal()}
                            >
                                <IconDownload />
                            </Button>

                        </span>
                    }
                >

                    <section className="cart-detail-section">
                        <div className="cart-detail-section__holder">
                            <div className="container">
                                <div className="cart-detail-section__wrap">
                                    <div className="cart-detail-section__row">
                                        {[...list].map((item) => (
                                            <CardItem data={item} key={item.article_id} onRender={() => setCount(prevCount => prevCount + 1)} onDeleteCallback={() => setCount((prevCount) => prevCount - 1)} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Frame>
                {tmodal}
                {importmodal}
            </div>
        );
    }
}


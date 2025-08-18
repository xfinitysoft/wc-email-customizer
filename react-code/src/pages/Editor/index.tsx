/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import template from '@xfinity/store/template';
import { useAppSelector } from '@xfinity/hooks/useAppSelector';
import { useLoading } from '@xfinity/hooks/useLoading';
import { PageHeader, Button, Message } from '@arco-design/web-react';
import { useQuery } from '@xfinity/hooks/useQuery';
import { useHistory } from "react-router-dom";
import { cloneDeep, set, isEqual } from 'lodash';
import { Loading } from '@xfinity/components/loading';
import ShortCodes from '@xfinity/components/ShortCodes';
import Preview from '@xfinity/components/Preview';
import services from '@xfinity/services';
import {
    EmailEditor,
    EmailEditorProvider,
    EmailEditorProviderProps,
    IEmailTemplate,
    Stack,
} from 'easy-email-editor';
import { pushEvent } from '@xfinity/utils/pushEvent';
import { FormApi } from 'final-form';
import mustache from 'mustache';
import { AdvancedType, BasicType, IBlockData, JsonToMjml, BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager, BlockMarketManager, SimpleLayout } from 'easy-email-extensions';
//import { SimpleLayout } from '@xfinity/SimpleLayout';
import PageOverWrite from '@xfinity/components/PageOverWrite';
import '@arco-themes/react-easy-email-theme/css/arco.css';
import './components/CustomBlocks';
import { useEmailModal } from '@xfinity/components/useEmailModal';
import { mergeTags } from './MergeTags';
import { AutoSaveAndRestoreEmail } from '@xfinity/components/AutoSaveAndRestoreEmail';
import mjml from 'mjml-browser';
import { getTemplate } from '@xfinity/config/getTemplate';
import { CreateTemplate } from '@xfinity/components/CreateTemplate';
import { useCollection } from './components/useCollection';
const imageCompression = import('browser-image-compression');
const fontList = [
    'Arial',
    'Tahoma',
    'Verdana',
    'Times New Roman',
    'Courier New',
    'Georgia',
    'Lato',
    'Montserrat',
    '黑体',
    '仿宋',
    '楷体',
    '标楷体',
    '华文仿宋',
    '华文楷体',
    '宋体',
    '微软雅黑',
].map(item => ({ value: item, label: item }));

export default function Editor() {
    BlockAttributeConfigurationManager.add({
        [BasicType.PAGE]: PageOverWrite,
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const templateData = useAppSelector('template');
    const { openModal, modal } = useEmailModal();
    const { id } = useQuery();
    const { topenModal, tmodal, tcloseModal } = CreateTemplate();
    const basepath = window.location.pathname;
    const loading = useLoading(template.loadings.fetchById);
    const { addCollection, removeCollection, collectionCategory } = useCollection();
    const isSubmitting = useLoading([
        template.loadings.create,
        template.loadings.updateById,
    ]);
    useEffect(() => {
        if (collectionCategory) {
            BlockMarketManager.addCategories([collectionCategory]);
            return () => {
                BlockMarketManager.removeCategories([collectionCategory]);
            };
        }
    }, [collectionCategory]);
    useEffect(() => {
        if (id) {
            dispatch(template.actions.fetchById({ id: +id }));
        } else {
            dispatch(template.actions.fetchDefaultTemplate(undefined));
        }
    }, [dispatch, id]);
    const onUploadImage = async (blob: Blob) => {
        const compressionFile = await (
            await imageCompression
        ).default(blob as File, {
            maxWidthOrHeight: 1440,
        });
        return services.common.uploadByQiniu(compressionFile);
    };
    const initialValues: IEmailTemplate | null = useMemo(() => {
        if (!templateData) return null;
        const sourceData = cloneDeep(templateData.content) as IBlockData;
        return {
            ...templateData,
            content: sourceData, // because redux object is not extensible
        };

    }, [templateData]);

    const onSubmit = useCallback(
        async (
            values: IEmailTemplate,
            form: FormApi<IEmailTemplate, Partial<IEmailTemplate>>
        ) => {
            pushEvent({ event: 'EmailSave' });
            let data = await getTemplate(id);
            const html = mjml(JsonToMjml({
                data: values.content,
                mode: 'production',
                context: values.content,
                dataSource: mergeTags,
            }), {
                validationLevel: 'soft',
            }).html;
            if (id && !data) {
                const isChanged = !(
                    isEqual(initialValues?.content, values.content) &&
                    isEqual(initialValues?.subTitle, values?.subTitle) &&
                    isEqual(initialValues?.subject, values?.subject) &&
                    isEqual(initialValues?.etype, values?.etype)
                );
                if (!isChanged) {
                    form.restart(values);
                    Message.success('Successfully updated.');
                    return null;
                }
                dispatch(
                    template.actions.updateById({
                        id: +id,
                        template: values,
                        html: html,
                        success(id) {
                            Message.success('Successfully updated.');
                            form.restart(values);
                        },
                    }),
                );
            } else {
                dispatch(
                    template.actions.create({
                        template: values,
                        html: html,
                        success(id, newTemplate) {
                            form.restart(newTemplate);
                            history.replace(`${basepath}?page=xseeb-page&id=${id}#editor`);
                            Message.success('Successfully Saved');
                        },
                    })
                );
            }
        },
        [dispatch, history, id, initialValues]
    );
    const onBeforePreview: EmailEditorProviderProps['onBeforePreview'] =
        useCallback((html: string, mergeTags) => {
            return mustache.render(html, mergeTags);
        }, []);
    if (!templateData && loading) {
        return (
            <Loading loading={loading}>
                <div style={{ height: '100vh' }} />
            </Loading>
        );
    }
    if (!initialValues) return null;
    return (
        <div>
            <EmailEditorProvider
                key={id}
                dashed={false}
                data={initialValues}
                height={'calc(100vh - 72px)'}
                onUploadImage={onUploadImage}
                fontList={fontList}
                onAddCollection={addCollection}
                onRemoveCollection={({ id }) => removeCollection(id)}
                onSubmit={onSubmit}
                autoComplete
                mergeTags={mergeTags}
                mergeTagGenerate={(tag) => `{{${tag}}}`}
                onBeforePreview={onBeforePreview}
            >
                {({ values }, { submit }) => {
                    return (
                        <>
                            <PageHeader
                                backIcon
                                title='Back'
                                onBack={() => {
                                    window.location.href = `${basepath}?page=xseeb-page`;
                                }}
                                extra={
                                    <Stack alignment="center">
                                        <Button onClick={() => topenModal()}>
                                            Switch Template
                                        </Button>
                                        <ShortCodes />
                                        <Preview values={values} />
                                        <Button onClick={() => openModal(values, mergeTags)}>
                                            Send test email
                                        </Button>
                                        <Button
                                            type='primary'
                                            loading={isSubmitting}
                                            onClick={() => submit()}>
                                            Save
                                        </Button>
                                    </Stack>
                                }
                            />
                            <SimpleLayout>
                                <EmailEditor />
                            </SimpleLayout>
                            <AutoSaveAndRestoreEmail />
                        </>
                    );
                }}
            </EmailEditorProvider>
            {modal}
            {tmodal}
        </div>
    );
}
function replaceStandardBlockToAdvancedBlock(blockData: IBlockData) {
    const map = {
        [BasicType.TEXT]: AdvancedType.TEXT,
        [BasicType.BUTTON]: AdvancedType.BUTTON,
        [BasicType.IMAGE]: AdvancedType.IMAGE,
        [BasicType.DIVIDER]: AdvancedType.DIVIDER,
        [BasicType.SPACER]: AdvancedType.SPACER,
        [BasicType.SOCIAL]: AdvancedType.SOCIAL,
        [BasicType.ACCORDION]: AdvancedType.ACCORDION,
        [BasicType.CAROUSEL]: AdvancedType.CAROUSEL,
        [BasicType.NAVBAR]: AdvancedType.NAVBAR,
        [BasicType.WRAPPER]: AdvancedType.WRAPPER,
    };

    if (map[blockData.type]) {
        blockData.type = map[blockData.type];
    }
    blockData.children.forEach(replaceStandardBlockToAdvancedBlock);
    return blockData;
}
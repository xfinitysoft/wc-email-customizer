import { JsonToMjml } from 'easy-email-core';
import { IEmailTemplate } from 'easy-email-editor';
import { Message, Modal } from '@arco-design/web-react';
import React, { useMemo, useState, useCallback } from 'react';
import mjml from 'mjml-browser';
import { useDispatch } from 'react-redux';
import email from '@xfinity/store/email';
import * as Yup from 'yup';
import { Form } from 'react-final-form';
import { useLoading } from '@xfinity/hooks/useLoading';
import { pushEvent } from '@xfinity/utils/pushEvent';
import mustache from 'mustache';
import { TextAreaField, TextField } from 'easy-email-extensions';

const schema = Yup.object().shape({
    toEmail: Yup.string().email('Unvalid email').required('Email required'),
});

export function useEmailModal() {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [emailData, setEmailData] = useState<IEmailTemplate | null>(null);
    const [mergeTags, setMergeTags] = useState<any>(null);
    const emailSendLoading = useLoading(email.loadings.send);

    const onSendEmail = useCallback(
        async (values: { toEmail: string; mergeTags: string }) => {
            const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Ensures a proper domain and TLD
            if (!emailRegex.test(values.toEmail.trim())) {
                Message.error('Invalid email address. Please enter a valid email.');
                return;
            }
            if (!emailData) return null;
            let mergeTagsPayload = {};
            try {
                mergeTagsPayload = JSON.parse(values.mergeTags);
            } catch (error) {
                Message.error('invalid JSON');
                return;
            }

            const mjmlContent = JsonToMjml({
                data: emailData.content,
                mode: 'production',
                context: emailData.content,
                dataSource: mergeTagsPayload,
            });

            const html = mjml(mustache.render(mjmlContent, mergeTagsPayload), {
                beautify: true,
                validationLevel: 'soft',
            }).html;
            pushEvent({
                event: 'TestEmailSend',
                payload: { email: values.toEmail, json: emailData.content, html },
            });
            try {
                await dispatch(
                    email.actions.send({
                        data: {
                            toEmail: values.toEmail,
                            subject: emailData.subject,
                            text: emailData.subTitle || emailData.subject,
                            html: html,
                            context: emailData.content,
                        },
                        success: () => {
                            closeModal();
                            Message.success('Email send!');
                        },
                        error: () => {
                            Message.error('invalid Email');
                        }
                    })
                );
            } catch (error) {
                Message.error('Failed to send email. Please try again later.');
            }
        },
        [dispatch, emailData]
    );

    const openModal = (value: IEmailTemplate, mergeTags: any) => {
        setEmailData(value);
        setMergeTags(mergeTags);
        setVisible(true);
    };
    const closeModal = () => {
        setEmailData(null);
        setMergeTags(null);
        setVisible(false);
    };

    const modal = useMemo(() => {
        return (
            <Form
                validationSchema={schema}
                initialValues={{
                    toEmail: '',
                    mergeTags: JSON.stringify(mergeTags, null, 2),
                }}
                onSubmit={onSendEmail}
            >
                {({ handleSubmit }) => (
                    <Modal
                        style={{ zIndex: 9999 }}
                        title='Send test email'
                        okText='Send'
                        cancelText='Cancel'
                        visible={visible}
                        confirmLoading={emailSendLoading}
                        onOk={() => handleSubmit()}
                        onCancel={closeModal}
                    >
                        <TextField autoFocus name='toEmail' label='To email' />
                        <TextAreaField
                            rows={15}
                            autoFocus
                            name='mergeTags'
                            label='Dynamic data'
                        />
                    </Modal>
                )}
            </Form>
        );
    }, [mergeTags, onSendEmail, visible, emailSendLoading]);

    return {
        modal,
        openModal,
    };
}

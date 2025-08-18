import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Modal, Button, Spin } from '@arco-design/web-react';
import { useQuery } from '../hooks/useQuery';
import { JsonToMjml } from 'easy-email-core';
import template from '../store/template';
import mjml from 'mjml-browser';
import { mergeTags } from '../pages/Editor/MergeTags';
import { IEmailTemplate } from 'easy-email-editor';
export default function Preview(props) {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const { id } = useQuery();
    const values: IEmailTemplate = props.values;
    const Jsontohtml = mjml(JsonToMjml({
        data: values.content,
        mode: 'production',
        context: values.content,
        dataSource: mergeTags,
    }), {
        validationLevel: 'soft',
    }).html;
    const showModal = () => {
        setVisible(true);
        setLoading(true);
        let res = new Promise((resolve) => {
            let response = dispatch(
                template.actions.Preview({
                    id: id,
                    template: values,
                    html: Jsontohtml,
                    success(id, newTemplate) {
                    },
                })
            );
            resolve(response);
        });
        res.then((result: any) => {
            setData(result.payload.html);
            setLoading(false);
        });
    };
    return (
        <div>
            <Button onClick={showModal} >
                Preview
            </Button>
            <Modal title="Email Preview"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                afterClose={() => setData('')}
                alignCenter
                footer={null}
                style={{ width: 750 }}
            >
                <Spin dot loading={loading} style={{ width: '100%', textAlign: 'center' }}>
                    <div dangerouslySetInnerHTML={{ __html: data }} />
                </Spin>
            </Modal>
        </div>
    );
}
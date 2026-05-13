import React, { useEffect } from 'react';
import { Message } from '@arco-design/web-react';
import { useAppSelector } from '@xfinity/hooks/useAppSelector';
import toast from '@xfinity/store/common/toast';

export default function Page({ children }: { children: React.ReactNode; }) {
    const errToast = useAppSelector('toast');
    useEffect(() => {
        const current = errToast[0];
        if (current) {
            Message.error(current.message);
        }
    }, [errToast]);
    return <>{children}</>;
}

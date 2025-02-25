'use client';
import React from 'react'
import StoreProvider from './StoreProvider';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeProvider } from './ThemeProvider';
import antdThemeConfig from '@/config/antd';
import AuthModal from '@/app/_auth/AuthModal';

const CombineProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <ConfigProvider theme={antdThemeConfig}>
                    <AntdRegistry>
                        {children}
                        <AuthModal />
                    </AntdRegistry>
                </ConfigProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default CombineProvider;
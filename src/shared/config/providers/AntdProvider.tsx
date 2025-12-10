import { FC, PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider locale={enUS}>{children}</ConfigProvider>
);

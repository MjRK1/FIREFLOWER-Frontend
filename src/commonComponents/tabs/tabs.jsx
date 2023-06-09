import React from "react";
import { Tabs as TabsAntd, ConfigProvider } from 'antd';

export const Tabs = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryActive: '#FF7A2F',
          colorPrimary: '#FF7A2F',
          colorPrimaryHover: '#FF7A2F',
        }
      }}
    >
      <TabsAntd {...props} />
    </ConfigProvider>
  );
};

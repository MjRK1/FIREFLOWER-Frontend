import React from "react";
import { Select as SelectAntd, ConfigProvider } from 'antd';

const Select = (props) => {
  const {
    items = [],
    isOutlined = true,
  } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: isOutlined ? '#FF7A2F' : '#DCDCDC',
          colorPrimaryHover: isOutlined ? '#FF7A2F' : '#DCDCDC',
          fontFamily: "'Noto Sans Medium', sans-serif"
        }
      }}
    >
      <SelectAntd {...props} />
    </ConfigProvider>
  );
};

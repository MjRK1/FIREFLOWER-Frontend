import React from "react";
import {Input as InputAntd, ConfigProvider } from 'antd';

export const InputPassword = (props) => {
  const {
    isOutlined,
    style
  } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: isOutlined ? '#FF7A2F' : '#DCDCDC',
          colorPrimaryHover: isOutlined ? '#FF7A2F' : '#DCDCDC',
          fontFamily: "'Noto Sans Regular', sans-serif",
          controlHeight: 36,
          controlOutline: 'rgba(5, 145, 255, 0)'
        }
      }}
    >
      <InputAntd.Password
        {...props}
        style={{...style, fontSize: 15}}
      />
    </ConfigProvider>
  );
};

import React from "react";
import { Input, ConfigProvider } from 'antd';

const TextareaAntd = Input.TextArea;

export const TextArea = (props) => {
  const {
    autosize = true,
    isOutlined = true,
    style = {width: '100%'}
  } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: isOutlined ? '#FF7A2F' : '#DCDCDC',
          colorPrimaryHover: isOutlined ? '#FF7A2F' : '#DCDCDC',
          fontFamily: "'Noto Sans Medium', sans-serif",
        }
      }}
    >
      <TextareaAntd
        {...props}
        autoSize={autosize}
        style={{...style, padding: 10, fontSize: 15}}
      />
    </ConfigProvider>
  );
};

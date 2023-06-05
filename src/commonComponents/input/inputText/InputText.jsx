import React from 'react';
import { ConfigProvider, Input as InputTextAntd } from 'antd';

export const InputText = (props, ref) => {
  const {
    isOutlined = true,
    style={width: '100%'}
  } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: isOutlined ? '#FF7A2F' : '#DCDCDC',
          colorPrimaryHover: isOutlined ? '#FF7A2F' : '#DCDCDC',
          fontFamily: "'Noto Sans Regular', sans-serif",
          controlHeight: 36
        }
      }}
    >
      <InputTextAntd
        {...props}
        style={{...style, fontSize: 15}}
        ref={ref}
      />
    </ConfigProvider>
  );
};

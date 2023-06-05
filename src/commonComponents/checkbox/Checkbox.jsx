import React from "react";
import { ConfigProvider, Checkbox as CheckboxAntd} from 'antd';

export const CheckboxGroup = CheckboxAntd.Group;

export const Checkbox = ({theme, size = 16, classname, checked, children, ...props}) => {
  return (
    <ConfigProvider
      theme={
        {
          token: {
            colorPrimary: checked ? '#FF7A2F' : '#DCDCDC',
            fontSize: 14,
            fontFamily: 'Noto Sans Medium',
            controlInteractiveSize: size,
            colorBgContainer: '#DCDCDC',
            colorBorder: 'transparent',
            borderRadiusSM: '4px',
          }
        }
      }
    >
      <CheckboxAntd {...props} checked={checked} className={classname}>
        {children}
      </CheckboxAntd>
    </ConfigProvider>
  );
};

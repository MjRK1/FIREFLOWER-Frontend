/* eslint-disable */

import React from "react";
import { DatePicker as DatePickerAntd, ConfigProvider} from 'antd';
import locale from 'antd/locale/ru_RU';


export const DatePicker = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF7A2F',
          colorLink: '#FF7A2F',
          fontFamily: '"Noto Sans Medium", sans-serif'
        }
      }}
    >
      <DatePickerAntd
        format={'DD.MM.YYYY'}
        {...props}
      />
    </ConfigProvider>
  )
}

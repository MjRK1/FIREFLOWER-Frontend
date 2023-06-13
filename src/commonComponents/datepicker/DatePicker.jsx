/* eslint-disable */

import React from "react";
import { DatePicker as DatePickerAntd, ConfigProvider} from 'antd';
import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
require('dayjs/locale/ru');

export const DatePicker = (props) => {
  dayjs().locale('ru');
  return (
    <ConfigProvider
      locale={locale}
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
        locale={locale}
        {...props}
      />
    </ConfigProvider>
  )
}

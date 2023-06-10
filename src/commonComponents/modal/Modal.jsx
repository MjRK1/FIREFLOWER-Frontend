import React from 'react';
import { Modal as ModalAntd } from 'antd';


export const Modal = (props) => {
  const {
    children,
    onCancel,
    onOk,
  } = props;
  return (
    <ModalAntd {...props} onCancel={onCancel} onOk={onOk}>
      {children}
    </ModalAntd>
);
};

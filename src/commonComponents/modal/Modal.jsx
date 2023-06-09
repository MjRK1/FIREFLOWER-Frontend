import React from 'react';
import { Modal as ModalAntd } from 'antd';


export const Modal = (props) => {
  const {
    children,
  } = props;
  return (
    <ModalAntd {...props}>
      {children}
    </ModalAntd>
);
};

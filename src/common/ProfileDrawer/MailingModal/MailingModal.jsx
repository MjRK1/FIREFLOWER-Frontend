import React from "react";
import FIREFLOWER_ICON from "../../../assets/images/fireflower-icon.png";
import { Modal } from "../../../commonComponents/modal";
import { Button } from "../../../commonComponents/button";
import { Fireflower } from "../../../Services/Fireflower/Fireflower";
import { message } from "../../../commonComponents/message/message";

export const MailingModal = (props) => {
  const {
    isMailingOpen,
    onMailingOk,
    setMailingOpen,
    userInfo,
  } = props;

  const handleAcceptMailing = () => {
    Fireflower.setMailing(1, userInfo?.email).then((resp) => {
      message.success('Вы подписались на рассылку');
    });
  };

  const renderMailingFooter = () => {
    return (
      <div className="mailing-modal-footer">
        <Button theme='green' onClick={() => handleAcceptMailing()}>Да</Button>
        <Button theme='red' onClick={() => setMailingOpen(false)}>Нет</Button>
      </div>
    );
  };

  return (
    <Modal
      open={isMailingOpen}
      centered
      footer={renderMailingFooter()}
      onCancel={() => setMailingOpen(false)}
    >
      <div className="mailing-modal-header__naming-container">
        <img
          className='naming-container__icon'
          src={FIREFLOWER_ICON}
          alt='icon'
        />
        <span className="naming-container__name">
          FIREFLOWER
        </span>
      </div>
      <div className="mailing-modal-body">
        Вы согласны подписаться на рассылку
        о новых поступления?
      </div>
    </Modal>
  );
};

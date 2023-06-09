import React, { useState } from "react";
import { Tabs } from '../../commonComponents/tabs';
import { Modal } from "../../commonComponents/modal";
import { Button } from "../../commonComponents/button";
import {InputText} from "../../commonComponents/input/inputText";
import {InputPassword} from "../../commonComponents/input/inputPassword";


export const AuthorizeModal = (props) => {
  const {
    isAuthOpen,
    setAuthOpen
  } = props;
  const [selectedTab, setSelectedTab] = useState('1');

  const handleAuthUser = (type) => {
    //
  };

  const renderAuthFooter = () => {
    return (
      <div className="auth-modal-footer">
        <Button
          theme='black'
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => {}}
        >
          {selectedTab === "1" ? 'Зарегистрироваться' : 'Авторизироваться'}
        </Button>
      </div>
    );
  };
  const renderRegisterBody = () => {
    return (
      <div className="auth-modal-body__register-body">
        <div className="register-body__email-input">
          <div className="email-input__title">
            Введите почту
          </div>
          <InputText style={{width: '60%'}} placeholder='fireflower@email.com' />
        </div>
        <div className="register-body__phone-input">
          <div className="phone-input__title">
            Введите номер телефона
          </div>
          <InputText style={{width: '60%'}} placeholder='+79999999999' />
        </div>
        <div className="register-body__password-input">
          <div className="password-input__title">
            Введите пароль
          </div>
          <InputPassword style={{width: '60%'}} placeholder='Введите пароль' />
        </div>
      </div>
    );
  };

  const renderAuthBody = () => {
    return (
      <div className="auth-modal-body__auth-body">
        <div className="auth-body__email-input">
          <div className="email-input__title">
            Введите почту
          </div>
          <InputText style={{width: '60%'}} placeholder='fireflower@email.com' />
        </div>
        <div className="auth-body__password-input">
          <div className="password-input__title">
            Введите пароль
          </div>
          <InputPassword style={{width: '60%'}} placeholder='Введите пароль' />
        </div>
      </div>
    );
  };
  const items = [
    {
      key: '1',
      label: `Регистрация`,
      children: (renderRegisterBody()),
    },
    {
      key: '2',
      label: `Авторизация`,
      children: (renderAuthBody()),
    },
  ];

  return (
    <Modal
      open={isAuthOpen}
      centered
      bodyStyle={{height: 'auto'}}
      footer={renderAuthFooter()}
      onCancel={() => setAuthOpen(false)}
    >
      <div className="auth-modal-title">
        Войдите или зарегистрируйтесь
      </div>
      <div className="auth-modal-body">
        <Tabs
          defaultKey={1}
          items={items}
          centered
          style={{width: '100%'}}
          onChange={(key) => setSelectedTab(key)}
        />
      </div>
    </Modal>
  );
};

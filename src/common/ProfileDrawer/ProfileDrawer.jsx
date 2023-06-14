import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, MenuOutlined, MessageOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Drawer } from "../../commonComponents/drawer";
import { message } from "../../commonComponents/message/message";
import { MailingModal } from "./MailingModal";
import { AuthorizeModal } from "./AuthorizeModal";

export const ProfileDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMailingOpen, setMailingOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('userMe'));
    setUserInfo(user);
  }, []);
  const navigate = useNavigate();
  const handleMailingOk = () => {
    //axios
    message.success('Вы подписались на рассылку');
    setMailingOpen(false);
  };
  const handleMailingOpen = () => {
    if (!userInfo?.id) message.error('Для рассылки необходимо авторизоваться/зарегистрироваться');
    else setMailingOpen(true);
  };

  const handleOpenAuth = () => {
    if (userInfo?.id) {
      navigate('/profile');
      setOpen(false);
    } else {
      setAuthOpen(true);
    }
  };
  return (
    <div className="profile-drawer-wrapper">
      <div
        className="profile-drawer-wrapper__profile-drawer-button"
        onClick={() => setOpen(true)}
      >
        <span className="profile-drawer-button__profile-icon">
          <UserOutlined className='profile-icon--user' />
        </span>
        <span className="profile-drawer-button__profile-icon">
          <MenuOutlined className='profile-icon--menu' />
        </span>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        width={380}
      >
        <div className="profile-drawer-container">
          <div className="profile-drawer-container__title">
            Аккаунт
          </div>
          <div className="profile-drawer-container__account-actions">
            <div
              className="account-actions__profile-action"
              onClick={() => handleOpenAuth()}
            >
              <div className="profile-action__icon">
                <UserOutlined className='profile-icon--user' />
              </div>
              <div className="profile-action__title">
                Профиль
              </div>
            </div>
            <AuthorizeModal
              isAuthOpen={isAuthOpen}
              setAuthOpen={setAuthOpen}
            />
            <div
              className="account-actions__mailing-action"
              onClick={() => handleMailingOpen()}
            >
              <div className="mailing-action__icon">
                <MessageOutlined className='mailing-action--mailing' />
              </div>
              <div className="mailing-action__title">
                Сообщать о поступлениях
              </div>
            </div>
            <MailingModal
              isMailingOpen={isMailingOpen}
              onMailingOk={handleMailingOk}
              setMailingOpen={setMailingOpen}
              userInfo={userInfo}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

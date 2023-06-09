import React, { useState } from 'react';
import { UserOutlined, MenuOutlined, MessageOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Drawer } from "../../commonComponents/drawer";
import { message } from "../../commonComponents/message/message";
import { MailingModal } from "./MailingModal";
import { AuthorizeModal } from "../AuthorizeModal";

export const ProfileDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMailingOpen, setMailingOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);

  const userInfo = useSelector(state => state?.userInfo);
  // const navigate = useNavigate();
  const handleMailingOk = () => {
    //axios
    setMailingOpen(false);
  };
  const handleMailingOpen = () => {
    if (!userInfo?.id) message.error('Для рассылки необходимо авторизоваться/зарегистрироваться');
    else setMailingOpen(true);
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
              onClick={() => setAuthOpen(true)}
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
                Сообщить о поступлении
              </div>
            </div>
            <MailingModal
              isMailingOpen={isMailingOpen}
              onMailingOk={handleMailingOk}
              setMailingOpen={setMailingOpen}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

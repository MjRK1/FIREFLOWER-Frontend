import React from 'react';
import { useSelector } from 'react-redux';
import {InputText} from "../../commonComponents/input/inputText";
import QR_IMAGE from '../../assets/images/qr_image.png';

export const ProfilePage = () => {
  const userInfo = useSelector(state => state?.userInfo);

  return (
    <div className="profile-page">
      <div className="profile-page__profile-wrapper">
        <div className="profile-wrapper__title">
          Профиль
        </div>
        <div className="profile-wrapper__user-container">
          <div className="profile-wrapper__user-info">
            <div className="user-info__user-email">
              <div className="user-email__title">
                Ваша почта
              </div>
              <div className="user-email__value">
                <InputText isOutlined={false} value={userInfo?.email} />
              </div>
            </div>
            <div className="user-info__user-phone">
              <div className="user-phone__title">
                Ваш телефон
              </div>
              <div className="user-phone__value">
                <InputText isOutlined={false} value={userInfo?.phone} />
              </div>
            </div>
          </div>
          <div className="user-container__qr-image">
            <div className="qr-image__description">
              Скачать приложение FireFlower
            </div>
            <img src={QR_IMAGE} alt="qr" />
          </div>
        </div>
      </div>
    </div>
  );
};

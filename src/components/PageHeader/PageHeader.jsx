import React from 'react';
import { useNavigate } from 'react-router-dom';
import FIREFLOWER_ICON from '../../assets/images/fireflower-icon.png';


export const PageHeader = () => {
  const navigate = useNavigate();
  return (
    <header className='page-header'>
      <div
        className="page-header__naming-container"
        onClick={() => navigate('/fireflower')}
      >
        <img
          className='naming-container__icon'
          src={FIREFLOWER_ICON}
          alt='icon'
        />
        <span className="naming-container__name">
          FIREFLOWER
        </span>
      </div>
      <div className="page-header__slogan">
        <span style={{marginRight: 5, textTransform: 'uppercase', fontSize: 20}}>Ваши эмоции разгораются с</span>
        <span className='naming-container__name'>FIREFLOWER</span>
      </div>
    </header>
  );
};

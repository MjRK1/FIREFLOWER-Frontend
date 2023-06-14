import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FIREFLOWER_ICON from '../../assets/images/fireflower-icon.png';
import { Cart } from "../../common/Cart";
import { ProfileDrawer } from "../../common/ProfileDrawer";


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
        <motion.span
          className="naming-container__name"
        >
          FIREFLOWER
        </motion.span>
      </div>
      <div className="page-header__slogan">
        <span style={{marginRight: 5, textTransform: 'uppercase', fontSize: 20}}>Ваши эмоции разгораются с</span>
        <motion.div
          className='naming-container__name'
          onClick={() => navigate('/fireflower')}
          whileTap={{scale: 1.02, transition: {duration: 0.1}}}
        >
          FIREFLOWER
        </motion.div>
      </div>
      <Cart />
      <ProfileDrawer />
    </header>
  );
};

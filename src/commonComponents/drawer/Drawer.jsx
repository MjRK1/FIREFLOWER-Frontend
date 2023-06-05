import React from 'react';
import { Drawer as DrawerAntd } from 'antd';

export function Drawer(props) {
  return (
    <DrawerAntd {...props}>
      {props?.children}
    </DrawerAntd>
  );
}

import React from "react";
import { Tabs } from '../../commonComponents/tabs';
import {MainPageProducts} from "./MainPageProducts";
import {MainPageShops} from "./MainPageShops";

export function MainPage() {
  const items = [
    {
      key: '1',
      label: `Товары`,
      children: <MainPageProducts />,
    },
    {
      key: '2',
      label: `Магазины`,
      children: <MainPageShops />,
    },
  ];
    return (
      <div className="main-page">
        <div className="main-page__main-page-title">
          Каталог товаров
        </div>
        <div className="main-page__main-page-tabs">
          <Tabs style={{fontFamily: '"Noto Sans Medium", sans-serif'}} items={items} centered />
        </div>
      </div>
    );
}

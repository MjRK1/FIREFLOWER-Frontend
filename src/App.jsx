import React, {useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./Services/ReduxState";
import "./assets/css/main.css";
import { RouteLayout } from "./common/RouteLayout";
import { MainPage } from "./Pages/MainPage";
import { Fireflower } from "./Services/Fireflower/Fireflower";

function App() {
  useEffect(() => {
    const userInfo = {
      id: 123,
      name: 'Oleg',
      phone: '+79625460805',
      adress: 'Москва, ул.Вадковский пер, д. 8',
      photo: null,
    };
    Fireflower.setUserInfo(userInfo);
  });
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<RouteLayout />}>
          <Route path='/fireflower' element={<MainPage />} />
          <Route path='/order' element={<div />} />
          <Route path='/' element={<Navigate to='/fireflower' replace />} />
        </Route>
      </Routes>
      <wc-toast position='bottom-right' />
    </Provider>
  );
}

export default App;

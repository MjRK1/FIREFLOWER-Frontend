import React, {useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./Services/ReduxState";
import "./assets/css/main.css";
import { RouteLayout } from "./common/RouteLayout";
import { MainPage } from "./Pages/MainPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { Fireflower } from "./Services/Fireflower/Fireflower";
import {OrderPage} from "./Pages/OrderPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<RouteLayout />}>
          <Route path='/fireflower' element={<MainPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/' element={<Navigate to='/fireflower' replace />} />
        </Route>
      </Routes>
      <wc-toast position='bottom-right' />
    </Provider>
  );
}

export default App;

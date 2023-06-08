import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./Services/ReduxState";
import "./assets/css/main.css";
import { RouteLayout } from "./common/RouteLayout";
import { MainPage } from "./Pages/MainPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<RouteLayout />}>
          <Route path='/fireflower' element={<MainPage />} />
          <Route path='/' element={<Navigate to='/fireflower' replace />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;

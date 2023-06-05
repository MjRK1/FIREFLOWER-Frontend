import React from 'react';
import "./assets/css/main.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import {RouteLayout} from "./common/RouteLayout";
import {MainPage} from "./Pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<RouteLayout />}>
        <Route path='/fireflower' element={<MainPage />} />
        <Route path='/' element={<Navigate to='/fireflower' replace />} />
      </Route>
    </Routes>
  );
}

export default App;

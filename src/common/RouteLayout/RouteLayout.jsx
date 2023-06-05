import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageHeader } from "../../components/PageHeader";

export const RouteLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <PageHeader />
      <Outlet />
    </div>
  );
};

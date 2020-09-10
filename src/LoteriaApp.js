import React from "react";
import { Layout } from "antd";

import "./Loteria.css";
import { AppRouter } from "./routers/AppRouter";
export const LoteriaApp = () => {
  return (
    <div>
      <Layout className="contend-loteria">
        <AppRouter />
      </Layout>
    </div>
  );
};

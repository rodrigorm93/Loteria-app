import React from "react";
import { MenuApp } from "../MenuApp";
import { GeneratorLoteria } from "../GeneratorLoteria";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import { GetNumeros } from "../GetNumeros";

export const DashboardRoute = () => {
  const { Header } = Layout;
  return (
    <>
      <Header style={{ zIndex: 1 }}>
        <MenuApp />
      </Header>

      <div>
        <Switch>
          <Route exact path="/" component={GeneratorLoteria} />
          <Route exact path="/numero" component={GetNumeros} />
        </Switch>
      </div>
    </>
  );
};

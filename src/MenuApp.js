import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import { HomeOutlined } from "@ant-design/icons";

export const MenuApp = () => {
  return (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Generar Loteria</Link>
      </Menu.Item>

      <Menu.Item key="2" icon={<HomeOutlined />}>
        <Link to="/numero">Generar Números</Link>
      </Menu.Item>
    </Menu>
  );
};

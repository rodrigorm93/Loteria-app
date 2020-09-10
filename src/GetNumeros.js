import React, { useState } from "react";
import { Layout } from "antd";

import { Button, Row, Col } from "react-bootstrap";

import "./Number.css";
export const GetNumeros = () => {
  const { Content } = Layout;
  const [number, setNumber] = useState("");

  const handleNumber = () => {
    const numRandom = Math.floor(Math.random() * (100 - 1) + 1);
    setNumber(numRandom);
  };
  return (
    <div>
      <h1>Número aleatorios</h1>
      <Content>
        <Row>
          <Col>
            <div className="card-num">
              <div className="container-num">
                <div className="num_loteria2">
                  <h1 className="title-number">{number}</h1>
                </div>
              </div>
              <div className="btn-number">
                <Button variant="success" onClick={handleNumber}>
                  Generar
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

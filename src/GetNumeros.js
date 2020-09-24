import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import { Button, Row, Col, ListGroup, Card, Image } from "react-bootstrap";

import "./Number.css";
import { getArrayAleatorio } from "./getArrayAleatorio";
//const loteria = Array.from({ length: 10 }, (_, i) => i + 1);

export const GetNumeros = () => {
  const { Content } = Layout;
  const [number, setNumber] = useState("");
  const [loteriaLista, setloteriaLista] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const loteria = Array.from({ length: 100 }, (_, i) => i + 1);
    const { array } = getArrayAleatorio(loteria);
    console.log("effect");
    setloteriaLista(array);
    setReset(false);
    setNumber("");
  }, [reset]);

  const handleNumber = () => {
    setNumber(loteriaLista[0]);

    let pos = loteriaLista.indexOf(loteriaLista[0]);
    loteriaLista.splice(pos, 1);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setReset(true);
  };

  console.log(loteriaLista);
  return (
    <div>
      <h1>Números aleatorios</h1>
      <Content>
        <Row>
          <ListGroup horizontal>
            {loteriaLista.map((i, index) => (
              <Col key={index}>
                <ListGroup.Item>{i}</ListGroup.Item>
              </Col>
            ))}
          </ListGroup>
        </Row>
        <Row>
          <Col className="btn-number-reset">
            <Button variant="primary" onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 3 }} className="col-number">
            <Card
              style={{ width: "35rem", height: "20rem" }}
              className="card-num"
            >
              <Card.Body className="container-num">
                <div className="num_loteria2">
                  <h1 className="title-number">{number}</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 1, offset: 3 }} className="btn-number">
            <Button variant="success" onClick={handleNumber}>
              Siguiente
            </Button>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

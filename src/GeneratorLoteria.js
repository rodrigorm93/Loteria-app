import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Loteria } from "./Loteria";
import { Layout } from "antd";

import "./Loteria.css";
export const GeneratorLoteria = () => {
  const { Content } = Layout;
  const [numLoterias, setnumLoterias] = useState(0);
  //const [numeros, setnumeros] = useState(100);

  const num_loterias = Array.from({ length: numLoterias });

  return (
    <>
      <div className="div-input">
        <p>Número de Cartones:</p>
        <input
          autoComplete="off"
          type="number"
          name="numLoterias"
          onChange={(e) => setnumLoterias(e.target.value)}
          value={numLoterias}
        />
      </div>

      <div className="btn-pdf">
        <Button onClick={() => setnumLoterias(0)} variant="primary">
          Reset
        </Button>
        <Button onClick={() => setnumLoterias(3)} variant="success">
          Generar 3
        </Button>
      </div>

      <Content id="print_to_pdf">
        {num_loterias.map((_, index) => (
          <div key={index}>
            <Loteria />

            <br />
          </div>
        ))}
      </Content>
    </>
  );
};

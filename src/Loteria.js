import React from "react";
import { Table, Card } from "react-bootstrap";

import "./Loteria.css";
import { getLoteria } from "./getLoteria";

export const Loteria = ({ numeros }) => {
  const { array1, array2, array3 } = getLoteria(100, 12);

  //console.log(arrayLoteria);

  return (
    <Card className="card-loteria">
      <h1>Loteria</h1>

      <Table responsive borderless={true}>
        <thead></thead>
        <tbody>
          <tr>
            {array1.map((i, index) => (
              <td key={index}>
                <div className="num_loteria">{i}</div>
              </td>
            ))}
          </tr>

          <tr>
            {array2.map((i, index) => (
              <td key={index}>
                <div className="num_loteria">{i}</div>{" "}
              </td>
            ))}
          </tr>
          <tr>
            {array3.map((i, index) => (
              <td key={index}>
                <div className="num_loteria">{i}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

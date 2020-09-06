import React, { useState } from "react";
import { Loteria } from "./Loteria";
import { Layout } from "antd";
//import html2canvas from "html2canvas";
//import pdfMake from "pdfmake/build/pdfmake";

//import { Button } from "react-bootstrap";

import "./Loteria.css";
export const LoteriaApp = () => {
  const [numLoterias, setnumLoterias] = useState(1);
  //const [numeros, setnumeros] = useState(100);
  const { Content, Header } = Layout;
  const num_loterias = Array.from({ length: numLoterias });

  return (
    <div>
      <Layout className="contend-loteria">
        <Header>
          <h1 className="titulo-header">Loterias APP</h1>
        </Header>
        <br />
        <br />

        <div className="div-input">
          <p>Número de Cartones</p>
          <input
            autoComplete="off"
            type="number"
            name="numLoterias"
            onChange={(e) => setnumLoterias(e.target.value)}
            value={numLoterias}
          />
        </div>

        <Content id="print_to_pdf">
          {num_loterias.map((_, index) => (
            <div key={index}>
              <Loteria />

              <br />
            </div>
          ))}
        </Content>
      </Layout>
    </div>
  );
};

//const printToPdf = () => {
// html2canvas(document.getElementById("print_to_pdf")).then((canvas) => {
// var data = canvas.toDataURL();
// var pdfExportSetting = {
//   content: [
//     {
//       image: data,
//        width: 650,
//      },
//    ],
//  };
//   pdfMake.createPdf(pdfExportSetting).download("test_file.pdf");
// });
//};

//<div className="btn-pdf">
//<Button onClick={printToPdf} variant="danger">
// Crear PDF
//</Button>
//</div>

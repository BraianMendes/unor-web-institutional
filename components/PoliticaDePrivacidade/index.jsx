import React from "react";
import CabealhoAgrupamento from "../CabealhoAgrupamento";
import Componente31 from "../Componente31";
import RodapAgrupamento from "../RodapAgrupamento";
import "./PoliticaDePrivacidade.css";

function PoliticaDePrivacidade(props) {
  const { cabealhoAgrupamentoProps, componente31Props, rodapAgrupamentoProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="politica-de-privacidade screen">
        <CabealhoAgrupamento className={cabealhoAgrupamentoProps.className} />
        <Componente31 {...componente31Props} />
        <RodapAgrupamento
          instagramBrands1={rodapAgrupamentoProps.instagramBrands1}
          className={rodapAgrupamentoProps.className}
        />
      </div>
    </div>
  );
}

export default PoliticaDePrivacidade;

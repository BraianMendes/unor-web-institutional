import React from "react";
import CabealhoAgrupamento from "../CabealhoAgrupamento";
import Componente11 from "../Componente11";
import Componente21 from "../Componente21";
import RodapAgrupamento from "../RodapAgrupamento";
import styled from "styled-components";
import "./Servios.css";

function Servios(props) {
  const {
    untitled1,
    text29,
    cabealhoAgrupamentoProps,
    componente11Props,
    componente21Props,
    rodapAgrupamentoProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="servicos screen">
        <CabealhoAgrupamento className={cabealhoAgrupamentoProps.className} />
        <Componente11
          spanText={componente11Props.spanText}
          spanText2={componente11Props.spanText2}
          spanText3={componente11Props.spanText3}
          spanText4={componente11Props.spanText4}
          spanText5={componente11Props.spanText5}
          fazemosONossoMelh={componente11Props.fazemosONossoMelh}
        />
        <Componente21 {...componente21Props} />
        <Untitled1 src={untitled1} />
        <Text29>{text29}</Text29>
        <RodapAgrupamento
          instagramBrands1={rodapAgrupamentoProps.instagramBrands1}
          className={rodapAgrupamentoProps.className}
        />
      </div>
    </div>
  );
}

const Untitled1 = styled.img`
  width: 226px;
  height: 150px;
  margin-top: 111px;
  object-fit: cover;
`;

const Text29 = styled.div`
  margin-bottom: -8px;
  min-height: 64px;
  margin-top: 20px;
  margin-left: 3px;
  min-width: 885px;
  font-family: var(--font-family-rubik);
  font-weight: 700;
  color: var(--white);
  font-size: 52px;
  letter-spacing: 0;
  line-height: 72px;
  white-space: nowrap;
`;

export default Servios;

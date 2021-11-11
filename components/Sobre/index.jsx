import React from "react";
import BACKGROUND from "../BACKGROUND";
import SOMOSTRABALHAMOS from "../SOMOSTRABALHAMOS";
import EQUIPE from "../EQUIPE";
import CabealhoAgrupamento from "../CabealhoAgrupamento";
import RodapAgrupamento from "../RodapAgrupamento";
import styled from "styled-components";
import "./Sobre.css";

function Sobre(props) {
  const {
    bACKGROUNDProps,
    sOMOSTRABALHAMOSProps,
    eQUIPEProps,
    cabealhoAgrupamentoProps,
    rodapAgrupamentoProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sobre screen">
        <OverlapGroup3>
          <BACKGROUND
            unor1221222Ativo92X={bACKGROUNDProps.unor1221222Ativo92X}
            unor12122Ativo72X={bACKGROUNDProps.unor12122Ativo72X}
            unor1221222Ativo92X2={bACKGROUNDProps.unor1221222Ativo92X2}
          />
          <SOMOSTRABALHAMOS
            spanText={sOMOSTRABALHAMOSProps.spanText}
            spanText2={sOMOSTRABALHAMOSProps.spanText2}
            spanText3={sOMOSTRABALHAMOSProps.spanText3}
            somosUmaAgnciaDe={sOMOSTRABALHAMOSProps.somosUmaAgnciaDe}
          />
          <EQUIPE {...eQUIPEProps} />
          <CabealhoAgrupamento className={cabealhoAgrupamentoProps.className} />
        </OverlapGroup3>
        <RodapAgrupamento
          instagramBrands1={rodapAgrupamentoProps.instagramBrands1}
          className={rodapAgrupamentoProps.className}
        />
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 1280px;
  height: 1478px;
  position: relative;
`;

export default Sobre;

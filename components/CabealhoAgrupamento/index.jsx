import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  SpartanBlackConcrete37px,
  RubikLightWhite15px,
} from "../../styledMixins";

function CabealhoAgrupamento(props) {
  const { className } = props;

  return (
    <CabealhoAgrupamento1 className={`cabealho-agrupamento ${className || ""}`}>
      <CabealhoAgrupamento2 className="cabealho-agrupamento-1">
        <LogoRoxoAzul
          className="logo-roxo-azul"
          src="/img/logo-roxo-azul-1@1x.png"
        />
        <Unor className="unor">
          <span className="span0-1 spartan-extra-bold-concrete-37px">unor</span>
          <span className="span1-1 spartan-black-concrete-20px">.</span>
        </Unor>
        <Grupo92 className="grupo-92">
          <INICIO className="inicio">INICIO</INICIO>
          <Link to="/sobre">
            <SOBRE>SOBRE</SOBRE>
          </Link>
          <Link to="/servicos">
            <SERVIOS className="servios">SERVIÇOS</SERVIOS>
          </Link>
          <LanarBoto className="lanar-boto">
            <LANAR className="lanar">LANÇAR</LANAR>
          </LanarBoto>
        </Grupo92>
      </CabealhoAgrupamento2>
    </CabealhoAgrupamento1>
  );
}

const CabealhoAgrupamento1 = styled.div`
  position: fixed;
  min-width: 1280px;
  width: 100%;
  height: 60px;
  display: flex;
  top: 0;
  left: 0;
  z-index: 8;
  display: flex;
  justify-content: space-between;

  &.cabealho-agrupamento.cabealho-agrupamento-2 {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const CabealhoAgrupamento2 = styled.div`
  flex: 1;
  display: flex;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  min-width: 1280px;
  backdrop-filter: blur(50px) brightness(50%);
  -webkit-backdrop-filter: blur(50px) brightness(50%);
`;

const LogoRoxoAzul = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 86px;
  object-fit: cover;
`;

const Unor = styled.div`
  ${SpartanBlackConcrete37px}
  min-height: 44px;
  margin-left: 4px;
  min-width: 108px;
  letter-spacing: 0;
  line-height: 44px;
  white-space: nowrap;
`;

const Grupo92 = styled.div`
  margin-left: 658px;
  margin-top: 1px;
  display: flex;
  align-items: center;
  min-width: 396px;
`;

const INICIO = styled.div`
  ${RubikLightWhite15px}
  min-height: 20px;
  margin-top: 4px;
  min-width: 43px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const SOBRE = styled.div`
  ${RubikLightWhite15px}
  min-height: 20px;
  margin-left: 55px;
  margin-top: 4px;
  min-width: 49px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
  cursor: pointer;
`;

const SERVIOS = styled.div`
  ${RubikLightWhite15px}
  min-height: 20px;
  margin-left: 55px;
  margin-top: 4px;
  min-width: 71px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
  cursor: pointer;
`;

const LanarBoto = styled.div`
  height: 31px;
  margin-left: 45px;
  display: flex;
  padding: 3.5px 9px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 78px;
  background-color: var(--radical-red);
  border-radius: 16px;
  box-shadow: 3px 1.75px 27px #ff1e5d6b;
`;

const LANAR = styled.div`
  ${RubikLightWhite15px}
  min-height: 20px;
  min-width: 59px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const LogoRoxoAzul1 = styled.img`
  .cabealho-agrupamento.cabealho-agrupamento-2 & {
    cursor: pointer;
  }
`;

const Unor1 = styled.div`
  ${SpartanBlackConcrete37px}

  .cabealho-agrupamento.cabealho-agrupamento-2  & {
    cursor: pointer;
  }
`;

const INICIO1 = styled.div`
  ${RubikLightWhite15px}

  .cabealho-agrupamento.cabealho-agrupamento-2  & {
    cursor: pointer;
  }
`;

const SOBRE1 = styled.div`
  ${RubikLightWhite15px}

  .cabealho-agrupamento.cabealho-agrupamento-2  & {
    cursor: unset;
  }
`;

const LogoRoxoAzul2 = styled.img`
  .cabealho-agrupamento.cabealho-agrupamento-3 & {
    cursor: pointer;
  }
`;

const Unor2 = styled.div`
  ${SpartanBlackConcrete37px}

  .cabealho-agrupamento.cabealho-agrupamento-3  & {
    cursor: pointer;
  }
`;

const INICIO2 = styled.div`
  ${RubikLightWhite15px}

  .cabealho-agrupamento.cabealho-agrupamento-3  & {
    cursor: pointer;
  }
`;

const SERVIOS1 = styled.div`
  ${RubikLightWhite15px}

  .cabealho-agrupamento.cabealho-agrupamento-3  & {
    cursor: unset;
  }
`;

const LogoRoxoAzul3 = styled.img`
  .cabealho-agrupamento.cabealho-agrupamento-4 & {
    cursor: pointer;
  }
`;

const Unor3 = styled.div`
  ${SpartanBlackConcrete37px}

  .cabealho-agrupamento.cabealho-agrupamento-4  & {
    cursor: pointer;
  }
`;

const INICIO3 = styled.div`
  ${RubikLightWhite15px}

  .cabealho-agrupamento.cabealho-agrupamento-4  & {
    cursor: pointer;
  }
`;

export default CabealhoAgrupamento;

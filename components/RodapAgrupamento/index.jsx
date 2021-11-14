import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RubikLightPinkSwan15px2,
  SpartanBlackConcrete66px,
  RubikBoldWhite26px,
  RubikLightPinkSwan15px,
  RubikLightWhite15px,
} from "../../styledMixins";

function RodapAgrupamento(props) {
  const { instagramBrands1, className } = props;

  return (
    <RodapAgrupamento1 className={`rodap-agrupamento ${className || ""}`}>
      <FlexRow className="flex-row-3">
        <FlexCol className="flex-col-3">
          <FlexRow1 className="flex-row-4">
            <LogoRoxoAzul
              className="logo-roxo-azul-1"
              src="/img/logo-roxo-azul-2@1x.png"
            />
            <Title className="title">
              <span className="span0-5 spartan-extra-bold-concrete-66px">
                unor
              </span>
              <span className="span1-5 spartan-black-concrete-36px">.</span>
            </Title>
          </FlexRow1>
          <Text1 className="text-1">
            A agência espacial feita para te ajudar a explorar o universo
            digital
          </Text1>
        </FlexCol>
        <FlexCol1 className="flex-col-4">
          <Pginas className="pginas">Páginas</Pginas>
          <INICIO className="i-nicio">
            <span className="span0-6 rubik-light-pink-swan-15px">I</span>
            <span className="span1-6 rubik-light-pink-swan-15px">nicio</span>
          </INICIO>
          <Link to="/sobre">
            <SOBRE className="s-obre">
              <span className="span0-7 rubik-light-pink-swan-15px">S</span>
              <span className="span1-7 rubik-light-pink-swan-15px">obre</span>
            </SOBRE>
          </Link>
          <Link to="/servicos">
            <SOBRE className="s-ervios">
              <span className="span0-8 rubik-light-pink-swan-15px">S</span>
              <span className="span1-8 rubik-light-pink-swan-15px">
                erviços
              </span>
            </SOBRE>
          </Link>
        </FlexCol1>
        <FlexCol2 className="flex-col-5">
          <Pginas className="fique-por-dentro">Fique Por Dentro</Pginas>
          <a href="https://medium.com/@unor.social">
            <Text3 className="text-3">https://medium.com/@unor.social</Text3>
          </a>
          <a href="https://www.vemprapalante.com/https://">
            <Text4 className="text-4">https://www.vemprapalante.com</Text4>
          </a>
        </FlexCol2>
      </FlexRow>
      <FlexRow2 className="flex-row-5">
        <OverlapGroup3 className="overlap-group3">
          <FacebookFBrands1
            className="facebook-f-brands-1"
            src="/img/facebook-f-brands--1--1@1x.png"
          />
        </OverlapGroup3>
        <OverlapGroup2 className="overlap-group2">
          <InstagramBrands1
            className="instagram-brands-1"
            src={instagramBrands1}
          />
        </OverlapGroup2>
        <Link to="/politica-de-privacidade" className="align-self-flex-start">
          <Text2 className="text-2">
            <span className="span0-9 rubik-light-pink-swan-15px">P</span>
            <span className="span1-9 rubik-light-pink-swan-15px">
              olítica de privacidade
            </span>
          </Text2>
        </Link>
      </FlexRow2>
    </RodapAgrupamento1>
  );
}

const RodapAgrupamento1 = styled.div`
  width: 1280px;
  margin-top: 135px;
  display: flex;
  flex-direction: column;
  padding: 52px 47px;
  align-items: flex-start;
  min-height: 317px;
  background-color: var(--eerie-black);

  &.rodap-agrupamento.rodap-agrupamento-1 {
    margin-top: 34px;
  }

  &.rodap-agrupamento.rodap-agrupamento-2 {
    margin-top: 106px;
  }

  &.rodap-agrupamento.rodap-agrupamento-3 {
    margin-top: 121px;
  }

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const FlexRow = styled.div`
  height: 150px;
  margin-top: 5px;
  margin-left: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 1094px;
`;

const FlexCol = styled.div`
  width: 372px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 142px;
`;

const FlexRow1 = styled.div`
  height: 78px;
  display: flex;
  align-items: flex-start;
  min-width: 279px;
`;

const LogoRoxoAzul = styled.img`
  width: 76px;
  height: 76px;
  align-self: flex-end;
  border-radius: 86px;
  object-fit: cover;
`;

const Title = styled.h1`
  ${SpartanBlackConcrete66px}
  min-height: 76px;
  margin-left: 12px;
  letter-spacing: 0;
  line-height: 78px;
  white-space: nowrap;
`;

const Text1 = styled.p`
  ${RubikLightWhite15px}
  width: 372px;
  min-height: 47px;
  margin-top: 17px;
  opacity: 0.75;
  letter-spacing: 0;
  line-height: 27px;
`;

const FlexCol1 = styled.div`
  width: 106px;
  align-self: flex-end;
  margin-left: 218px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 122px;
`;

const Pginas = styled.div`
  ${RubikBoldWhite26px}
  min-height: 33px;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const INICIO = styled.div`
  ${RubikLightPinkSwan15px2}
  min-height: 20px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const SOBRE = styled.div`
  ${RubikLightPinkSwan15px2}
  min-height: 20px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
  cursor: pointer;
`;

const FlexCol2 = styled.div`
  width: 266px;
  align-self: center;
  margin-left: 132px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 86px;
`;

const Text3 = styled.div`
  ${RubikLightPinkSwan15px}
  margin-bottom: -12px;
  min-height: 20px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
  cursor: pointer;
`;

const Text4 = styled.div`
  ${RubikLightPinkSwan15px}
  margin-bottom: -12px;
  min-height: 20px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
  cursor: pointer;
`;

const FlexRow2 = styled.div`
  height: 52px;
  margin-top: 7px;
  display: flex;
  align-items: flex-end;
  min-width: 747px;
`;

const OverlapGroup3 = styled.div`
  height: 37px;
  display: flex;
  padding: 9.2px 13.1px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 36px;
  background-color: var(--mirage);
  border-radius: 6px;
`;

const FacebookFBrands1 = styled.img`
  width: 9px;
  height: 17px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  height: 37px;
  margin-left: 21px;
  display: flex;
  padding: 11.2px 10.3px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 36px;
  background-color: var(--mirage);
  border-radius: 6px;
`;

const InstagramBrands1 = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
`;

const Text2 = styled.div`
  ${RubikLightPinkSwan15px2}
  min-height: 20px;
  align-self: flex-start;
  margin-left: 500px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
  cursor: pointer;
`;

const LogoRoxoAzul1 = styled.img`
  .rodap-agrupamento.rodap-agrupamento-1 & {
    cursor: pointer;
  }
`;

const Unor = styled.div`
  ${SpartanBlackConcrete66px}

  .rodap-agrupamento.rodap-agrupamento-1  & {
    cursor: pointer;
  }
`;

const INICIO1 = styled.div`
  ${RubikLightPinkSwan15px2}

  .rodap-agrupamento.rodap-agrupamento-1  & {
    cursor: pointer;
  }
`;

const SOBRE1 = styled.div`
  ${RubikLightPinkSwan15px2}

  .rodap-agrupamento.rodap-agrupamento-1  & {
    cursor: unset;
  }
`;

const LogoRoxoAzul2 = styled.img`
  .rodap-agrupamento.rodap-agrupamento-2 & {
    cursor: pointer;
  }
`;

const Unor1 = styled.div`
  ${SpartanBlackConcrete66px}

  .rodap-agrupamento.rodap-agrupamento-2  & {
    cursor: pointer;
  }
`;

const INICIO2 = styled.div`
  ${RubikLightPinkSwan15px2}

  .rodap-agrupamento.rodap-agrupamento-2  & {
    cursor: pointer;
  }
`;

const SERVIOS = styled.div`
  ${RubikLightPinkSwan15px2}

  .rodap-agrupamento.rodap-agrupamento-2  & {
    cursor: unset;
  }
`;

const LogoRoxoAzul3 = styled.img`
  .rodap-agrupamento.rodap-agrupamento-3 & {
    cursor: pointer;
  }
`;

const Unor2 = styled.div`
  ${SpartanBlackConcrete66px}

  .rodap-agrupamento.rodap-agrupamento-3  & {
    cursor: pointer;
  }
`;

const INICIO3 = styled.div`
  ${RubikLightPinkSwan15px2}

  .rodap-agrupamento.rodap-agrupamento-3  & {
    cursor: pointer;
  }
`;

const Text32 = styled.div`
  ${RubikLightPinkSwan15px2}

  .rodap-agrupamento.rodap-agrupamento-3  & {
    cursor: unset;
  }
`;

export default RodapAgrupamento;

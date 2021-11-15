import React from "react";
import EmailCaixa from "../EmailCaixa";
import styled from "styled-components";
import { RubikNormalWhite24px, Border2pxWhite, RubikMediumWhite44px2 } from "../../styledMixins";


function Componente181(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    inputType,
    inputPlaceholder,
    simEuQuero,
    emailCaixaProps,
    emailCaixa2Props,
  } = props;

  return (
    <Componente1811>
      <ComoPodemosAjudar>
        <span className="rubik-medium-white-44px">{spanText}</span>
        <span className="rubik-medium-purple-heart-44px">{spanText2}</span>
        <span className="rubik-medium-white-44px">{spanText3}</span>
        <span className="rubik-medium-radical-red-44px">{spanText4}</span>
        <span className="rubik-medium-white-44px">{spanText5}</span>
        <span className="rubik-medium-purple-heart-44px">{spanText6}</span>
        <span className="rubik-medium-white-44px">{spanText7}</span>
        <span className="rubik-medium-radical-red-44px">{spanText8}</span>
        <span className="rubik-medium-white-44px">{spanText9}</span>
      </ComoPodemosAjudar>
      <NomeCaixa>
        <Nome name="nome-11" placeholder={inputPlaceholder} type={inputType} />
      </NomeCaixa>
      <EmailCaixa inputType={emailCaixaProps.inputType} inputPlaceholder={emailCaixaProps.inputPlaceholder} />
      <EmailCaixa
        inputType={emailCaixa2Props.inputType}
        inputPlaceholder={emailCaixa2Props.inputPlaceholder}
        className={emailCaixa2Props.className}
      />
      <ButtonENVIAR>
        <SIMEUQUERO>{simEuQuero}</SIMEUQUERO>
      </ButtonENVIAR>
    </Componente1811>
  );
}

const Componente1811 = styled.div`
  width: 830px;
  position: relative;
  margin-top: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 539px;
`;

const ComoPodemosAjudar = styled.div`
  ${RubikMediumWhite44px2}
  width: 639px;
  margin-top: -8px;
  margin-bottom: -6px;
  min-height: 54px;
  margin-left: 2px;
  text-align: center;
  letter-spacing: 0.24px;
  line-height: 60px;
  white-space: nowrap;
`;

const NomeCaixa = styled.div`
  ${Border2pxWhite}
  height: 78px;
  margin-top: 72px;
  margin-left: 1px;
  display: flex;
  padding: 23px 19px;
  align-items: flex-start;
  min-width: 829px;
`;

const Nome = styled.input`
  ${RubikNormalWhite24px}
  width: 790px;
  height: 30px;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #ffffff99;
  }
`;

const ButtonENVIAR = styled.div`
  height: 62px;
  margin-top: 41px;
  display: flex;
  padding: 0 29px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 230px;
  background-color: var(--radical-red);
  border-radius: 24px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const SIMEUQUERO = styled.div`
  min-height: 29px;
  margin-top: -23.5px;
  font-family: var(--font-family-rubik);
  font-weight: 700;
  color: var(--white);
  font-size: 22px;
  letter-spacing: 0;
  line-height: 110px;
  white-space: nowrap;
`;

export default Componente181;

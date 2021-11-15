import React from "react";
import CabealhoAgrupamento from "../CabealhoAgrupamento";
import Backgrund from "../Backgrund";
import FraseAgrupamento from "../FraseAgrupamento";
import QuemSomosAgrupamento from "../QuemSomosAgrupamento";
import ServiosAgrupamento from "../ServiosAgrupamento";
import PeaOSeuServioAgrupamento from "../PeaOSeuServioAgrupamento";
import FaixaRoxaAgrupamento from "../FaixaRoxaAgrupamento";
import CitaoAgrupamento from "../CitaoAgrupamento";
import IntroAgrupamento from "../IntroAgrupamento";
import NomeCaixa from "../NomeCaixa";
import Componente181 from "../Componente181";
import RodapAgrupamento from "../RodapAgrupamento";
import styled from "styled-components";
import {
  RubikBoldWhite16px,
  Border2pxWhite,
  RubikMediumWhite44px2,
} from "../../styledMixins";
import "./Home.css";

function Home(props) {
  const {
    entreEmContato,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    inputType,
    inputPlaceholder,
    enviar,
    backgrundProps,
    fraseAgrupamentoProps,
    quemSomosAgrupamentoProps,
    serviosAgrupamentoProps,
    peaOSeuServioAgrupamentoProps,
    faixaRoxaAgrupamentoProps,
    citaoAgrupamentoProps,
    introAgrupamentoProps,
    nomeCaixaProps,
    nomeCaixa2Props,
    nomeCaixa3Props,
    componente181Props,
    rodapAgrupamentoProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <StyledContainer className="home screen">
        <CabealhoAgrupamento />
        <OverlapGroup7>
          <Backgrund
            tintaAzul={backgrundProps.tintaAzul}
            tintaVermelha1={backgrundProps.tintaVermelha1}
            tintaVermelha2={backgrundProps.tintaVermelha2}
            elipse3={backgrundProps.elipse3}
            elipse2={backgrundProps.elipse2}
            elipse1={backgrundProps.elipse1}
          />
          <FraseAgrupamento
            text5={fraseAgrupamentoProps.text5}
            name={fraseAgrupamentoProps.name}
            linha4={fraseAgrupamentoProps.linha4}
          />
          <QuemSomosAgrupamento {...quemSomosAgrupamentoProps} />
          <ServiosAgrupamento {...serviosAgrupamentoProps} />
          <PeaOSeuServioAgrupamento
            peaOSeuServio={peaOSeuServioAgrupamentoProps.peaOSeuServio}
            trabalhamosNoDesen={
              peaOSeuServioAgrupamentoProps.trabalhamosNoDesen
            }
            peaUmTrabalho={peaOSeuServioAgrupamentoProps.peaUmTrabalho}
            listaDeServios={peaOSeuServioAgrupamentoProps.listaDeServios}
          />
          <FaixaRoxaAgrupamento {...faixaRoxaAgrupamentoProps} />
          <CitaoAgrupamento
            linha18={citaoAgrupamentoProps.linha18}
            text12={citaoAgrupamentoProps.text12}
            theodereLevitt={citaoAgrupamentoProps.theodereLevitt}
          />
          <IntroAgrupamento
            spanText={introAgrupamentoProps.spanText}
            spanText2={introAgrupamentoProps.spanText2}
            spanText3={introAgrupamentoProps.spanText3}
            spanText4={introAgrupamentoProps.spanText4}
            text14={introAgrupamentoProps.text14}
            text15={introAgrupamentoProps.text15}
            caminho440={introAgrupamentoProps.caminho440}
          />
        </OverlapGroup7>
        <Grupo94>
          <EntreEmContato>{entreEmContato}</EntreEmContato>
          <ComoPodemosAjudar>
            <span className="rubik-medium-white-44px">{spanText}</span>
            <span className="rubik-medium-purple-heart-44px">{spanText2}</span>
            <span className="rubik-medium-white-44px">{spanText3}</span>
            <span className="rubik-medium-radical-red-44px">{spanText4}</span>
            <span className="rubik-medium-white-44px">{spanText5}</span>
          </ComoPodemosAjudar>
          <NomeCaixa
            inputType={nomeCaixaProps.inputType}
            inputPlaceholder={nomeCaixaProps.inputPlaceholder}
          />
          <NomeCaixa
            inputType={nomeCaixa2Props.inputType}
            inputPlaceholder={nomeCaixa2Props.inputPlaceholder}
            className={nomeCaixa2Props.className}
          />
          <NomeCaixa
            inputType={nomeCaixa3Props.inputType}
            inputPlaceholder={nomeCaixa3Props.inputPlaceholder}
            className={nomeCaixa3Props.className}
          />
          <MensagemCaixa>
            <Mensagem
              name="mensagem-1"
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
          </MensagemCaixa>
          <ButtonENVIAR>
            <ENVIAR>{enviar}</ENVIAR>
          </ButtonENVIAR>
        </Grupo94>
        <Componente181 {...componente181Props} />
        <RodapAgrupamento
          instagramBrands1={rodapAgrupamentoProps.instagramBrands1}
        />
      </StyledContainer>
    </div>
  );
}

const StyledContainer = styled.div`
  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const OverlapGroup7 = styled.div`
  width: 1280px;
  height: 2820px;
  position: relative;

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const Grupo94 = styled.div`
  width: 741px;
  position: relative;
  margin-top: 58px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 836px;
`;

const EntreEmContato = styled.div`
  min-height: 24px;
  margin-top: 2px;
  margin-left: 1px;
  min-width: 204px;
  font-family: var(--font-family-rubik);
  font-weight: 600;
  color: var(--radical-red);
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 1.8px;
  line-height: 18px;
  white-space: nowrap;
`;

const ComoPodemosAjudar = styled.div`
  ${RubikMediumWhite44px2}
  width: 639px;
  margin-bottom: -6px;
  min-height: 54px;
  margin-top: 54px;
  margin-left: 1px;
  text-align: center;
  letter-spacing: 0.24px;
  line-height: 60px;
  white-space: nowrap;
`;

const MensagemCaixa = styled.div`
  ${Border2pxWhite}
  height: 200px;
  margin-top: 32px;
  display: flex;
  padding: 28px 19px;
  align-items: flex-start;
  min-width: 741px;
`;

const Mensagem = styled.input`
  width: 686px;
  height: 127px;
  background-color: transparent;
  font-family: var(--font-family-rubik);
  font-weight: 400;
  color: var(--white);
  font-size: 21px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #ffffff99;
  }
`;

const ButtonENVIAR = styled.div`
  height: 48px;
  margin-top: 32px;
  margin-right: 0;
  display: flex;
  padding: 0 57px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 179px;
  background-color: var(--radical-red);
  border-radius: 24px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const ENVIAR = styled.div`
  ${RubikBoldWhite16px}
  min-height: 21px;
  margin-top: -15.5px;
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
`;

export default Home;

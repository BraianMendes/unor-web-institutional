import React from "react";
import styled from "styled-components";
import { RubikNormalWhite18px, RubikBoldWhite16px, RubikSemiBoldRadicalRed22px } from "../../styledMixins";


function PeaOSeuServioAgrupamento(props) {
  const { peaOSeuServio, trabalhamosNoDesen, peaUmTrabalho, listaDeServios } = props;

  return (
    <PeaOSeuServioAgrupamento1>
      <PeaOSeuServio>{peaOSeuServio}</PeaOSeuServio>
      <TrabalhamosNoDesen>{trabalhamosNoDesen}</TrabalhamosNoDesen>
      <FlexRow>
        <ButtonPostAJob>
          <PeaUmTrabalho>{peaUmTrabalho}</PeaUmTrabalho>
        </ButtonPostAJob>
        <ButtonListJob>
          <ListaDeServios>{listaDeServios}</ListaDeServios>
        </ButtonListJob>
      </FlexRow>
    </PeaOSeuServioAgrupamento1>
  );
}

const PeaOSeuServioAgrupamento1 = styled.div`
  position: absolute;
  width: 572px;
  top: 1232px;
  left: 355px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 273px;
`;

const PeaOSeuServio = styled.div`
  ${RubikSemiBoldRadicalRed22px}
  margin-top: -8px;
  margin-bottom: -13px;
  min-height: 29px;
  margin-left: 0;
  min-width: 230px;
  text-align: center;
  letter-spacing: 0;
  line-height: 42px;
  white-space: nowrap;
`;

const TrabalhamosNoDesen = styled.div`
  ${RubikNormalWhite18px}
  width: 572px;
  height: 138px;
  margin-top: 37px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
`;

const FlexRow = styled.div`
  margin-top: 29px;
  margin-right: 2.4px;
  display: flex;
  align-items: flex-start;
  min-width: 374px;
`;

const ButtonPostAJob = styled.div`
  height: 48px;
  display: flex;
  padding: 0 17px;
  align-items: flex-start;
  min-width: 179px;
  background-color: var(--purple-heart-2);
  border-radius: 24px;
`;

const PeaUmTrabalho = styled.div`
  ${RubikBoldWhite16px}
  min-height: 21px;
  margin-top: -0.5px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const ButtonListJob = styled.div`
  height: 48px;
  margin-left: 16px;
  display: flex;
  padding: 0 21px;
  align-items: flex-start;
  min-width: 179px;
  background-color: var(--radical-red);
  border-radius: 24px;
`;

const ListaDeServios = styled.div`
  ${RubikBoldWhite16px}
  min-height: 21px;
  margin-top: -15.5px;
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
`;

export default PeaOSeuServioAgrupamento;

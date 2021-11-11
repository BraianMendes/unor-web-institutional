import React from "react";
import styled from "styled-components";
import { RubikNormalWhite20px, Border2pxWhite } from "../../styledMixins";


function NomeCaixa(props) {
  const { inputType, inputPlaceholder, className } = props;

  return (
    <NomeCaixa1 className={`nome-caixa ${className || ""}`}>
      <Nome className="nome" name="nome-1" placeholder={inputPlaceholder} type={inputType} />
    </NomeCaixa1>
  );
}

const NomeCaixa1 = styled.div`
  ${Border2pxWhite}
  height: 78px;
  margin-top: 72px;
  display: flex;
  padding: 23px 19px;
  align-items: flex-start;
  min-width: 741px;

  &.nome-caixa.email-caixa {
    height: 79px;
    margin-top: 41px;
    padding: 24px 20px;
  }

  &.nome-caixa.celular-caixa {
    height: 79px;
    margin-top: 41px;
    padding: 24px 20px;
  }
`;

const Nome = styled.input`
  ${RubikNormalWhite20px}
  width: 659px;
  height: 26px;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #ffffff99;
  }
`;

const Email = styled.input`
  ${RubikNormalWhite20px}

  .nome-caixa.email-caixa  & {
    width: 660px;
  }
`;

export default NomeCaixa;

import React from "react";
import styled from "styled-components";
import { RubikNormalWhite24px, Border2pxWhite } from "../../styledMixins";


function EmailCaixa(props) {
  const { inputType, inputPlaceholder, className } = props;

  return (
    <EmailCaixa1 className={`email-caixa-1 ${className || ""}`}>
      <Email className="email" name="email-11" placeholder={inputPlaceholder} type={inputType} required />
    </EmailCaixa1>
  );
}

const EmailCaixa1 = styled.div`
  ${Border2pxWhite}
  height: 79px;
  margin-top: 41px;
  display: flex;
  padding: 24px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 830px;

  &.email-caixa-1.celular-caixa-1 {
    padding: 24px 19px;
  }
`;

const Email = styled.input`
  ${RubikNormalWhite24px}
  width: 792px;
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

const Celular = styled.input`
  ${RubikNormalWhite24px}

  .email-caixa-1.celular-caixa-1  & {
    width: 791px;
  }
`;

export default EmailCaixa;

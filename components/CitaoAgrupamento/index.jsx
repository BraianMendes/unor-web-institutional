import React from "react";
import styled from "styled-components";
import { RalewaySemiBoldWhite18px } from "../../styledMixins";

function CitaoAgrupamento(props) {
  const { linha18, text12, theodereLevitt } = props;

  return (
    <CitaoAgrupamento1>
      <Linha18 src={linha18} />
      <FlexCol>
        <Text12>{text12}</Text12>
        <TheodereLevitt>{theodereLevitt}</TheodereLevitt>
      </FlexCol>
    </CitaoAgrupamento1>
  );
}

const CitaoAgrupamento1 = styled.div`
  position: absolute;
  height: 142px;
  top: 712px;
  left: 152px;
  display: flex;
  align-items: flex-start;
  min-width: 224px;

  @media screen and (max-width: 2560px) {
    left: 10%;
    /* width: 100vw; */
  }
`;

const Linha18 = styled.img`
  width: 2px;
  height: 142px;
  align-self: flex-end;
  margin-bottom: 0;
  object-fit: cover;
`;

const FlexCol = styled.div`
  width: 214px;
  margin-left: 8px;
  margin-top: -6.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 119px;
`;

const Text12 = styled.p`
  width: 214px;
  height: 86px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--white);
  font-size: 16px;
  letter-spacing: 0.08px;
  line-height: 29px;
`;

const TheodereLevitt = styled.div`
  ${RalewaySemiBoldWhite18px}
  margin-bottom: -8px;
  min-height: 23px;
  margin-top: 10px;
  letter-spacing: 0.09px;
  line-height: 31px;
  white-space: nowrap;
`;

export default CitaoAgrupamento;

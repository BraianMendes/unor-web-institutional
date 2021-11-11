import React from "react";
import styled from "styled-components";
import { RalewaySemiBoldWhite18px, RubikNormalWhite18px } from "../../styledMixins";


function FraseAgrupamento(props) {
  const { text5, name, linha4 } = props;

  return (
    <FraseAgrupamento1>
      <Text5>{text5}</Text5>
      <FlexRow>
        <Name>{name}</Name>
        <Linha4 src={linha4} />
      </FlexRow>
    </FraseAgrupamento1>
  );
}

const FraseAgrupamento1 = styled.div`
  position: absolute;
  width: 520px;
  top: 2577px;
  left: 382px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 166px;
`;

const Text5 = styled.div`
  ${RubikNormalWhite18px}
  width: 520px;
  height: 122px;
  margin-top: -7px;
  opacity: 0.75;
  text-align: center;
  letter-spacing: 0.09px;
  line-height: 32px;
`;

const FlexRow = styled.div`
  height: 23px;
  margin-top: 24px;
  margin-right: 19.48px;
  display: flex;
  align-items: center;
  min-width: 172px;
`;

const Name = styled.div`
  ${RalewaySemiBoldWhite18px}
  min-height: 23px;
  min-width: 114px;
  text-align: center;
  letter-spacing: 0.09px;
  line-height: 32px;
  white-space: nowrap;
`;

const Linha4 = styled.img`
  width: 40px;
  height: 1px;
  margin-left: 18px;
  margin-top: 9px;
  object-fit: cover;
`;

export default FraseAgrupamento;

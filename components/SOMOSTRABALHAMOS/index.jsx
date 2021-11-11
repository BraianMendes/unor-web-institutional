import React from "react";
import styled from "styled-components";
import { RubikBoldWhite37px2 } from "../../styledMixins";


function SOMOSTRABALHAMOS(props) {
  const { spanText, spanText2, spanText3, somosUmaAgnciaDe } = props;

  return (
    <SOMOSTRABALHAMOS1>
      <QUEMSOMOS>
        <span className="rubik-bold-white-37px">{spanText}</span>
        <span className="rubik-bold-radical-red-37px">{spanText2}</span>
        <span className="rubik-bold-white-37px">{spanText3}</span>
      </QUEMSOMOS>
      <SomosUmaAgnciaDe>{somosUmaAgnciaDe}</SomosUmaAgnciaDe>
    </SOMOSTRABALHAMOS1>
  );
}

const SOMOSTRABALHAMOS1 = styled.div`
  position: absolute;
  width: 496px;
  height: 331px;
  top: 166px;
  left: 138px;
  display: flex;
  flex-direction: column;
`;

const QUEMSOMOS = styled.div`
  ${RubikBoldWhite37px2}
  width: 272px;
  height: 46px;
  margin-top: -3.5px;
  letter-spacing: 0;
  line-height: 51px;
  white-space: nowrap;
`;

const SomosUmaAgnciaDe = styled.div`
  margin-right: -2px;
  flex: 1;
  margin-top: 24.5px;
  margin-bottom: -2px;
  font-family: var(--font-family-rubik);
  font-weight: 400;
  color: #dfdfdf;
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 20px;
`;

export default SOMOSTRABALHAMOS;

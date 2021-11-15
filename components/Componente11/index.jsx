import React from "react";
import styled from "styled-components";
import { RubikNormalWhite20px, RubikBoldWhite37px2 } from "../../styledMixins";


function Componente11(props) {
  const { spanText, spanText2, spanText3, spanText4, spanText5, fazemosONossoMelh } = props;

  return (
    <Componente111>
      <COMOTRABALHAMOS>
        <span className="rubik-bold-white-37px">{spanText}</span>
        <span className="rubik-bold-radical-red-37px">{spanText2}</span>
        <span className="rubik-bold-white-37px">{spanText3}</span>
        <span className="rubik-bold-plump-purple-37px">{spanText4}</span>
        <span className="rubik-bold-white-37px">{spanText5}</span>
      </COMOTRABALHAMOS>
      <FazemosONossoMelh>{fazemosONossoMelh}</FazemosONossoMelh>
    </Componente111>
  );
}

const Componente111 = styled.div`
  width: 1006px;
  height: 314px;
  margin-top: 44px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
`;

const COMOTRABALHAMOS = styled.div`
  ${RubikBoldWhite37px2}
  width: 426px;
  height: 46px;
  margin-top: -3.5px;
  letter-spacing: 0;
  line-height: 51px;
  white-space: nowrap;
`;

const FazemosONossoMelh = styled.div`
  ${RubikNormalWhite20px}
  margin-right: -2px;
  flex: 1;
  margin-top: 45.5px;
  margin-bottom: -2px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default Componente11;

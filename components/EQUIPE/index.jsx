import React from "react";
import styled from "styled-components";
import { RubikBoldRadicalRed37px2, RubikNormalWhite20px } from "../../styledMixins";


function EQUIPE(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    spanText4,
    braianMendesOFu,
    spanText5,
    spanText6,
    julianaUmbelinoF,
    base,
  } = props;

  return (
    <EQUIPE1>
      <Text16>
        <Span011>{spanText}</Span011>
        <span>{spanText2}</span>
      </Text16>
      <FlexRow>
        <Logo></Logo>
        <FlexCol>
          <BRAIANMENDES>
            <span className="rubik-bold-white-37px">{spanText3}</span>
            <span className="rubik-bold-plump-purple-37px">{spanText4}</span>
          </BRAIANMENDES>
          <BraianMendesOFu>{braianMendesOFu}</BraianMendesOFu>
        </FlexCol>
      </FlexRow>
      <FlexRow1>
        <FlexCol1>
          <Name>
            <span className="rubik-bold-white-37px">{spanText5}</span>
            <span className="rubik-bold-radical-red-37px">{spanText6}</span>
          </Name>
          <JulianaUmbelinoF>{julianaUmbelinoF}</JulianaUmbelinoF>
        </FlexCol1>
        <Logo1>
          <Base src={base} />
        </Logo1>
      </FlexRow1>
    </EQUIPE1>
  );
}

const EQUIPE1 = styled.div`
  position: absolute;
  width: 1006px;
  top: 603px;
  left: 138px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 816px;
`;

const Text16 = styled.div`
  margin-top: -4px;
  margin-bottom: -7px;
  min-height: 62px;
  margin-left: 11px;
  min-width: 625px;
  font-family: var(--font-family-rubik);
  color: var(--radical-red);
  font-size: 50px;
  letter-spacing: 0;
  line-height: 69px;
  white-space: nowrap;
  font-weight: 700;
`;

const Span011 = styled.span`
  color: var(--white);
`;

const FlexRow = styled.div`
  height: 300px;
  margin-top: 81px;
  display: flex;
  align-items: flex-start;
  min-width: 1006px;
`;

const Logo = styled.div`
  width: 281px;
  height: 281px;
  margin-top: 3.5px;
  background-color: var(--white);
  border-radius: 5px;
  border: 1px solid var(--plump-purple);
`;

const FlexCol = styled.div`
  width: 700px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 300px;
`;

const BRAIANMENDES = styled.div`
  margin-bottom: -5px;
  min-height: 46px;
  font-family: var(--font-family-rubik);
  color: var(--plump-purple);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: 51px;
  white-space: nowrap;
  font-weight: 700;
`;

const BraianMendesOFu = styled.div`
  ${RubikNormalWhite20px}
  width: 700px;
  height: 243px;
  margin-top: 10px;
  letter-spacing: 0;
  line-height: 20px;
`;

const FlexRow1 = styled.div`
  height: 284px;
  margin-top: 94px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1004px;
`;

const FlexCol1 = styled.div`
  width: 706px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 254px;
`;

const Name = styled.div`
  ${RubikBoldRadicalRed37px2}
  margin-bottom: -5px;
  min-height: 46px;
  min-width: 368px;
  letter-spacing: 0;
  line-height: 51px;
  white-space: nowrap;
`;

const JulianaUmbelinoF = styled.div`
  ${RubikNormalWhite20px}
  width: 706px;
  height: 197px;
  margin-top: 10px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Logo1 = styled.div`
  width: 281px;
  height: 281px;
  align-self: flex-end;
  margin-left: 17px;
  display: flex;
`;

const Base = styled.img`
  flex: 1;
  width: 281px;
  border-radius: 5px;
  object-fit: cover;
`;

export default EQUIPE;

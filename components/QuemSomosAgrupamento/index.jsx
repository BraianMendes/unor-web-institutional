import React from "react";
import styled from "styled-components";
import {
  RubikNormalSasquatchSocks14px,
  RubikMediumWhite44px2,
  RubikNormalWhite14px,
  RubikSemiBoldRadicalRed22px,
} from "../../styledMixins";


function QuemSomosAgrupamento(props) {
  const {
    quemSomos,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    braianMendes,
    ceoBraian,
    ju,
    juliana,
    ceoJu,
    overlapGroup4,
    label,
  } = props;

  return (
    <QuemSomosAgrupamento1>
      <QuemSomos>{quemSomos}</QuemSomos>
      <ConheaAsPessoas>
        <span className="rubik-medium-white-44px">{spanText}</span>
        <Span12>{spanText2}</Span12>
        <span className="rubik-medium-white-44px">{spanText3}</span>
        <span className="rubik-medium-radical-red-44px">{spanText4}</span>
        <span className="rubik-medium-white-44px">{spanText5}</span>
      </ConheaAsPessoas>
      <FlexRow>
        <FlexCol>
          <Base></Base>
          <BraianMendes>{braianMendes}</BraianMendes>
          <CEOBraian>{ceoBraian}</CEOBraian>
        </FlexCol>
        <FlexCol1>
          <Ju src={ju} />
          <Juliana>{juliana}</Juliana>
          <CEOJu>{ceoJu}</CEOJu>
        </FlexCol1>
      </FlexRow>
      <OverlapGroup4 style={{ backgroundImage: `url(${overlapGroup4})` }}>
        <Label>{label}</Label>
      </OverlapGroup4>
    </QuemSomosAgrupamento1>
  );
}

const QuemSomosAgrupamento1 = styled.div`
  position: absolute;
  width: 639px;
  top: 1836px;
  left: 322px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 612px;
`;

const QuemSomos = styled.div`
  ${RubikSemiBoldRadicalRed22px}
  min-height: 29px;
  margin-top: 2px;
  margin-left: 0.63px;
  min-width: 226px;
  text-align: center;
  letter-spacing: 2.2px;
  line-height: 22px;
  white-space: nowrap;
`;

const ConheaAsPessoas = styled.div`
  ${RubikMediumWhite44px2}
  width: 639px;
  min-height: 114px;
  margin-top: 22px;
  text-align: center;
  letter-spacing: 0.24px;
  line-height: 60px;
`;

const Span12 = styled.span`
  font-family: var(--font-family-rubik);
  font-weight: 500;
  color: var(--purple-heart);
  font-size: var(--font-size-xl);
`;

const FlexRow = styled.div`
  height: 280px;
  margin-top: 56px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 602px;
`;

const FlexCol = styled.div`
  width: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 280px;
`;

const Base = styled.div`
  width: 208px;
  height: 208px;
  background-color: var(--white);
  border-radius: 5px;
  border: 1px solid var(--radical-red);
`;

const BraianMendes = styled.div`
  ${RubikNormalSasquatchSocks14px}
  min-height: 19px;
  margin-top: 24px;
  margin-left: 13.63px;
  min-width: 122px;
  text-align: center;
  letter-spacing: 0.88px;
  line-height: 14px;
  white-space: nowrap;
`;

const CEOBraian = styled.div`
  ${RubikNormalWhite14px}
  min-height: 19px;
  margin-top: 10px;
  margin-left: 12px;
  min-width: 30px;
  text-align: center;
  letter-spacing: 0.88px;
  line-height: 14px;
  white-space: nowrap;
`;

const FlexCol1 = styled.div`
  width: 208px;
  margin-left: 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 280px;
`;

const Ju = styled.img`
  width: 208px;
  height: 208px;
  border-radius: 5px;
  object-fit: cover;
`;

const Juliana = styled.div`
  ${RubikNormalSasquatchSocks14px}
  min-height: 19px;
  margin-top: 24px;
  margin-right: 8.37px;
  min-width: 146px;
  text-align: center;
  letter-spacing: 0.88px;
  line-height: 14px;
  white-space: nowrap;
`;

const CEOJu = styled.div`
  ${RubikNormalWhite14px}
  min-height: 19px;
  margin-top: 10px;
  margin-right: 10px;
  min-width: 106px;
  text-align: center;
  letter-spacing: 0.88px;
  line-height: 14px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  height: 52px;
  margin-top: 56px;
  margin-right: 2px;
  display: flex;
  padding: 13.5px 42.2px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 175px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Label = styled.div`
  min-height: 21px;
  min-width: 88px;
  font-family: var(--font-family-rubik);
  font-weight: 800;
  color: var(--white);
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default QuemSomosAgrupamento;

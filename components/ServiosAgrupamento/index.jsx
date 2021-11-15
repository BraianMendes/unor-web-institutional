import React from "react";
import styled from "styled-components";
import {
  RalewayNormalWhite15px,
  RalewaySemiBoldRadicalRed20px,
} from "../../styledMixins";

function ServiosAgrupamento(props) {
  const {
    text6,
    text7,
    linha2,
    landingPage,
    text8,
    linha22,
    identidadeVisual,
    text9,
    linha23,
  } = props;

  return (
    <ServiosAgrupamento1>
      <DesenvolvimentosDeSites>
        <Text6>{text6}</Text6>
        <Text7>{text7}</Text7>
        <Linha2 src={linha2} />
      </DesenvolvimentosDeSites>
      <OverlapGroup5>
        <MarketingDigital>
          <LandingPage>{landingPage}</LandingPage>
          <Text8>{text8}</Text8>
          <Linha21 src={linha22} />
        </MarketingDigital>
        <ECommerce>
          <IdentidadeVisual>{identidadeVisual}</IdentidadeVisual>
          <Text9>{text9}</Text9>
          <Linha22 src={linha23} />
        </ECommerce>
      </OverlapGroup5>
    </ServiosAgrupamento1>
  );
}

const ServiosAgrupamento1 = styled.div`
  position: absolute;
  height: 150px;
  top: 1597px;
  left: 69px;
  display: flex;
  align-items: flex-end;
  min-width: 1144px;
  justify-content: center;

  @media screen and (max-width: 2560px) {
    left: 0;
    width: 100vw;
  }
`;

const DesenvolvimentosDeSites = styled.div`
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 148px;
`;

const Text6 = styled.div`
  ${RalewaySemiBoldRadicalRed20px}
  margin-top: -4px;
  margin-bottom: -5px;
  min-height: 26px;
  margin-left: 2px;
  min-width: 248px;
  letter-spacing: 0.1px;
  line-height: 31px;
  white-space: nowrap;
`;

const Text7 = styled.p`
  width: 264px;
  height: 63px;
  margin-top: 20px;
  margin-right: 23.34px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--white);
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.07px;
  line-height: 23px;
`;

const Linha2 = styled.img`
  width: 376px;
  height: 3px;
  margin-top: 41px;
  object-fit: cover;
`;

const OverlapGroup5 = styled.div`
  width: 767px;
  height: 150px;
  position: relative;
`;

const MarketingDigital = styled.div`
  position: absolute;
  width: 377px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150px;
`;

const LandingPage = styled.div`
  ${RalewaySemiBoldRadicalRed20px}
  margin-top: -4px;
  margin-bottom: -5px;
  min-height: 26px;
  margin-left: 2px;
  min-width: 133px;
  letter-spacing: 0.1px;
  line-height: 31px;
  white-space: nowrap;
`;

const Text8 = styled.p`
  ${RalewayNormalWhite15px}
  width: 319px;
  height: 99px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  letter-spacing: 0.07px;
  line-height: 27px;
`;

const Linha21 = styled.img`
  width: 377px;
  height: 3px;
  margin-top: 6px;
  object-fit: cover;
`;

const ECommerce = styled.div`
  position: absolute;
  width: 390px;
  top: 3px;
  left: 377px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 146px;
`;

const IdentidadeVisual = styled.div`
  ${RalewaySemiBoldRadicalRed20px}
  margin-top: -4px;
  margin-bottom: -5px;
  min-height: 26px;
  margin-left: 2px;
  min-width: 168px;
  letter-spacing: 0.1px;
  line-height: 31px;
  white-space: nowrap;
`;

const Text9 = styled.p`
  ${RalewayNormalWhite15px}
  width: 288px;
  height: 74px;
  margin-top: 18px;
  margin-left: 3px;
  text-align: center;
  letter-spacing: 0.07px;
  line-height: 27px;
`;

const Linha22 = styled.img`
  width: 390px;
  height: 3px;
  margin-top: 31px;
  object-fit: cover;
`;

export default ServiosAgrupamento;

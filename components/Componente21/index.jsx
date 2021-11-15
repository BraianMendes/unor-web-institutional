import React from "react";
import styled from "styled-components";
import { RubikBoldRadicalRed37px2 } from "../../styledMixins";


function Componente21(props) {
  const {
    spanText,
    spanText2,
    icon,
    text23,
    text24,
    landingPage,
    text21,
    caminho445,
    caminho446,
    caminho447,
    caminho448,
    caminho449,
    identidadeVisual,
    text22,
    caminho442,
    caminho443,
    linha10,
    linha11,
    linha12,
    linha13,
    linha14,
    linha15,
    linha16,
    linha17,
    caminho444,
  } = props;

  return (
    <Componente211>
      <NOSSOSSERVIOS>
        <span className="rubik-bold-white-37px">{spanText}</span>
        <span className="rubik-bold-radical-red-37px">{spanText2}</span>
      </NOSSOSSERVIOS>
      <Grupo91>
        <DesenvolvimentoDeSites>
          <Icon style={{ backgroundImage: `url(${icon})` }}></Icon>
          <Text23>{text23}</Text23>
          <Text24>{text24}</Text24>
        </DesenvolvimentoDeSites>
        <ECommerce>
          <OverlapGroup1>
            <Retngulo105></Retngulo105>
            <LandingPage>{landingPage}</LandingPage>
            <Text21>{text21}</Text21>
            <Icon1>
              <OverlapGroup>
                <Caminho445 src={caminho445} />
                <Caminho446 src={caminho446} />
                <Caminho447 src={caminho447} />
                <Caminho448 src={caminho448} />
                <Caminho449 src={caminho449} />
              </OverlapGroup>
              <FlexRow>
                <Elipse89></Elipse89>
                <Elipse90></Elipse90>
              </FlexRow>
            </Icon1>
          </OverlapGroup1>
        </ECommerce>
        <ECommerce>
          <OverlapGroup1>
            <Retngulo105></Retngulo105>
            <IdentidadeVisual>{identidadeVisual}</IdentidadeVisual>
            <Text22>{text22}</Text22>
            <OverlapGroup2>
              <Caminho442 src={caminho442} />
              <Caminho443 src={caminho443} />
              <Linha10 src={linha10} />
              <Linha11 src={linha11} />
              <Linha12 src={linha12} />
              <Linha13 src={linha13} />
              <Linha14 src={linha14} />
              <Elipse88></Elipse88>
              <Linha15 src={linha15} />
              <Linha16 src={linha16} />
              <Linha17 src={linha17} />
              <Caminho444 src={caminho444} />
            </OverlapGroup2>
          </OverlapGroup1>
        </ECommerce>
      </Grupo91>
    </Componente211>
  );
}

const Componente211 = styled.div`
  width: 1018px;
  height: 433px;
  margin-top: 44px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
`;

const NOSSOSSERVIOS = styled.div`
  ${RubikBoldRadicalRed37px2}
  margin-top: -3.5px;
  letter-spacing: 0;
  line-height: 51px;
  white-space: nowrap;
`;

const Grupo91 = styled.div`
  flex: 1;
  max-height: 323px;
  margin-top: 67.5px;
  display: flex;
  align-items: flex-start;
  min-width: 100%;
`;

const DesenvolvimentoDeSites = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 33.5px 26px;
  align-items: flex-start;
  min-height: 323px;
  background-color: var(--eerie-black-2);
  border-radius: 15px;
  border: 1px solid #2d2c31;
  box-shadow: 1px 1.75px 27px #6d43d2;
`;

const Icon = styled.div`
  width: 63px;
  height: 65px;
  margin-top: 6px;
  margin-left: 14.84px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Text23 = styled.div`
  min-height: 48px;
  margin-top: 23px;
  margin-left: 11px;
  font-family: var(--font-family-rubik);
  font-weight: 500;
  color: var(--seashell);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Text24 = styled.div`
  width: 217px;
  min-height: 99px;
  align-self: flex-end;
  margin-top: 16px;
  font-family: var(--font-family-rubik);
  font-weight: 300;
  color: var(--seashell);
  font-size: var(--font-size-xs);
  letter-spacing: 0;
  line-height: 25px;
`;

const ECommerce = styled.div`
  margin-left: 87px;
  display: flex;
  align-items: flex-start;
  min-width: 282px;
`;

const OverlapGroup1 = styled.div`
  width: 282px;
  height: 323px;
  position: relative;
  border-radius: 15px;
`;

const Retngulo105 = styled.div`
  position: absolute;
  width: 282px;
  height: 323px;
  top: 0;
  left: 0;
  background-color: var(--eerie-black-2);
  border-radius: 15px;
  box-shadow: 0px 3px 27px #6c42d1;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const LandingPage = styled.div`
  position: absolute;
  top: 128px;
  left: 38px;
  font-family: var(--font-family-rubik);
  font-weight: 500;
  color: var(--concrete);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Text21 = styled.div`
  position: absolute;
  width: 217px;
  top: 174px;
  left: 34px;
  font-family: var(--font-family-rubik);
  font-weight: 300;
  color: var(--concrete);
  font-size: var(--font-size-xs);
  letter-spacing: 0;
  line-height: 25px;
`;

const Icon1 = styled.div`
  position: absolute;
  width: 64px;
  top: 43px;
  left: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 62px;
`;

const OverlapGroup = styled.div`
  width: 65px;
  height: 54px;
  position: relative;
  margin-top: -2px;
  margin-right: 0.21px;
`;

const Caminho445 = styled.img`
  position: absolute;
  width: 65px;
  height: 42px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Caminho446 = styled.img`
  position: absolute;
  width: 51px;
  height: 3px;
  top: 12px;
  left: 0;
  object-fit: cover;
`;

const Caminho447 = styled.img`
  position: absolute;
  width: 37px;
  height: 15px;
  top: 39px;
  left: 13px;
  object-fit: cover;
`;

const Caminho448 = styled.img`
  position: absolute;
  width: 19px;
  height: 11px;
  top: 5px;
  left: 9px;
  object-fit: cover;
`;

const Caminho449 = styled.img`
  position: absolute;
  width: 19px;
  height: 11px;
  top: 5px;
  left: 25px;
  object-fit: cover;
`;

const FlexRow = styled.div`
  margin-top: 2px;
  margin-right: 4.07px;
  display: flex;
  align-items: flex-start;
  min-width: 29px;
`;

const Elipse89 = styled.div`
  width: 7px;
  height: 8px;
  background-color: var(--purple-heart-4);
  border-radius: 3.5px/4px;
`;

const Elipse90 = styled.div`
  width: 8px;
  height: 8px;
  margin-left: 14px;
  background-color: var(--purple-heart-4);
  border-radius: 4px;
`;

const IdentidadeVisual = styled.div`
  position: absolute;
  top: 128px;
  left: 38px;
  font-family: var(--font-family-rubik);
  font-weight: 500;
  color: var(--bon-jour);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Text22 = styled.div`
  position: absolute;
  width: 217px;
  top: 170px;
  left: 38px;
  font-family: var(--font-family-rubik);
  font-weight: 300;
  color: var(--bon-jour);
  font-size: var(--font-size-xs);
  letter-spacing: 0;
  line-height: 25px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 57px;
  height: 62px;
  top: 41px;
  left: 47px;
`;

const Caminho442 = styled.img`
  position: absolute;
  width: 21px;
  height: 58px;
  top: 3px;
  left: 0;
  object-fit: cover;
`;

const Caminho443 = styled.img`
  position: absolute;
  width: 0;
  height: 0;
  top: 16px;
  left: 5px;
  object-fit: cover;
`;

const Linha10 = styled.img`
  position: absolute;
  width: 0;
  height: 0;
  top: 16px;
  left: 4px;
  object-fit: cover;
`;

const Linha11 = styled.img`
  position: absolute;
  width: 0;
  height: 0;
  top: 16px;
  left: 17px;
  object-fit: cover;
`;

const Linha12 = styled.img`
  position: absolute;
  width: 20px;
  height: 3px;
  top: 14px;
  left: 0;
  object-fit: cover;
`;

const Linha13 = styled.img`
  position: absolute;
  width: 20px;
  height: 3px;
  top: 25px;
  left: 0;
  object-fit: cover;
`;

const Linha14 = styled.img`
  position: absolute;
  width: 20px;
  height: 3px;
  top: 37px;
  left: 0;
  object-fit: cover;
`;

const Elipse88 = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  top: 49px;
  left: 7px;
  background-color: var(--radical-red);
  border-radius: 2.5px;
`;

const Linha15 = styled.img`
  position: absolute;
  width: 21px;
  height: 14px;
  top: 0;
  left: 22px;
  object-fit: cover;
`;

const Linha16 = styled.img`
  position: absolute;
  width: 25px;
  height: 45px;
  top: 12px;
  left: 18px;
  object-fit: cover;
`;

const Linha17 = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 15px;
  left: 43px;
  object-fit: cover;
`;

const Caminho444 = styled.img`
  position: absolute;
  width: 39px;
  height: 33px;
  top: 26px;
  left: 18px;
  object-fit: cover;
`;

export default Componente21;

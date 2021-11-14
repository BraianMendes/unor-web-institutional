import React from "react";
import Design from "../Design";
import styled from "styled-components";
import { OpensansNormalWhite15px } from "../../styledMixins";

function FaixaRoxaAgrupamento(props) {
  const {
    bg,
    shadow,
    siteIcon,
    text10,
    notbook,
    designProps,
    design2Props,
    design3Props,
  } = props;

  return (
    <FaixaRoxaAgrupamento1>
      <OverlapGroup6>
        <OverlapGroup1>
          <OverlapGroup>
            <ComputerMockup>
              <Shadow src={shadow} />
            </ComputerMockup>
          </OverlapGroup>
          <StyledDesignDiv>
            <Website>
              <SiteIcon src={siteIcon} />
              <Text10>{text10}</Text10>
            </Website>
            <Design
              designIcon={designProps.designIcon}
              designEIlustrao={designProps.designEIlustrao}
            />
            <Design
              designIcon={design2Props.designIcon}
              designEIlustrao={design2Props.designEIlustrao}
              className={design2Props.className}
            />
            <Design
              designIcon={design3Props.designIcon}
              designEIlustrao={design3Props.designEIlustrao}
              className={design3Props.className}
            />
          </StyledDesignDiv>
        </OverlapGroup1>
        <Notbook src={notbook} />
      </OverlapGroup6>
      <Bg src={bg} />
    </FaixaRoxaAgrupamento1>
  );
}

const FaixaRoxaAgrupamento1 = styled.div`
  position: absolute;
  height: 938px;
  top: 220px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;

  @media screen and (max-width: 2560px) {
    left: 0;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;

const OverlapGroup6 = styled.div`
  width: 1280px;
  height: 938px;
  position: relative;
  margin-top: 0;
  z-index: 10;

  @media screen and (max-width: 2560px) {
    /* width: 100%; */
  }
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1280px;
  height: 768px;
  top: 170px;
  left: 0;
  display: flex;

  @media screen and (max-width: 2560px) {
    left: 0;
    width: 100%;
  }
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1280px;
  height: 768px;
  top: 0;
  left: 0;

  @media screen and (max-width: 2560px) {
    width: 100%;
  }
`;

const Bg = styled.img`
  position: absolute;
  width: 1280px;
  height: 481px;
  top: 440px;
  left: 0;
  object-fit: cover;
  z-index: 0;

  @media screen and (max-width: 2560px) {
    width: 100%;
  }
`;

const ComputerMockup = styled.div`
  position: absolute;
  width: 704px;
  height: 396px;
  top: 89px;
  left: 535px;
  display: flex;
  transform: rotate(-16deg);
`;

const Shadow = styled.img`
  margin-top: -89.3px;
  margin-left: -40.9px;
  margin-right: -40.9px;
  flex: 1;
  margin-bottom: -89.3px;
  width: 785.67578125px;
  transform: rotate(16deg);
  object-fit: cover;
`;

const Website = styled.div`
  position: absolute;
  width: 136px;
  top: 584px;
  left: 237px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 84px;
`;

const SiteIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 2.72px;
  object-fit: cover;
`;

const Text10 = styled.div`
  ${OpensansNormalWhite15px}
  width: 136px;
  height: 112px;
  margin-top: 7px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
`;

const Notbook = styled.img`
  position: absolute;
  width: 708px;
  height: 703px;
  top: 0;
  left: 547px;
  object-fit: cover;
`;

const StyledDesignDiv = styled.div`
  width: 100%;
  padding-top: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  div {
    left: 0;
    position: unset;
  }
`;

export default FaixaRoxaAgrupamento;

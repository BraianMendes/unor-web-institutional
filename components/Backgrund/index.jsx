import React from "react";
import styled from "styled-components";

function Backgrund(props) {
  const {
    tintaAzul,
    tintaVermelha1,
    tintaVermelha2,
    elipse3,
    elipse2,
    elipse1,
  } = props;

  return (
    <Backgrund1>
      <OverlapGroup1>
        <TintaAzul src={tintaAzul} />
        <TintaVermelha1 src={tintaVermelha1} />
      </OverlapGroup1>
      <TintaVermelha2 src={tintaVermelha2} />
      <OverlapGroup>
        <Elipse3 src={elipse3} />
        <Elipse2 src={elipse2} />
        <Elipse1 src={elipse1} />
      </OverlapGroup>
    </Backgrund1>
  );
}

const Backgrund1 = styled.div`
  position: absolute;
  width: 1280px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2820px;

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const OverlapGroup1 = styled.div`
  width: 1280px;
  height: 677px;
  position: relative;

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const TintaAzul = styled.img`
  position: absolute;
  width: 1280px;
  height: 652px;
  top: 0;
  left: 0;
  object-fit: cover;

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const TintaVermelha1 = styled.img`
  position: absolute;
  width: 1280px;
  height: 677px;
  top: 0;
  left: 0;
  object-fit: cover;

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const TintaVermelha2 = styled.img`
  width: 1280px;
  height: 677px;
  margin-top: 257px;
  object-fit: cover;

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const OverlapGroup = styled.div`
  width: 1421px;
  height: 1404px;
  position: relative;
  margin-top: 82px;
  margin-left: -50.99px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 2560px) {
    width: 100vw;
  }
`;

const Elipse3 = styled.img`
  position: absolute;
  width: 1132px;
  height: 918px;
  top: 0;
  left: 289px;
  border-radius: 310.18px/159.24px;
  mix-blend-mode: screen;
  object-fit: cover;
`;

const Elipse2 = styled.img`
  position: absolute;
  width: 1035px;
  height: 971px;
  top: 42px;
  left: 0;
  border-radius: 205.68px/124.24px;
  mix-blend-mode: screen;
  object-fit: cover;
`;

const Elipse1 = styled.img`
  position: absolute;
  width: 1035px;
  height: 971px;
  top: 433px;
  left: 112px;
  border-radius: 205.68px/124.24px;
  mix-blend-mode: screen;
  object-fit: cover;
`;

export default Backgrund;

import React from "react";
import styled from "styled-components";


function BACKGROUND(props) {
  const { unor1221222Ativo92X, unor12122Ativo72X, unor1221222Ativo92X2 } = props;

  return (
    <BACKGROUND1>
      <OverlapGroup>
        <Unor1221222Ativo92x src={unor1221222Ativo92X} />
        <Unor12122Ativo72x src={unor12122Ativo72X} />
        <Unor1221222Ativo92x1 src={unor1221222Ativo92X2} />
      </OverlapGroup>
    </BACKGROUND1>
  );
}

const BACKGROUND1 = styled.div`
  position: absolute;
  height: 1478px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const OverlapGroup = styled.div`
  width: 1280px;
  height: 1478px;
  position: relative;
`;

const Unor1221222Ativo92x = styled.img`
  position: absolute;
  width: 771px;
  height: 612px;
  top: 866px;
  left: 0;
  object-fit: cover;
`;

const Unor12122Ativo72x = styled.img`
  position: absolute;
  width: 1280px;
  height: 652px;
  top: 462px;
  left: 0;
  object-fit: cover;
`;

const Unor1221222Ativo92x1 = styled.img`
  position: absolute;
  width: 207px;
  height: 612px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export default BACKGROUND;

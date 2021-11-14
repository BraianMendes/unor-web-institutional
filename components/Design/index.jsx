import React from "react";
import styled from "styled-components";
import { OpensansNormalWhite15px } from "../../styledMixins";

function Design(props) {
  const { designIcon, designEIlustrao, className } = props;

  return (
    <Design1 className={`design ${className || ""}`}>
      <DesignIcon className="design-icon" src={designIcon} />
      <DesignEIlustrao className="design-e-ilustrao">
        {designEIlustrao}
      </DesignEIlustrao>
    </Design1>
  );
}

const Design1 = styled.div`
  position: absolute;
  width: 167px;
  top: 584px;
  left: 446px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 84px;

  /* &.design.internet-marketing {
    left: 685px;
    min-height: 83px;
  }

  &.design.app {
    left: 926px;
    min-height: 109px;
  } */
`;

const DesignIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 2px;
  object-fit: cover;
`;

const DesignEIlustrao = styled.div`
  ${OpensansNormalWhite15px}
  width: 167px;
  height: 28px;
  margin-top: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const MarketingIcon = styled.img`
  .design.internet-marketing & {
    margin-right: 2.04px;
  }
`;

const MarketingDigital = styled.div`
  ${OpensansNormalWhite15px}

  .design.internet-marketing  & {
    height: 27px;
  }
`;

const MobileIcon = styled.img`
  .design.app & {
    margin-right: 2.4px;
  }
`;

const Text11 = styled.p`
  ${OpensansNormalWhite15px}

  .design.app  & {
    height: 53px;
    white-space: unset;
  }
`;

export default Design;

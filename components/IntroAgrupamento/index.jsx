import React from "react";
import styled from "styled-components";


function IntroAgrupamento(props) {
  const { spanText, spanText2, spanText3, spanText4, text14, text15, caminho440 } = props;

  return (
    <IntroAgrupamento1>
      <Text13>
        <span className="rubik-bold-white-47px">{spanText}</span>
        <Span13>{spanText2}</Span13>
        <span className="rubik-bold-white-47px">{spanText3}</span>
        <span>{spanText4}</span>
      </Text13>
      <Text14>{text14}</Text14>
      <Boto1>
        <Text15>{text15}</Text15>
      </Boto1>
      <Caminho440 src={caminho440} />
    </IntroAgrupamento1>
  );
}

const IntroAgrupamento1 = styled.div`
  position: absolute;
  width: 1132px;
  top: 130px;
  left: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 503px;

  @media screen and (max-width: 2560px) {
    left: 5%;
    /* width: 100vw; */
  }
`;

const Text13 = styled.div`
  margin-top: -4px;
  min-height: 188px;
  margin-left: 67px;
  font-family: var(--font-family-rubik);
  color: var(--purple-heart-2);
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
  line-height: 65px;
  white-space: nowrap;
  font-weight: 700;
`;

const Span13 = styled.span`
  color: var(--radical-red);
`;

const Text14 = styled.div`
  min-height: 50px;
  margin-top: 38px;
  margin-left: 69px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xs);
  letter-spacing: 0.07px;
  line-height: 27px;
  white-space: nowrap;
`;

const Boto1 = styled.div`
  height: 78px;
  margin-top: 62px;
  margin-left: 67px;
  display: flex;
  padding: 24.5px 75px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 464px;
  background-color: #8b5ef9;
  border-radius: 39px;
`;

const Text15 = styled.div`
  min-height: 27px;
  min-width: 312px;
  font-family: var(--font-family-rubik);
  font-weight: 600;
  color: var(--white);
  font-size: 21px;
  text-align: center;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const Caminho440 = styled.img`
  width: 1132px;
  height: 0;
  margin-top: 91px;
  object-fit: cover;
`;

export default IntroAgrupamento;

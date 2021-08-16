import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          UNOR
        </SectionTitle>
        <SectionText>
          Somos uma agência de transformação digital para pequenos e médios
          negócios brasileiros. Desenvolvemos soluções em tecnologia
          da informação e marketing digital para sua empresa.
        </SectionText>
        <Button onClick={props.handleClick}>Contratar</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

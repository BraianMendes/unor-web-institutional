import React from "react";
import styled from "styled-components";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { projects } from "../../constants/constants";

const ButtonCTA = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem !important;
`;

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projetos</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            {/* <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div> */}
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList> */}
            <ButtonCTA>
              <Button alt>Contratar</Button>
            </ButtonCTA>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;

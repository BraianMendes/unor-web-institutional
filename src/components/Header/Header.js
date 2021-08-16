import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import Button from "../../styles/GlobalComponents/Button";

import {
  Container,
  Insidecontainer,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const ButtonCTA = styled(Button)`
  margin: 0 !important;
`;

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      if (!sticky) {
        setSticky(true);
      }
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className={sticky ? "stickyNavbar" : ""}>
      <Insidecontainer>
        <Div1>
          <Link href="/">
            <a
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <DiCssdeck size="3rem" /> <span>UNOR</span>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href="#projects">
              <NavLink>Projetos</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <NavLink>Sobre</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink>Tecnologias</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink>Parceiros</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink>Clientes</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          {/* <SocialIcons href="https://google.com">
            <AiFillGithub size="3rem" />
          </SocialIcons> */}
          {/* <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
          <ButtonCTA alt>Contratar</ButtonCTA>
        </Div3>
      </Insidecontainer>
    </Container>
  );
};

export default Header;

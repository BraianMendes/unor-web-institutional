import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Insidecontainer,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

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
            <Link href="#tech">
              <NavLink>Tecnologias</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <NavLink>Sobre</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href="https://google.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </Div3>
      </Insidecontainer>
    </Container>
  );
};

export default Header;

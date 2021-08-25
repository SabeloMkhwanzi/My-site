import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { FaStripeS } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
   <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <FaStripeS size="3rem" /> <Span >Sabelo</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Tech-Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="#"> 
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;


// https://github.com/SabeloMkhwanzi
// https://twitter.com/SabeloMkhwanaz
// https://www.linkedin.com/in/sabelo-mkhwanazi-54ba431b1/
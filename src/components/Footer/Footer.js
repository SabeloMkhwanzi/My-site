import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            sabelo.mailme@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Are you looking for Software Developer, you have found one</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="#">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;


// https://github.com/SabeloMkhwanzi
// https://twitter.com/SabeloMkhwanaz
// https://www.linkedin.com/in/sabelo-mkhwanazi-54ba431b1/
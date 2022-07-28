import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:+1-437-983-8289">+1-437-983-8289</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:sadegh.mahboobifar@gmail.com">sadegh.mahboobifar@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovative one project at atime</Slogan>
        </CompanyContainer>
      
      <SocialIcons href="https://github.com/Sadegh777">
        <AiFillGithub size="3rem">GitHub</AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sadegh-mahboobifar-61405a74">
        <AiFillLinkedin size="3rem">linkedin</AiFillLinkedin>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

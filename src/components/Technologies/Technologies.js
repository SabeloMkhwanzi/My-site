/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider divider />
   <SectionTitle>Skills</SectionTitle>
    <SectionText>
     These are the Technologies that I've have worked with as Software Developer.
      From the front-end to Back-end  
    </SectionText>
    <List>
      <ListItem>
        <picture>
          {/* <DiReact size='3rem' /> */}
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            JavaScript - Node.js <br/>
            Solidity
          </ListParagraph>
        </ListContainer>
      </ListItem>
        <ListItem>
        <picture>
          {/* <DiReact size='3rem' /> */}
        </picture>
        <ListContainer>
          <ListTitle>Languages Frameworks</ListTitle>
          <ListParagraph>
            React.js <br/>
            Truffle
          </ListParagraph>
        </ListContainer>
      </ListItem>
          <ListItem>
        <picture>
          {/* <DiReact size='3rem' /> */}
        </picture>
        <ListContainer>
          <ListTitle>API</ListTitle>
          <ListParagraph>
            Socket.io
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
 </Section>
);

export default Technologies;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { DiReact, DiCssTricks, DiJavascript } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider divider />
   <SectionTitle>Tools</SectionTitle>
    <SectionText>
     These are Tools I've been worked From the front-end to Back-end.  
    </SectionText>
    <List>
      <ListItem>
        <picture>
           <DiJavascript size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            JavaScript<br />
            TypeScript<br />
            Solidity
          </ListParagraph>
        </ListContainer>
      </ListItem>
        <ListItem>
        <picture>
           <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End Frameworks</ListTitle>
          <ListParagraph>
            React.js <br/>
            Next.js <br/>
            Hardhat <br/>
            Truffle
          </ListParagraph>
        </ListContainer>
      </ListItem>
          <ListItem>
        <picture>
          <DiCssTricks size='3rem' /> 
        </picture>
        <ListContainer>
          <ListTitle>UI Tools</ListTitle>
          <ListParagraph>
            Chakra-UI <br />
            Tailwindcss <br />
            Material-UI <br />
            Ant Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
 </Section>
);

export default Technologies;

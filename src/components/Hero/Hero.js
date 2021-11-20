/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
   <SectionTitle main center>
    Hello <br />
    I'm Sabelo Mkhwanazi
   </SectionTitle>
   <SectionText>
     Passionate, Purpose driven skilled Software Developer offering to contribute my Software & Blockchain development expertise to your project. I believe your project currently serves to bring solutions and need a dedicated Developer to your project with responsibility, accountability, and exceptional service etiquette. 
   </SectionText>
   <Button onClick={() => window.location = "https://github.com/SabeloMkhwanzi"}> learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;
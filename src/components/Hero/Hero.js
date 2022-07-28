import React from 'react';

import { Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle>
      Welcometo  <br />
      My Personal Portfolio<br />
      My Name Is Sdegh And Doing Developing Services <br />
      </SectionTitle>
    </LeftSection>
    <SectionText>
      I'm a fullStack developer with solid understanding of coding and programing languages, UI & UX design, project management and process improvements.
    </SectionText>
    <Button onClick={() => window.location = 'https://www.linkedin.com/in/sadegh-mahboobifar-61405a74'} >Learn More</Button>
  </Section>
);

export default Hero;
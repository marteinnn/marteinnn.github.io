import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Content = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: var(--background-color);
  color: var(--text-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, rgba(74, 144, 226, 0.1) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(74, 144, 226, 0.1) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(74, 144, 226, 0.1) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(74, 144, 226, 0.1) 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    opacity: 0.7;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const Section = styled.div`
  margin-bottom: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    margin-bottom: 100px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--accent-color);

  h2 {
    margin: 0;
    margin-left: 10px;
    color: var(--accent-color);
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    margin: 0;
    color: var(--accent-color);
  }

  span {
    color: var(--text-color);
    opacity: 0.7;
    font-size: 0.9em;
  }
`;

const ExperienceDetails = styled.div`
  color: var(--text-color);
  opacity: 0.9;
  line-height: 1.5;
`;

const About = () => {
  return (
    <Content>
      <Container>
        <Section>
          <SectionHeader>
            <FontAwesomeIcon icon={faGraduationCap} size="2x" />
            <h2>Education</h2>
          </SectionHeader>
          
          <ExperienceItem>
            <ExperienceHeader>
              <h3>Háskólinn í Reykjavík</h3>
              <span>2022 - 2025</span>
            </ExperienceHeader>
            <ExperienceDetails>
              Bachelor of Science degree in Computer Science
            </ExperienceDetails>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <h3>ITU Exchange</h3>
              <span>2024</span>
            </ExperienceHeader>
            <ExperienceDetails>
              Exchange semester at IT University of Copenhagen
            </ExperienceDetails>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <h3>Menntaskólinn í hamrahlíð</h3>
              <span>2017 - 2021</span>
            </ExperienceHeader>
            <ExperienceDetails>
              Stúdentspróf
            </ExperienceDetails>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionHeader>
            <FontAwesomeIcon icon={faBriefcase} size="2x" />
            <h2>Work Experience</h2>
          </SectionHeader>
          
          <ExperienceItem>
            <ExperienceHeader>
              <h3>Intern at Central Bank of Iceland</h3>
              <span>2025</span>
            </ExperienceHeader>
            <ExperienceDetails>
              Worked on a project in the Data and Transformation department.
            </ExperienceDetails>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <h3>Final project in collaboration with Arion Bank</h3>
              <span>2025</span>
            </ExperienceHeader>
            <ExperienceDetails>
              A research project about predicting churn in Arion Bank's services.
            </ExperienceDetails>
          </ExperienceItem>
        </Section>
      </Container>
    </Content>
  );
};

export default About; 
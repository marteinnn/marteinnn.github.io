import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Content = styled.div`
  padding: 20px;
  height: 100vh;
  background: transparent;
  color: var(--text-color);
  position: relative;
  overflow: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
  height: calc(100vh - 80px); /* Adjusted to account for top navigation */
  overflow-y: scroll;
  padding-bottom: 100px; /* Add extra padding at the bottom for better scrolling */

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--hover-color);
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--accent-color) transparent;
`;

const Section = styled.div`
  margin-bottom: 60px;
  background: var(--secondary-color);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border: 5px solid var(--accent-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

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
  background: var(--hover-color);
  border-radius: 10px;
  border: 3px solid var(--border-color);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #eeeeee;
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
              <h3>Menntaskólinn við Hamrahlíð</h3>
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
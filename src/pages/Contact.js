import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Content = styled.div`
  padding: 0 20px;
  min-height: calc(100vh - 200px);
  background: transparent;
  color: var(--text-color);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const ContactSection = styled.div`
  background: var(--secondary-color);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border: 5px solid var(--accent-color);
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AnimatedTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding: 0 20px;
`;

const Letter = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--text-color);
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.8)'};
  transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px) scale(1.1);
    color: var(--accent-color);
  }
`;

const ContactItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  padding: 5px;
  background: var(--hover-color);
  border-radius: 10px;
  border: 3px solid var(--border-color);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #eeeeee;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: var(--text-color);
  justify-self: center;
`;

const InfoContainer = styled.div`
  text-align: left;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--text-color);
`;

const Value = styled.div`
  color: var(--text-light);
`;

const Contact = () => {
  const text = "CONTACT ME!";
  const [visibleLetters, setVisibleLetters] = useState(new Set());
  
  useEffect(() => {
    const letters = text.split('');
    let currentIndex = 0;
    
    const showLetters = () => {
      if (currentIndex >= letters.length) return;
      
      setVisibleLetters(prev => new Set([...prev, currentIndex]));
      currentIndex++;
      
      if (currentIndex < letters.length) {
        setTimeout(showLetters, 100); // Show a new letter every 100ms
      }
    };
    
    setTimeout(showLetters, 300); // Start after 300ms
  }, []);

  return (
    <Content>
      <Container>
        <AnimatedTitle>
          {text.split('').map((letter, index) => (
            <Letter 
              key={index}
              visible={visibleLetters.has(index)}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </Letter>
          ))}
        </AnimatedTitle>
        <ContactSection>
          <ContactItem>
            <Icon icon={faEnvelope} />
            <InfoContainer>
              <Label>Email</Label>
              <Value>hmarteinn@gmail.com</Value>
            </InfoContainer>
          </ContactItem>
          <ContactItem>
            <Icon icon={faPhone} />
            <InfoContainer>
              <Label>Phone</Label>
              <Value>+354 6900066</Value>
            </InfoContainer>
          </ContactItem>
          <ContactItem>
            <Icon icon={faMapMarkerAlt} />
            <InfoContainer>
              <Label>Location</Label>
              <Value>Reykjavík, Iceland</Value>
            </InfoContainer>
          </ContactItem>
        </ContactSection>
      </Container>
    </Content>
  );
};

export default Contact; 
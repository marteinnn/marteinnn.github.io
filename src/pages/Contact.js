import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const ContactSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
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

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  border-radius: 50%;
  margin-right: 15px;
  color: white;
`;

const ContactInfo = styled.div`
  h3 {
    margin: 0;
    color: var(--accent-color);
    font-size: 1.1em;
  }

  p {
    margin: 5px 0 0;
    opacity: 0.9;
  }
`;

const TextBox = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 20px;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.9;
  font-size: 1.1em;
`;

const Contact = () => {
  return (
    <Content>
      <Container>
        <ContactSection>
          <ContactInfoSection>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </IconWrapper>
              <ContactInfo>
                <h3>Email</h3>
                <p>hmarteinn@gmail.com</p>
              </ContactInfo>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </IconWrapper>
              <ContactInfo>
                <h3>Phone</h3>
                <p>+354 6900066</p>
              </ContactInfo>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              </IconWrapper>
              <ContactInfo>
                <h3>Location</h3>
                <p>Reykjavík, Iceland</p>
              </ContactInfo>
            </ContactItem>
          </ContactInfoSection>

          <TextBox>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Dont hesitate to contact me if you have any questions or want to work together!
          </TextBox>
        </ContactSection>
      </Container>
    </Content>
  );
};

export default Contact; 
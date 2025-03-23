import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Content = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 120px;
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: start;
  margin: 60px auto;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    margin: 20px auto;
    margin-bottom: 40px;
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 0 8px;
    gap: 15px;
    margin-bottom: 60px;
  }
`;

const AboutMe = styled.section`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background: linear-gradient(135deg, var(--secondary-color) 0%, #f8f8f8 100%);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 3px solid var(--accent-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: auto;
    margin-bottom: 20px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0);
    background-size: 20px 20px;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    &:before {
      transform: translateX(100%);
    }
  }
`;

const ProfilePhoto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid var(--accent-color);
  background-color: var(--background-color);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Description = styled.p`
  max-width: 600px;
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
`;

const Sidebar = styled.div`
  grid-column: 5 / 7;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const Card = styled.div`
  background: linear-gradient(135deg, var(--secondary-color) 0%, #f8f8f8 100%);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 3px solid var(--accent-color);
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0);
    background-size: 20px 20px;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    &:before {
      transform: translateX(100%);
    }
  }
`;

const Skills = styled(Card)`
  grid-column: 4 / 7;
  grid-row: 1 / 2;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 15px;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 8px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }
  }

  &:hover h2:after {
    width: 60px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 5px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

const SkillTag = styled.span`
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  font-size: 12px;
  color: #555;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:before {
      transform: translateX(100%);
    }
  }
`;

const Socials = styled(Card)`
  grid-column: 4 / 7;
  grid-row: 2 / 3;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    margin-bottom: 60px;
    padding: 12px;
  }

  h2 {
    margin-bottom: 15px;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 8px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
      font-size: 14px;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }
  }

  &:hover h2:after {
    width: 60px;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
    gap: 8px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    padding: 8px 10px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:before {
      transform: translateX(100%);
    }
  }

  svg {
    font-size: 1rem;
  }
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--accent-color);
  color: var(--background-color);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  z-index: 1001;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const MatrixRain = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.23;
  pointer-events: none;
`;

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = "MARTEINN";
    const fontSize = 18;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    document.getElementsByTagName('head')[0].appendChild(meta);

    return () => {
      document.getElementsByTagName('head')[0].removeChild(meta);
    };
  }, []);

  return (
    <Content>
      <MatrixRain ref={canvasRef} />
      <Container>
        <AboutMe>
          <ProfilePhoto src="/me.png" alt="Profile" />
          <Description>
            Hi, I'm Marteinn Hjálmarsson. A 23 year old Computer Science graduate from Reykjavík University.
            <br></br>
            <br></br>
            I like to code and learn new things.
            <br></br>
            <br></br>
            This website is a portfolio showcasing some of my skills and experiences.
            <br></br>

            

          </Description>
        </AboutMe>

        <Skills>
          <h2>Skills</h2>
          <SkillsContainer>
            <SkillTag>REACT</SkillTag>
            <SkillTag>HTML</SkillTag>
            <SkillTag>CSS</SkillTag>
            <SkillTag>JavaScript</SkillTag>
            <SkillTag>Python</SkillTag>
            <SkillTag>MLFlow</SkillTag>
            <SkillTag>SQL</SkillTag>
            <SkillTag>C++</SkillTag>
          </SkillsContainer>
        </Skills>

        <Socials>
          <h2>Socials</h2>
          <SocialsContainer>
            <SocialLink href="https://linkedin.com/in/mart12345" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/marteinnn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </SocialLink>
          </SocialsContainer>
        </Socials>
      </Container>

      <ScrollToTop 
        className={showScrollTop ? 'show' : ''} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </ScrollToTop>
    </Content>
  );
};

export default Home; 
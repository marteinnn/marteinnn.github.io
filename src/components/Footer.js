import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRandomTrack } from '../services/spotifyService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: ${props => props.isHidden ? '-80px' : '0'};
  left: 0;
  right: 0;
  background: #868686;
  padding: 8px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.isLoaded ? '1' : '0'};
  transition: all 0.5s ease-in-out;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  background: #868686;
  border: none;
  border-radius: 8px 8px 0 0;
  padding: 4px 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: #777;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const SongPlayer = styled.div`
  width: 100%;
  max-width: 1800px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
    width: 100%;
  }
`;

const SongTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 600;
  white-space: pre-line;
  min-width: 120px;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    min-width: 80px;
    font-size: 14px;
  }
`;

const PlayerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0 5px;
  }

  iframe {
    @media (max-width: 768px) {
      width: 120%;
      height: 80px;
    }
  }
`;

const Footer = () => {
  const [spotifyTrack, setSpotifyTrack] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const fetchTrack = async () => {
      const trackUri = await getRandomTrack();
      if (trackUri) {
        setSpotifyTrack(`https://open.spotify.com/embed/track/${trackUri.split(':')[2]}?utm_source=generator`);
        setTimeout(() => {
          setIsLoaded(true);
        }, 1000);
      }
    };

    fetchTrack();
  }, []);

  const toggleFooter = () => {
    setIsHidden(!isHidden);
  };

  return (
    <FooterContainer isLoaded={isLoaded} isHidden={isHidden}>
      <ToggleButton onClick={toggleFooter}>
        <FontAwesomeIcon icon={isHidden ? faChevronUp : faChevronDown} />
      </ToggleButton>
      <SongPlayer>
        <SongTitle>SONG OF{'\n'}THE DAY</SongTitle>
        <PlayerContainer>
          <iframe
            src={spotifyTrack}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </PlayerContainer>
      </SongPlayer>
    </FooterContainer>
  );
};

export default Footer; 
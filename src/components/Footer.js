import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRandomTrack } from '../services/spotifyService';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #868686;
  padding: 8px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  ${props => props.isLoaded && `
    opacity: 1;
  `}
`;

const SongPlayer = styled.div`
  width: 100%;
  max-width: 1800px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SongTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 600;
  white-space: pre-line;
  min-width: 120px;
  text-align: center;
  line-height: 1.2;
`;

const PlayerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`;

const Footer = () => {
  const [spotifyTrack, setSpotifyTrack] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTrack = async () => {
      const trackUri = await getRandomTrack();
      if (trackUri) {
        setSpotifyTrack(`https://open.spotify.com/embed/track/${trackUri.split(':')[2]}?utm_source=generator`);
        // Add a small delay before showing the footer to ensure the player is loaded
        setTimeout(() => {
          setIsLoaded(true);
        }, 1000);
      }
    };

    fetchTrack();
  }, []);

  return (
    <FooterContainer isLoaded={isLoaded}>
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
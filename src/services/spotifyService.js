const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const playlistId = process.env.REACT_APP_SPOTIFY_PLAYLIST_ID;

export const getAccessToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};

export const getRandomTrack = async () => {
  const lastFetchTime = localStorage.getItem('lastFetchTime');
  const now = new Date().getTime();

  if (!lastFetchTime || now - lastFetchTime >= 86400000) {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

    try {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=total`, {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      });
      const data = await response.json();

      if (data.error) {
        console.error('Error fetching playlist data:', data.error);
        return null;
      }

      if (data.total > 0) {
        const randomOffset = Math.floor(Math.random() * data.total);
        const trackResponse = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=1&offset=${randomOffset}`,
          {
            headers: {
              'Authorization': 'Bearer ' + accessToken
            }
          }
        );
        const trackData = await trackResponse.json();

        if (trackData.items && trackData.items.length > 0) {
          const randomTrackUri = trackData.items[0].track.uri;
          localStorage.setItem('lastTrackUri', randomTrackUri);
          localStorage.setItem('lastFetchTime', now);
          return randomTrackUri;
        }
      }
      return null;
    } catch (error) {
      console.error('Error fetching track:', error);
      return null;
    }
  } else {
    return localStorage.getItem('lastTrackUri');
  }
}; 
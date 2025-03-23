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

const getDateBasedOffset = (max) => {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash) % max;
};

export const getRandomTrack = async () => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

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
      const offset = getDateBasedOffset(data.total);
      
      const trackResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=1&offset=${offset}`,
        {
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        }
      );
      const trackData = await trackResponse.json();

      if (trackData.items && trackData.items.length > 0) {
        return trackData.items[0].track.uri;
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching track:', error);
    return null;
  }
}; 
document.addEventListener('DOMContentLoaded', function () {
    console.log('Website is loaded and ready!');

    // Add animation class to logo on index
    if (window.location.pathname.endsWith('index')) {
        const logo = document.getElementById('logo');
        logo.classList.add('animate');
    }

    // Slide up the "Song of the Day" container after 5 seconds
    setTimeout(() => {
        const songContainer = document.getElementById('song-of-the-day');
        songContainer.classList.add('show');
    }, 3000);

    setTimeout(() => {
        const toggleArrowIcon = document.querySelector('.toggle-arrow i');
        toggleArrowIcon.classList.add('rotated'); // This adds the rotation class after 3 seconds
    }, 3000);
});

const clientId = '68090f535c2f4144a2f28c1bdab06f36';
const clientSecret = 'e4e01623e5764dce91ea05d7527f1ec0';
const playlistId = '6TalKNgkhDJSr8Oi1tSMU6'; // New playlist ID



// Function to get Spotify access token
async function getAccessToken() {
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
}

// Function to get the first track of the playlist
// Function to get the first track of the playlist
// Function to get a random track from the playlist
async function getRandomTrack() {
    const lastFetchTime = localStorage.getItem('lastFetchTime');
    const now = new Date().getTime();

    // Check if 24 hours have passed or if there's no stored track
    if (!lastFetchTime || now - lastFetchTime >= 86400000) {
        const accessToken = await getAccessToken();  // Fetch a fresh access token dynamically
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=total`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        const data = await response.json();
        if (data.total > 0) {
            const randomOffset = Math.floor(Math.random() * data.total);
            const trackResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=1&offset=${randomOffset}`, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });
            const trackData = await trackResponse.json();
            if (trackData.items && trackData.items.length > 0) {
                const randomTrackUri = trackData.items[0].track.uri;
                // Store the track URI and the fetch time
                localStorage.setItem('lastTrackUri', randomTrackUri);
                localStorage.setItem('lastFetchTime', now);
                return randomTrackUri;
            }
        }
    } else {
        // Return the stored track URI if still within the 24-hour window
        return localStorage.getItem('lastTrackUri');
    }

    console.error('No tracks found or invalid data:', data);
    return null;
}




// Function to set the iframe src to the first track
async function setSpotifyPlayer() {
    const trackUri = await getRandomTrack(); // This will handle fetching a new track or returning a cached one
    if (trackUri) {
        const iframe = document.getElementById('spotify-player');
        iframe.src = `https://open.spotify.com/embed/track/${trackUri.split(':')[2]}?utm_source=generator`;
    } else {
        console.error('Failed to set player source due to missing track URI.');
    }
}




// Function to handle the toggle of the song of the day container
function togglePlayer() {
    const songContainer = document.querySelector('.song-of-the-day');
    const toggleArrow = document.querySelector('.toggle-arrow i');
    if (songContainer.classList.contains('show')) {
        songContainer.classList.remove('show');
        songContainer.classList.add('hide');
    } else {
        songContainer.classList.remove('hide');
        songContainer.classList.add('show');
    }
    toggleArrow.classList.toggle('rotated');
}



// Set the Spotify player on page load
window.onload = () => {
    setSpotifyPlayer();
    document.querySelector('.toggle-arrow').addEventListener('click', togglePlayer);
};


// Typewriter effect on first load
document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelector('.loading-dot');
    const text = document.querySelector('.loading-text');
    // Start the typewriter effect after the dot moves
    setTimeout(() => {
        dot.style.animation = "moveDot 1s forwards";
        text.style.maxWidth = "100%"; // Unfold the letters
        text.style.opacity = "2"; // Fade-in text after typing
    }, 1500); // Adjust timing to sync with the dot's movement
});




// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.querySelector('.profile-photo');

    // Trigger the funny effect after 30 seconds
    setTimeout(() => {
        profilePhoto.classList.add('funny'); // Add the funny class
        console.log('The photo is now doing something VERY funny!');

        // Optionally, display a funny message
        const funnyMessage = document.createElement('div');
        funnyMessage.textContent = "Hehe silly 😜";
        funnyMessage.style.position = 'absolute';
        funnyMessage.style.top = `${profilePhoto.offsetTop - 50}px`;
        funnyMessage.style.left = `${profilePhoto.offsetLeft}px`;
        funnyMessage.style.backgroundColor = '#ffcccb';
        funnyMessage.style.padding = '10px';
        funnyMessage.style.borderRadius = '10px';
        funnyMessage.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        funnyMessage.style.fontWeight = 'bold';
        funnyMessage.style.color = '#000';

        document.body.appendChild(funnyMessage);

        // Remove the funny message after 5 seconds
        setTimeout(() => {
            profilePhoto.classList.remove('funny');
            funnyMessage.remove();
            console.log('The funny effect has ended.');
        }, 10000); // 10 seconds
    }, 60000); // 30 seconds
});

const clientId = 'd73af951c5514d24a2224ec1be168f1e'

const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token`

const baseurl = "https://api.spotify.com/v1/artists";
const ids = "1qFp8zDvsXyCsC5dqz8X4S,"+
            "4zCH9qm4R2DADamUHMCa6O,"+
            "0aUQnP4HhUQXcurZl9GJIA,"+
            "2uocTdMBXjTsS7QmAj7src,"+
            "0oOet2f43PA68X5RxKobEy,"+
            "2IUtwMti1OiT3lkW6RubgH,"+
            "7qjJw7ZM2ekDSahLXPjIlN,"+
            "1QvyquqkuuwUzdszyoKIy4,"+
            "2wPsNCwhEGb0KvChZ5DD52,"+
            "0nMjhemqRwrboQGcs92fh2";

const url = `${baseurl}?ids=${ids}`;
const includeGroups = "album,single";

async function fetchData(token) {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await response.json();

        if (response.status == 200) {
            const artistList = document.getElementById("api-data");

            data.artists.forEach(async (artist) => {
                const artistCard = document.createElement("div");
                artistCard.classList.add("artist-card");

                const artistImage = document.createElement("img");
                artistImage.src = artist.images[0].url;

                const artistName = document.createElement("div");
                artistName.classList.add("artist-name");
                artistName.textContent = artist.name;

                const artistGenres = document.createElement("div");
                artistGenres.classList.add("artist-genres");
                artistGenres.textContent = artist.genres.join(",");

                artistCard.appendChild(artistImage);
                artistCard.appendChild(artistName);
                artistCard.appendChild(artistGenres);
                artistList.appendChild(artistCard);
            
            });
        } else {
            const dataElement = document.getElementById("api-data");
            dataElement.innerHTML = `Server Error: ${data.error.message}`;
        }
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

    function getData(){
    const token = localStorage.getItem('spotifyToken');
    if (!token) {
        window.location.href = authorizeUrl;
    } else {
        fetchData(token);
        
    }
    }

const urlParams = new URLSearchParams(window.location.hash.substr(1));
const accessToken = urlParams.get('access_token');
if (accessToken) {
    localStorage.setItem('spotifyToken', accessToken);
    window.location.hash = ''; 
}
getData()

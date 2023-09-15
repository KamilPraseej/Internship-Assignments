const token = "BQBzOmPtl5tP-0XFj81hI7XhLqsqFgapLHM9el1d5MTyOmG_SC4YBzv6AkQEMV-sCMxfe8pU16IUvIDZp3cOFk2gtPCqsj2iJJUhxRwr2LEYGif-ficVZUGBWuE2riTh3ecmug65NG11s3MbHJL7wm8Oi8u29FbuvGSSOVlJeWeL_YsEX-EsD2JTJ_3qTeCVZHCqARu-Ck6Y63iYhBtYaXpn5K5kuA2vuQrWHYufDbrgrnWF8gBO3Q2cbby4EDycbfL6XE_vghkPE2wZqXEupNq0";
const url = "https://api.spotify.com/v1/artists?ids=1qFp8zDvsXyCsC5dqz8X4S,4zCH9qm4R2DADamUHMCa6O,0aUQnP4HhUQXcurZl9GJIA,2uocTdMBXjTsS7QmAj7src,0oOet2f43PA68X5RxKobEy,2IUtwMti1OiT3lkW6RubgH,7qjJw7ZM2ekDSahLXPjIlN,1QvyquqkuuwUzdszyoKIy4,67ra8R8hw9NkDyBaJBS2j6,0nMjhemqRwrboQGcs92fh2";

const request = new Request(
    url, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

async function getData() {
    try {
        const response = await fetch(request);
        const data = await response.json();
        if (response.status === 200) {
           
            const dataElement = document.getElementById("api-data");

            data.artists.forEach(artist => {
                const artistlist= document.createElement("h2");
                artistlist.textContent = `${artist.name}`;
                dataElement.appendChild(artistlist);
            });
        
        } else {
            
            const dataElement = document.getElementById("api-data");
            dataElement.innerHTML = `Server Error: ${data.error.message}`;
        }
    } catch (error) {
        console.log('ERROR: ', error);
    }  

}

getData()

function outputArtist(artist){
    return artist
}

function getArtist () {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const artist = JSON.parse(this.responseText)
        outputArtist(artist)
    }
    xmlhttp.open("GET", "artist.json")
    xmlhttp.send()
}

getArtist()


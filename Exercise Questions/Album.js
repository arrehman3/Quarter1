"use strict";
function make_album(artist, album, tracks = 0) {
    const albumObj = {
        artist: artist,
        album: album,
        tracks: tracks
    };
    // if(tracks)
    // {
    //     albumObj.tracks=tracks;
    // }
    return albumObj;
}
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 10);
let album3 = make_album("Artist3", "Album3", 15);
console.log(album1);
console.log(album2);
console.log(album3);

function make_album(artist, album, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var albumObj = {
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
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 10);
var album3 = make_album("Artist3", "Album3", 15);
console.log(album1);
console.log(album2);
console.log(album3);

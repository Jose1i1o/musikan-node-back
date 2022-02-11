const db = require("../models");

async function getBasePlaylists() {
    let userId = await db.User.find({}, { _id: 1 }).lean();
    let trackId = await db.Track.find({}, { _id: 1 }).lean();

    let tracks = [];
    
    // slice tracks in five arrays
    for (let i = 0; i < trackId.length; i++) {
        if (i % 5 === 0) {
            tracks.push(trackId.slice(i, i + 10));
        }
    }
    
    // take only the id of the tracks
    const tracksIds = tracks.map(track => track.map(t => t._id));
    
    // divide the tracks in five arrays and return in strings
    let playlist1 = tracksIds.slice(0, 1);
    let playlist2 = tracksIds.slice(1, 2);
    let playlist3 = tracksIds.slice(2, 3);
    let playlist4 = tracksIds.slice(3, 4);
    let playlist5 = tracksIds.slice(4, 5);


    return [
    {
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      name: "PLaylist 1",
      tracks: playlist1[0].map(track => track.toString()),
      followedBy: userId,
      isFollowed: true,
      thumbnail:
        "https://images.unsplash.com/photo-1632993952737-0c2897164db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      collaborative: false,
      description: "The first playlist",
      publicAccessible: false,
      primaryColor: "#fbdc00",
    },
    {
        userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
        name: "PLaylist 2",
        tracks: playlist2[0].map(track => track.toString()),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The second playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
        name: "PLaylist 3",
        tracks: playlist3[0].map(track => track.toString()),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The third playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
        name: "PLaylist 4",
        tracks: playlist4[0].map(track => track.toString()),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The fourth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
        name: "PLaylist 5",
        tracks: playlist5[0].map(track => track.toString()),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The fifth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
  ];
}

module.exports = { getBasePlaylists };

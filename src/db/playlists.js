const db = require("../models");

async function getBasePlaylists() {
  let userId = await db.User.find({}, { _id: 1 }).lean();
  let { _id: trackId } = await db.Track.findOne({}, { _id: 1 }).lean();
  return [
    {
      userId: userId,
      name: "PLaylist 1",
      tracks: [trackId],
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
        userId: userId,
        name: "PLaylist 2",
        tracks: [trackId],
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
        userId: userId,
        name: "PLaylist 3",
        tracks: [trackId],
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
        userId: userId,
        name: "PLaylist 4",
        tracks: [trackId],
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
        userId: userId,
        name: "PLaylist 5",
        tracks: [trackId],
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The fifth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId,
        name: "PLaylist 6",
        tracks: [trackId],
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The sixth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId,
        name: "PLaylist 7",
        tracks: [trackId],
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The seventh playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId,
        name: "PLaylist 8",
        tracks: [trackId],
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The eighth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId,
        name: "PLaylist 9",
        tracks: [trackId],
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The ninth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId,
        name: "PLaylist 10",
        tracks: [trackId],
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The tenth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
  ];
}

module.exports = { getBasePlaylists };

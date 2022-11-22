const Lyrics = require('../models/Lyrics');
const Song = require('../models/Song');
const Album = require('../models/Album')


module.exports = {
    getProfile: async (req, res) => {
      try {
        const lyricsItems = await Lyrics.find({ likes: req.user.id }).limit(5)
        const songItems = await Song.find({ likes: req.user.id }).limit(5)
        const albumItems = await Album.find({ likes: req.user.id }).limit(5)

        res.render("profile.ejs", {
          lyrics: lyricsItems,
          songs: songItems, 
          albums: albumItems,
          user: req.user,
        });
      } catch (err) {
        console.log(err);
      }
    },
  };
  
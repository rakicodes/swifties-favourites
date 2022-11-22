const Album = require('../models/Album')

module.exports = {
    getAlbums: async (req, res) => {
      const albumItems = await Album.find().sort({"likes": -1});
      res.render("albums.ejs", { album: albumItems, user: req.user });
    },
    likeAlbum: async (req, res) => {
      try {
        await Album.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likesCount: 1 },
            $push: { likes: req.user.id }
          }
        );
        console.log("Likes +1");
        res.redirect(`/albums`);
      } catch (err) {
        console.log(err);
      }
    },
    unlikeAlbum: async (req, res) => {
      try {
        await Album.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likesCount: -1 },
            $pull: { likes: req.user.id }
          }
        );
        console.log("Likes -1");
        res.redirect(`/albums`);
      } catch (err) {
        console.log(err);
      }
    }
  };
  
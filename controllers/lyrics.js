const Lyrics = require('../models/Lyrics')

module.exports = {
    getLyrics: async (req, res) => {
      const lyricsItems = await Lyrics.find().sort({"likes": -1});
      res.render("lyrics.ejs", { lyrics: lyricsItems, user: req.user });
    },
    addLyrics: async (req, res) => {
      try {      
          await Lyrics.create({
            lyrics: req.body.value,
            likes: [],
            likesCount: 0,
            createdBy: req.user.id,
          });
          console.log("Lyrics has been added!");
          res.redirect("/lyrics");
        } catch (err) {
          console.log(err);
        }
    },
    likeLyrics: async (req, res) => {
      try {
        await Lyrics.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likesCount: 1 },
            $push: { likes: req.user.id }
          }
        );
        console.log("Likes +1");
        res.redirect(`/lyrics`);
      } catch (err) {
        console.log(err);
      }
    },
    unlikeLyrics: async (req, res) => {
      try {
        await Lyrics.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likesCount: -1 },
            $pull: { likes: req.user.id }
          }
        );
        console.log("Likes -1");
        res.redirect(`/lyrics`);
      } catch (err) {
        console.log(err);
      }
    },
    deleteLyrics: async (req, res) => {
      try {
        await Lyrics.deleteOne({ _id: req.params.id });

        console.log("Deleted Lyrics");
        res.redirect("/lyrics");
      } catch (err) {
        res.redirect("/lyrics");
      }
    },
};
  
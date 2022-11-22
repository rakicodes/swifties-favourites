const express = require("express");
const router = express.Router();

const lyricController = require('../controllers/lyrics');

router.get('/', lyricController.getLyrics);
router.put('/like/:id', lyricController.likeLyrics);
router.put('/unlike/:id', lyricController.unlikeLyrics);
router.post('/addLyrics', lyricController.addLyrics);
router.delete('/deleteLyrics/:id', lyricController.deleteLyrics);

module.exports = router;
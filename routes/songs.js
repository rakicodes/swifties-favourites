const express = require("express");
const router = express.Router();

const songsController = require('../controllers/songs');

router.get('/', songsController.getSongs);
router.put('/like/:id', songsController.likeSong);
router.put('/unlike/:id', songsController.unlikeSong);
router.post('/addSong', songsController.addSong);
router.delete('/deleteSong/:id', songsController.deleteSong);

module.exports = router;

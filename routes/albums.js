const express = require("express");
const router = express.Router();

const albumController = require('../controllers/albums');

router.get('/', albumController.getAlbums);
router.put('/like/:id', albumController.likeAlbum)
router.put('/unlike/:id', albumController.unlikeAlbum)

module.exports = router;
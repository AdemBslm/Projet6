const express = require('express');
const router = express.Router();
const multer = require("../middleware/multer-config")

const sauceCtrl = require('../controllers/sauce');

router.post('/', multer, sauceCtrl.createSauce);
router.get('/', sauceCtrl.getAllSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.put('/:id', sauceCtrl.modifySauce);

module.exports = router;
const  express = require('express');
const router = express.Router();
const controller = require('../controllers/notesController');

router.get ('/', controller.getNotes);
router.post('/', controller.addNote);

module.exports = router;
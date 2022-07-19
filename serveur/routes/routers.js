const router = require('express').Router();
const reservationController = require('../controllers/reservation-controller');
const contactController = require('../controllers/contactController')
const path = require('path')

// Route reservation
router.post('/reservation', reservationController.reservation);

// Route contact
router.post('/contact', contactController.contact)

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})


module.exports = router
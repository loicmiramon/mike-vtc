const reservationModel = require('../models/reservation.model');


module.exports.reservation = async (req, res) => {

  const reservData = new reservationModel({
    identiter: req.body.identiter,
    telephone: req.body.telephone,
    email: req.body.email,
    date: req.body.date,
    horaire: req.body.horaire,
    services: req.body.services,
    localisation: req.body.localisation,
    destination: req.body.destination
  })
  try {
    const newDataReservation = await reservData.save()
    res.status(200).json(newDataReservation)
  } catch (err) {
    res.status(400).send(err)
  }
}
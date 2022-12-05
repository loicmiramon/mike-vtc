const db = require('../config/db')

module.exports.reservation = async (req, res) => {
  const result = db.query('INSERT INTO reservation (name, phone, mail, date, hourly, service, adress_location, adress_destination) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [
    req.body.name,
    req.body.phone,
    req.body.mail,
    req.body.date,
    req.body.hourly,
    req.body.service,
    req.body.adress_location,
    req.body.adress_destination
  ])

  try {
    res.status(200).json({
      status: "Sucess",
      data : {
        reservation: result.rows
      }
    })
  } catch (error) {
    res.status(400).send('Error Reservation', error)    
  }
}
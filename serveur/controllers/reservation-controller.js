const db = require('../config/db')

module.exports.reservation = async (req, res) => {
  const result = db.query('INSERT INTO reservation (name, phone, mail, hourly_d, hourly_a, service, adress_d, adress_a) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [
    req.body.name,
    req.body.phone,
    req.body.mail,
    req.body.hourly_d,
    req.body.hourly_a,
    req.body.service,
    req.body.adress_d,
    req.body.adress_a
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
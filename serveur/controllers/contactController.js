const db = require('../config/db')

module.exports.contact = async (req, res) => {
  const result = db.query('INSERT INTO contact (name, phone, mail, message) VALUES ($1, $2, $3, $4)', [
    req.body.name,
    req.body.phone,
    req.body.mail,
    req.body.message
  ])

  try {
    res.status(200).json({
      status: "Success",
      data: {
        contact : result.rows
      }
    })
  } catch (error) {
    res.status(400).send('Error Contact', error)
  }
}
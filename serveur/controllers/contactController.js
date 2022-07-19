const contactModel = require('../models/contact.model');


module.exports.contact = async (req, res) => {
  const reservData = new contactModel({
    name: req.body.name,
    telephone: req.body.telephone,
    email: req.body.email,
    message: req.body.message
  })
  try {
    const newDataContact = await reservData.save()
    res.status(200).json(newDataContact)
  } catch (err) {
    res.status(400).send(err)
  }
}
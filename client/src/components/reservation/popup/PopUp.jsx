import React from 'react'
import emailjs from 'emailjs-com'
import axios from 'axios'

const PopUp= (props) => {

  const {state, title, data, methodNotif} = props
  
  
  const handleCancel = () => {
    state(false)
  }
  const handleSuccess = () => {
    sendEmailReservation(data)
    methodNotif()
    state(false)
  }

  const sendEmailReservation = async (data) => {
    
    const dataEmailReservation = {
      name: data.reservation_name,
      phone: data.reservation_phone,
      mail: data.reservation_mail,
      date: data.reservation_date,
      hourly: data.reservation_hourly,
      service: data.reservation_service,
      adress_location: data.reservation_adress_location,
      adress_destination: data.reservation_adress_destination 
    }

    emailjs.send('service_pyym7qb', 'template_hs5zfxx', dataEmailReservation, 'yiFq_oFCF1P0mTCtB')
      .then(res => {
        console.log(res)
    })

    
    await axios.post('https://mikevtc.netlify.app/reservation', {
      ...dataEmailReservation 
    })
    .then(response => {
     methodNotif()
     /*emailjs.send('service_pyym7qb', 'template_hs5zfxx', dataEmailReservation, 'yiFq_oFCF1P0mTCtB')
     .then(res => {
       console.log(res)
     })*/
    }).catch(err => {
      console.log(err)
    })
    
  }

  return (
    <div className='container-popup'>
      <h1 className='title-popup'>{title}</h1>
      <p className="paragraphe-popup">Après la validation, votre réservation sera prise en compte. Le chauffeur confirmera celle-ci par email</p>
      <table className="table-popup">
        <thead className='thead-popup'>
          <tr className='tr-table-popup'>
            <th className='title-table-popup'>Label</th>
            <th className='title-table-popup'>Vos informations</th>
          </tr>
        </thead>
        <tbody>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>Nom</td>
            <td className='items-table-popup'>{data.identiter}</td>
          </tr>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>Téléphone</td>
            <td className='items-table-popup'>{data.telephone}</td>
          </tr>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>Email</td>
            <td className='items-table-popup'>{data.email}</td>
          </tr>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>date</td>
            <td className='items-table-popup'>{data.date}</td>
          </tr>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>horaire</td>
            <td className='items-table-popup'>{data.horaire}</td>
          </tr>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>services</td>
            <td className='items-table-popup'>{data.services}</td>
          </tr>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>localisation</td>
            <td className='items-table-popup'>{data.localisation}</td>
          </tr>
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>destination</td>
            <td className='items-table-popup'>{data.destination}</td>
          </tr>
        </tbody>
      </table>
      
      <div className='container-btn-popup'>
        <button onClick={handleCancel} className='btn-cancel-popup'>Annuler</button>
        <button onClick={handleSuccess} className='btn-success-popup'>Valider</button>
      </div>
    </div>
  )
}

export default PopUp

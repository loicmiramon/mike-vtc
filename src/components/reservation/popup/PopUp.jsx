import React from 'react'

const PopUp= (props) => {

  const {state, title, data} = props
  
  const handleCancel = () => {
    state(false)
  }
  const handleSuccess = () => {
    state(false)
  }

  return (
    <div className='container-popup'>
      <h1 className='title-popup'>{title}</h1>
      <p className="paragraphe-popup">Après la validation, votre réservation sera prise en compte.</p>
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
            <td className='items-table-popup'>{data.nom}</td>
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
          <tr className='tr-table-popup'>
            <td className='label-items-table-popup'>Prix de la course</td>
            <td className='items-table-popup'>10€</td>
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

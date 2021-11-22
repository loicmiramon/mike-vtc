import React from 'react'

const FormSelect = (props) => {
  const {method, value, name, id, children} = props
  return (
    <div className="blocInputReservationMikeVtc">
        <label className="labelReservationMikeVtc" htmlFor={name}>{children}</label>
        <select onChange={method} name={name} value={value} className="selectReservationMikeVtc" id={id}>
          <option value="disposition">Mise a disposition</option>
          <option value="unique">Trajet unique</option>
          <option value="aeroport">Trajet aeroport</option>
          <option value="loisir">Trajet loisir</option>
        </select>
      </div>
  )
}

export default FormSelect

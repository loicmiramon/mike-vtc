import React from 'react'

const FormChamp = (props) => {
  const {method, value, type, name, id, placeholder, children} = props
  return (
    <div className="blocInputReservationMikeVtc">
      <label className="labelReservationMikeVtc" htmlFor={name}>{children}</label>
      <input onChange={method} value={value} name={name} className="inputReservationMikeVtc" type={type} id={id} placeholder={placeholder} />
    </div>
  )
}

export default FormChamp



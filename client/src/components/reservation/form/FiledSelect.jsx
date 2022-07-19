import React from 'react'

const FieldSelect = (props) => {
  const {register, name, id, children} = props
  return (
    <div className="container-input-reservation">
        <label className="label-reservation" htmlFor={name}>{children}</label>
        <select {...register(name)} name={name} className="select-reservation" id={id}>
          <option value="disposition">Mise a disposition</option>
          <option value="unique">Trajet unique</option>
          <option value="aeroport">Trajet aeroport</option>
        </select>
      </div>
  )
}

export default FieldSelect

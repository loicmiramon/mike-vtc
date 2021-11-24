import React from 'react'

const FormChamp = (props) => {
  const {method, value, type, name, id, placeholder, children} = props
  return (
    <div className="container-input-reservation">
      <label className="label-reservation" htmlFor={name}>{children}</label>
      <input onChange={method} value={value} name={name} className="input-reservation" type={type} id={id} placeholder={placeholder} />
    </div>
  )
}

export default FormChamp



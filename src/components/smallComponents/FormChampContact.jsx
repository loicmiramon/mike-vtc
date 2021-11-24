import React from 'react'

const FormChampContact = (props) => {
  const {method, value, name, type, id, placeholder, children} = props
  return (
    <div className="container-input-contact">
      <label htmlFor={name} className="label-contact">{children}</label>
      <input className="input-contact" onChange={method} name={name} value={value} type={type} id={id} placeholder={placeholder} />
    </div>
  )
}

export default FormChampContact

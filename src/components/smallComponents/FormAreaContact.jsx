import React from 'react'

const FormAreaContact = (props) => {

  const {method, id, value, name, placeholder, children } = props

  return (
    <div className="container-input-contact">
      <label htmlFor="" className="label-contact">{children}</label>
      <textarea onChange={method} className="area-contact" value={value} name={name} id={id} cols="30" rows="10" placeholder={placeholder}></textarea>
    </div>
  )
}

export default FormAreaContact

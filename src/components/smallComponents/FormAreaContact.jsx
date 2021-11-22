import React from 'react'

const FormAreaContact = (props) => {

  const {method, id, value, name, placeholder, children } = props

  return (
    <div className="blocInputContactMikeVtc">
      <label htmlFor="" className="labelContactMikeVtc">{children}</label>
      <textarea onChange={method} className="areaContactMikeVtc" value={value} name={name} id={id} cols="30" rows="10" placeholder={placeholder}></textarea>
    </div>
  )
}

export default FormAreaContact

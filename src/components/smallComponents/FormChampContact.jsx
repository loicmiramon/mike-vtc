import React from 'react'

const FormChampContact = (props) => {
  console.log(props)
  const {method, value, name, type, id, placeholder, children} = props
  return (
    <div className="blocInputContactMikeVtc">
      <label htmlFor={name} className="labelContactMikeVtc">{children}</label>
      <input className="inputContactMikeVtc" onChange={method} name={name} value={value} type={type} id={id} placeholder={placeholder} />
    </div>
  )
}

export default FormChampContact

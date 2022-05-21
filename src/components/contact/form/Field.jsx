import React from 'react'

const Field = (props) => {
  const {register, name, type, id, placeholder, children} = props
  return (
    <div className="container-input-contact">
      <label htmlFor={name} className="label-contact">{children}</label>
      <input className="input-contact" {...register(name)} name={name} type={type} id={id} placeholder={placeholder} required/>
    </div>
  )
}

export default Field

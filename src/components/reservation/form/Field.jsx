import React from 'react'

const Field = (props) => {
  const {register, type, name, id, placeholder, children} = props
  return (
    <div className="container-input-reservation">
      <label className="label-reservation" htmlFor={name}>{children}</label>
      <input {...register(name)} name={name} className="input-reservation" type={type} id={id} placeholder={placeholder} required />
    </div>
  )
}

export default Field



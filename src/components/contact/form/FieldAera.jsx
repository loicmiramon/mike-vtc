import React from 'react'

const FieldArea = (props) => {

  const {register, id, name, placeholder, children } = props

  return (
    <div className="container-input-contact">
      <label htmlFor="" className="label-contact">{children}</label>
      <textarea {...register(name)} className="area-contact" name={name} id={id} cols="30" rows="10" placeholder={placeholder}></textarea>
    </div>
  )
}

export default FieldArea

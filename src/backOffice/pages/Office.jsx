import React from 'react'
import NavbarBack from '../components/NavbarBack'

const Office = (props) => {
  return (
    <>
      <NavbarBack btnSignOut={ props.signOut } />
    </>
  )
}

export default Office

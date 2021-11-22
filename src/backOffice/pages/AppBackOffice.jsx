import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../firebase'
import Office from './Office'

const AppBackOffcice = (props) => {

  const firebase = useContext(FirebaseContext)
  const [userSession, setUserSession] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserSession(user)
      } else {
        
      }
    });
  }, [userSession])

  const handleSessionOut = e => {
    e.preventDefault()
    const auth = getAuth();
    signOut(auth).then(() => {
      setUserSession(null)
      setTimeout(() => {
        // Rediriger la personne sur le site 
        props.history.push('/')
      },2000)
    }).catch((error) => {
      console.log(error)
    });
  }

  return userSession === null ? (
    <>
      <section className="redirectionPageBackOfficeMikeVtc">
        <p>Vous n'avez pas accès à cette page</p>
        <Link to='/'>Aller</Link>
      </section>
    </>
  ) : (
    <div className="backOffice">
     <Office signOut={handleSessionOut} userSession={userSession}/>
    </div>
  )
}

export default AppBackOffcice

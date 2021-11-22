import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";


const Connexion = (props) => {

  const data = {
    email: '',
    password: ''
  }

  const [login, setLogin] = useState(data)
  const [error, setError] = useState('')

  const handleChange = e => {
    setLogin({...login,[e.target.id]: e.target.value})
  }

  const {email, password} = login
  
  const handleSubmit = e => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
       // const user = userCredential.user
       props.history.push('/office')
      })
      .catch((error) => {
        setError(error)
        console.log(error)
      });
  }

  return (
    <section className="connexionBackOfficeMikeVtc">
      <form onSubmit={ handleSubmit} className="formulaireConnexionBackOfficeMikeVtc">
        <h2 className="titreConnexionBackOffcieMikeVtc">Se Connecter</h2>
        <div className="blocInputConnexionBackOfficeMikeVtc">
          <label htmlFor="email" className="labelConnexionBackOfficeMikeVtc">Email</label>
          <input type="email" autoComplete="off" className="inputConnexionBackOfficeMikeVtc" id="email" onChange={handleChange} placeholder="Email"  value={email}/>
        </div>
        <div className="blocInputConnexionBackOfficeMikeVtc">
          <label htmlFor="password" className="labelConnexionBackOfficeMikeVtc" >Mot de passe</label>
          <input type="password" autoComplete="off" className="inputConnexionBackOfficeMikeVtc"  id="password" onChange={handleChange} placeholder="Mot de passe" value={password}/>
        </div>
        <button className="btnConnexionBackOfficeMikeVtc">Connexion</button>
      </form>
    </section>
  )
}

export default Connexion

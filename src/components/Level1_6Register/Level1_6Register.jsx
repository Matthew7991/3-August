import React, { useState } from 'react'
import "./Level1_6Register.scss"

function Level1_6Register() {
  const [inputFirstName, setInputFirstName] = useState("")
  const [inputFamilyName, setInputFamilyName] = useState("")
  const [inputEmail, setInputEmail] = useState("")

  const inputFirstNameHandler = (event) => {
    setInputFirstName(event.target.value)
  }
  
  const inputFamilyNameHandler = (event) => {
    setInputFamilyName(event.target.value)
  }

  const inputEmailHandler = (event) => {
    setInputEmail(event.target.value)
  }


  return (
    <section className='register'>
      <input type="text" name='firstName' id='firstName' value={inputFirstName} onChange={inputFirstNameHandler}/>
      <input type="text" name='familyName' id='familyName' value={inputFamilyName} onChange={inputFamilyNameHandler}/>
      <input type="email" name='email' id='email' value={inputEmail} onChange={inputEmailHandler}/>
      <output>Vorname: {inputFirstName}</output>
      <output>Nachname: {inputFamilyName}</output>
      <output>Email: {inputEmail}</output>
    </section>
  )
}

export default Level1_6Register

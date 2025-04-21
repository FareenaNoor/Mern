import React from 'react'
import { useRef } from 'react';
import '../App.css';
export default function Registration() {
    const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const termsRef = useRef();

  function onHandleSubmit(e) {
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Confirm Password:", confirmPasswordRef.current.value);
    console.log("Accepted Terms:", termsRef.current.value);
  }
  return (
    <><div className="form-container">
    <h2>Registration Form</h2>
    <div className='form'>
      <label htmlFor="fname">Full Name</label>
      <input type="text" id="fname" ref={nameRef} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailRef} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" ref={passwordRef} />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" ref={confirmPasswordRef} />

      <div className="checkbox-group">
        <input type="checkbox" id="terms" ref={termsRef} />
        <label htmlFor="terms">Accept Terms and Conditions</label>
      </div>

      <button  onClick={onHandleSubmit}>Submit</button>
      </div>
  </div></>
  )
}

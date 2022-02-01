//Imports
import '../App.css';
import '../styleFolder/body.css'
import React from 'react';
import LoginForm from '../components/Login/LoginForm';


const LoginPage = () => {
  //LoginPage - Function that shows the Start/Login page
  return (
    <>
    <section>
        <h1 className='section-text'>Lost in Translation</h1>
        <h3 className='body-text'>Get started</h3>
        <div className='input-textbox'>
          <LoginForm/>
          </div>
    </section>
    </>
  )
};

export default LoginPage;

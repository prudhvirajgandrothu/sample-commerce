 
 



import './index.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useState } from 'react';
import './loginForm.css'

 

function LoginForm () {
    const navigate = useNavigate()
   
  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')

  const onSubmitSuccess = (jwtToken) => {
     
    
    console.log('navigation')
  //  navigate('/about')


  Cookies.set('jwt_token', jwtToken, {
    expires: 30,
    path: '/products',
  })
  navigate('/products')
   
   console.log('navigation')
  }

  const submitForm = async event => {
    event.preventDefault()
     
    // const userDetails = {username:'', password:''}
    // const url = 'https://apis.ccbp.in/login'
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(userDetails),
    // }
    // console.log(username,'us',password,'pw')
    // const response = await fetch(url, options)
    // const data = await response.json()
    // console.log(data.response)

    // if (response.ok === true) {
      
    //   {onSubmitSuccess()}
    // }else{
    //   navigate('/')
      
    // }

    // if(username === 'rahul' && password === 'rahul@2021'){
    //   {onSubmitSuccess()}
    // }
    // else{
    //   navigate('/')
    // }
 
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log(options,'options')
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data,'data')
    if (response.ok === true) {
       onSubmitSuccess(data.jwt_token)
    }
  }

  const onChangeUsername = event => {
    console.log(123,event.target.value,typeof(username))
    setUsername(event.target.value)
    
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const renderPasswordField = () => {
    
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={onChangePassword}
        />
      </>
    )
  }

 const renderUsernameField = () => {
    
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={onChangeUsername}
        />
      </>
    )
  }

  
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          
        </form>
        <button type="submit" onClick={onSubmitSuccess} className="login-button">
            Logout
          </button>
      </div>
    )
   

  
   
    
  }

   



export default LoginForm
 
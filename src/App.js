import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = ()=> {
    if(username && password){
      let formData = new FormData()
      formData.append('username', username)
      formData.append('password', password)
      const url = 'http://localhost/server/'
      Axios.post(url, formData)
      .then(res => res.json())
      .catch(err => console.log(err))
      setUsername('')
      setPassword('')
    }
    
  }

  return (
    <>
      <div className="container m-5 p-5 border shadow rounded-lg">
        <h1>Sign-up</h1>
        <p>to continue</p>
        <label>Username</label>
        <input onChange={e => setUsername(e.target.value)} value={username} type="text" className="form-control p-4"/>
        <label>Password</label>
        <input onChange={e => setPassword(e.target.value)} value={password} type="password" className="form-control p-4"/>
        <button onClick={handleSubmit} className="btn btn-primary mt-3">Register</button>
      </div>
    </>
  )
}

export default App;

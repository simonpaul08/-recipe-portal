import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import SwitchTab from '../components/SwitchTab'

const Auth = () => {

    const [tab, setTab] = useState(true)


  return (
    <div className="auth-container">
        <SwitchTab tab={tab} setTab={setTab}/>
        {tab ? <Register /> : <Login />}
    </div>
  )
}

export default Auth
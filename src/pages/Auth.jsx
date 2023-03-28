import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import SwitchTab from '../components/SwitchTab'

const Auth = () => {

    const [tab, setTab] = useState(true)


  return (
    <div className="auth-container py-5">
        <SwitchTab tab={tab} setTab={setTab}/>
        {tab ? <Login /> : <Register />}
    </div>
  )
}

export default Auth
import React from 'react'

const SwitchTab = ({ tab, setTab }) => {

    const handleSwitch = (value) => {

        if(value === 'register'){
            setTab(false)
        }else {
            setTab(true)
        }
    }
  return (
    <div className='switch-tab d-flex align-items-center mb-3'>

        <div className={`tab ${tab ? "active-tab" : ""} d-flex justify-content-center align-items-center w-50 py-3`} onClick={() => handleSwitch('login')}>
            <p className='mb-0'>Login</p>
        </div>      

        <div className={`tab ${tab ? "" : "active-tab"} d-flex justify-content-center align-items-center w-50 py-3`} 
        onClick={() => handleSwitch('register')}>
            <p className='mb-0'>Register</p>
        </div>     

    </div>
  )
}

export default SwitchTab
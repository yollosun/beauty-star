import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../index'
import '../../style/Header.scss'

function Logout() {
    const { auth } = useContext(Context)
    return (
        <div className='login-user'>
            <Link to='/chat'>Chat</Link>
            <button className='log-button' onClick={() => auth.signOut()}>Log out</button>
        </div>
    )
}

export default Logout

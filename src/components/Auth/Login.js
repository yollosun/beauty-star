import { Box, Button, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { Context } from '../../index'
import firebase from 'firebase'
import '../../style/Header.scss'

function Login() {
    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
        console.log(user)
    }
    return (

        <button className='log-button' onClick={login} variant={"outlined"}>Логин</button>


    )
}

export default Login

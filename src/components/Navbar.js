import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from '../index'

function Navbar() {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar color={"secondary"} position="static">

            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()}>Выйти</Button> :
                        <Button>Логин</Button>
                    }

                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

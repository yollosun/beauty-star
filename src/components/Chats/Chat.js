import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext, useState } from 'react'
import { Context } from '../../index'
import { Avatar, Button, Container, Grid, TextField, useTheme } from '@material-ui/core'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from '../Loader'
import firebase from 'firebase'
function Chat() {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <Grid container
                justify={" center"}
                style={{ height: window.innerHeight - 50, marginTop: 20 }}>
                <div style={{ width: "88%", height: "68vh", border: '1px solid gray', overflowY: "auto" }}>
                    {console.log(messages)}
                    {messages.map(message =>
                        <div style={{
                            width: "30%",
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            wigth: 'fit-content',
                            padding: 5
                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{ width: '88%' }}>
                    <TextField
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat

import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext, useState } from 'react'
import { Context } from '../../index'
import { TextField } from '@material-ui/core'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from '../Loader'
import firebase from 'firebase'
import '../../style/Chat.scss'
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
        <div className='chat'>
            <div className='chat-container'>
                <div className='chat-window' >
                    {messages.map(message =>
                        <div className='chat-message' style={{


                            marginLeft: user.uid === message.uid ? 'auto' : '10px',

                        }}>
                            <div className='chat-utils'>
                                <div className='img-root'>
                                    <img className='img' src={message.photoURL} />
                                </div>
                                <div>{message.displayName}</div>
                            </div>
                            <hr />

                            <div className='chat-message-text'>{message.text}</div>
                        </div>
                    )}
                </div>
                <div className='chat-input'>
                    <input value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button onClick={sendMessage} >Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Chat

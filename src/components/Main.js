import React from 'react'

import { useEffect } from 'react';
import '../style/Main.scss'


function Main() {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])

    return (
        <div className='main'>

            <div className="main-sides">
                <div className="left">
                    <div className='left-title'>
                        <h1>Be anyone<br /><span>you want</span><br />to be</h1>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>

        </div>
    )
}

export default Main

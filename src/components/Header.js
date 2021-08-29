import logo from '../media/logo.png'
import logoo from '../media/logoo.png'
import '../style/Header.scss'
import Burger from './Menu/Burger'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from '../index'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
function Header() {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return (

        <header>
            {/* <img src={logoo} alt="" /> */}
            <a href='https://github.com/yollosun'><h2 className='logo'>YOLLOLLAY</h2></a>
            <div className='header-button'>
                {user ?

                    <Logout /> :
                    <Login />
                }
            </div>
            {/* <Burger /> */}
        </header>

    )
}

export default Header

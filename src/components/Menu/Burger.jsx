import '../../style/Menu.scss'
import { useState } from 'react'

import * as FaIcons from "react-icons/fa"

function Burger() {
    const [status, setStatus] = useState('close');
    return (
        <nav>
            <FaIcons.FaBars color={"white"} />
        </nav>
    );
}

export default Burger

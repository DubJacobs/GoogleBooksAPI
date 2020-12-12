import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookDead } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <header>
            <FontAwesomeIcon size="6x" icon={faBookDead} />            
            <h1>DeadBooks</h1>
        </header>
    )
}

export default Header;

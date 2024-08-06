import React from 'react'
import { FaCartShopping as Cart } from "react-icons/fa6";
import '../NavCar/NavCar.css'
import { Link } from 'react-router-dom';

export const NavCar = () => {
    return (
        <div className='navC'>
            <Link to={'/cart'}>
                <Cart style={{ fontSize: '30px', color: 'white' }} />
            </Link>
        </div>
    )
}

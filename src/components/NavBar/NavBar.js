import React from 'react'
import '../NavBar/NavBar.css'
import logo from '../NavBar/LUFIGU.png'
import { Busca } from '../Busca/Busca'
import { FaCartShopping as Cart } from "react-icons/fa6";
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='box'>
      <img src={logo} className='logo' alt='' />
      <Busca />
      <Link to="/cart">
        <Cart  style={{fontSize: '30px', color: 'white', marginRight: '50px'}}/>
      </Link>
    
    </div>
  )
}

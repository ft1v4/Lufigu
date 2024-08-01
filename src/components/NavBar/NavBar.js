import React from 'react'
import '../NavBar/NavBar.css'
import logo from '../NavBar/LUFIGU.png'
import { Busca } from '../Busca/Busca'
import { IconSobre } from '../IconSobre/IconSobre'

export const NavBar = () => {
  return (
    <div className='box'>
        <img src={logo} className='logo'/>
        <Busca/>
        <IconSobre/>
    </div>
  )
}

import React from 'react'
import { FaInfoCircle as Sobre } from "react-icons/fa";
import '../IconSobre/IconSobre.css'
import { Link } from 'react-router-dom';

export const IconSobre = () => {
  return (
    <>
      <Link to={'/sobre'}>
        <Sobre className='icon' />
      </Link>
    </>
  )
}

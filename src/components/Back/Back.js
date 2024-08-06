import React from 'react'
import { IoMdArrowRoundBack as IconBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Back = ({color,tamanho,top,left}) => {
    return (
        <Link to={'/'}>
            <IconBack style={{ color: `${color}`, fontSize: `${tamanho}px`, position: 'absolute', top: `${top}%`, left: `${left}%` }} />
        </Link>
    )
}

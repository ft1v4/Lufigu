import React from 'react'
import '../Produtos/Produtos.css'
import { Link } from 'react-router-dom'

export const Produtos = ({ produtosHome }) => {

    return (
        <>
            <div className='boxPds'>

                {produtosHome.map((item) => (

                    <>
                        <Link to={`/produto/${item.id}`}>
                            <div className='boxPd1'>
                                <img src={item.img} alt={item.nome} className='img' />
                                <h5>{item.nome}</h5>
                                <p className='preco'>R${item.preco}</p>
                            </div>
                        </Link>
                    </>
                ))}

            </div>

        </>
    )
}

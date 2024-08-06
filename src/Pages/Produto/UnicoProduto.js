import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Produto/UnicoProduto.css'
import { useCart } from '../CartContext/CartContext';
import { NavCar } from '../../components/NavCar/NavCar';
import { Back } from '../../components/Back/Back';

export const UnicoProduto = ({ produtosUnico }) => {
    const { id } = useParams();
    const produto = produtosUnico[id];
    const { addToCart } = useCart();



    const [saborSelecionado, setSaborSelecionado] = useState(produto && produto.sabores ? Object.keys(produto.sabores)[0] : null);
    const [quantidade, setQuantidade] = useState(1);


    if (!produto) {
        return <div>Produto não encontrado</div>;
    }


    const temSabores = produto.sabores && Object.keys(produto.sabores).length > 0;




    const sabor = temSabores ? produto.sabores[saborSelecionado] : produto;




    const maxQuantidade = sabor.estoque;


    const handleAddToCart = () => {

        const itemId = `${id}-${saborSelecionado}`;

        const item = {
            id: itemId,
            nome: sabor.nome,
            preco: sabor.preco,
            quantity: quantidade,
            img: sabor.img
        };
        console.log(item)
        addToCart(item);
    };

    const handleQuantityChange = (event) => {
        const value = Math.max(1, Math.min(maxQuantidade, parseInt(event.target.value, 10) || 1));
        setQuantidade(value);
    };

    return (
        <>
            <div className='todo'>
                <Back color='white' top='3' left='1' tamanho='40'/>
                <div className='boxImage'>
                    <img src={sabor.img} alt={sabor.nome} style={{ width: '500px', height: 'auto', borderRadius: '10px' }} />
                </div>


                <div className='infos'>
                    <div className='info1'>
                        <h1>{sabor.nome}</h1>
                        <p>{sabor.descricao}</p>
                    </div>

                    <div className='divDasDiv'>

                        <div className='divSabor'>
                            {temSabores ? (

                                <div className='boxInt2'>
                                    <label>Escolha o sabor:</label>
                                    <div>
                                        {Object.keys(produto.sabores).map(saborKey => (
                                            <button
                                                key={saborKey}
                                                onClick={() => setSaborSelecionado(saborKey)}
                                                style={{
                                                    margin: '5px',
                                                    padding: '10px',
                                                    backgroundColor: saborSelecionado === saborKey ? '#383838' : 'grey',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '5px'
                                                }}
                                            >
                                                {saborKey.charAt(0).toUpperCase() + saborKey.slice(1)}
                                            </button>
                                        ))}
                                    </div>


                                </div>
                            ) : (
                                <p>Este produto não possui variações de sabor.</p>
                            )}
                        </div>

                        <div className='divQuant'>
                            <div className='boxInt'>

                                <label>Quantidade:</label>
                                <select
                                    value={quantidade}
                                    onChange={handleQuantityChange}
                                    style={{ margin: '5px', padding: '10px', borderRadius: '5px', border: '1px solid grey', width: '55%' }}
                                >
                                    {Array.from({ length: maxQuantidade }, (_, index) => index + 1).map(number => (
                                        <option key={number} value={number}>
                                            {number}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>

                    </div>


                    <p style={{ margin: '35px' }}>Estoque disponível: {maxQuantidade}</p>




                    <button onClick={handleAddToCart} id='btn'>Adicionar ao Carrinho</button>




                </div>
                <NavCar />
            </div>
        </>
    );
};

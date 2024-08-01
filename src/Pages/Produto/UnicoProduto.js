import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Produto/UnicoProduto.css'

export const UnicoProduto = ({ produtosUnico }) => {
    const { id } = useParams();
    const produto = produtosUnico[id];


    const [saborSelecionado, setSaborSelecionado] = useState(produto && produto.sabores ? Object.keys(produto.sabores)[0] : null);
    const [quantidade, setQuantidade] = useState(1);


    if (!produto) {
        return <div>Produto não encontrado</div>;
    }


    const temSabores = produto.sabores && Object.keys(produto.sabores).length > 0;

    console.log(temSabores)

    const sabor = temSabores ? produto.sabores[saborSelecionado] : produto;

    const maxQuantidade = sabor.estoque;





    return (
        <>
            <div className='todo'>
                <div className='boxImage'>
                    <img src={sabor.img} alt={sabor.nome} style={{ width: '500px', height: 'auto', borderRadius: '10px' }} />
                </div>

                <div className='infos'>
                    <div className='info1'>
                        <h1>{sabor.nome}</h1>
                        <p>{sabor.descricao}</p>


                    </div>

                    {temSabores ? (

                        <div className='boxS'>
                            <label>Escolha o sabor:</label>
                            <div className='boxS2'>
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

                    <div>
                        <label>Quantidade:</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap' , maxWidth: '500px'}}>
                            {Array.from({ length: maxQuantidade }, (_, index) => index + 1).map(number => (
                                <button
                                    key={number}
                                    onClick={() => setQuantidade(number)}
                                    style={{
                                        margin: '5px',
                                        padding: '10px',
                                        backgroundColor: quantidade === number ? '#383838' : 'grey',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px'
                                    }}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                        <p>Estoque disponível: {maxQuantidade}</p>
                    </div>

                    <button>COMPRAR</button>


                </div>

            </div>
        </>
    );
};

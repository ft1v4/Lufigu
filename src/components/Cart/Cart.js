import React, { useEffect, useState } from 'react';
import { useCart } from '../../Pages/CartContext/CartContext';
import '../Cart/Cart.css'
import { MdOutlineRemoveShoppingCart as NotCart } from "react-icons/md";
import { FaTrashCan as Remove } from "react-icons/fa6";
import { Back } from '../Back/Back';
import { AiOutlineClear as Clear } from "react-icons/ai";
import { FaPix as Pix } from "react-icons/fa6";
import { IoMdClose as X } from "react-icons/io";
import { FaMoneyBillWave as Money } from "react-icons/fa";

export const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const [isBoxConfirmVisible, setIsBoxConfirmVisible] = useState(cart.length > 0);
    const [isDivParaFVisible, setIsDivParaFVisible] = useState(false);

    useEffect(() => {

        setIsBoxConfirmVisible(cart.length > 0);
    }, [cart]);


    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const sumirDivF = () => {
        setIsDivParaFVisible(false)
    }


    const handleClear = () => {
        clearCart();
        setIsDivParaFVisible(false);
    };

    const handleFinalizePurchase = () => {
        setIsDivParaFVisible(true); // Exibe a divParaF quando o botão "Finalizar Compra" é clicado
    };
    const total = cart.reduce((acc, item) => acc + item.precoTotal, 0);
    return (
        <>
            <div>
                <div className='boxCarinho'>
                    <Back tamanho='40' color='white' top='9' left='2' />
                    <h1 style={{ fontSize: '20px', color: 'white' }}>Carrinho de Compras</h1>
                </div>
                <div className='fundoCar'>
                    <div className='fundoDaList'>
                        {cart.length === 0 ? (

                            <div className='boxNot'>
                                <NotCart style={{ color: 'black', fontSize: '60px', }} />
                                <h3 className='notText'>Não tem nada no seu carrinho</h3>
                            </div>
                        ) : (
                            <div className='boxList'>

                                {cart.map((item) => (

                                    <div key={item.id} className='boxProd' >
                                        <div className='boxIC'>
                                            <img src={item.img} alt='' id='imgC' />
                                        </div>
                                        <div className='boxIC2'>

                                            <div className='boxTD'>
                                                <div className='boxL'>
                                                    <h4>{item.nome}</h4>
                                                </div>
                                                <div className='boxD'>
                                                    <p>x{item.quantity}</p>
                                                </div>
                                                <div className='boxTotal'>
                                                    <p>Total: </p>
                                                    <p>R${item.precoTotal.toFixed(2)}</p>
                                                </div>
                                            </div>



                                            <button onClick={() => handleRemove(item.id)} className='remove'><Remove style={{ fontSize: '20px', color: 'white' }} /></button>
                                        </div>

                                    </div>


                                ))}
                                <button onClick={handleClear} className='clear'><Clear style={{ fontSize: '25px', color: 'white' }} /></button>

                            </div>





                        )}

                    </div>
                    {isBoxConfirmVisible && (
                        <div className='boxConfirm'>
                            <h4 id='tota'>Total da Compra : R${total.toFixed(2)}</h4>
                            <button id='btnFi' onClick={handleFinalizePurchase}>Finalizar Compra</button>
                        </div>
                    )}


                </div>
            </div >
            {isDivParaFVisible && (
                <div className='divParaF'>
                    <div className='boxFormas'>
                        <X onClick={sumirDivF} className='closeD' />
                        <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>Qual a forma de pagamento? </h2>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='boxFF'>
                                <button className='btnPix'>
                                    <Pix style={{ fontSize: '20px' , color: '#1cbd9a'}} />
                                    <p style={{ marginLeft: '7px'}}>PIX</p>
                                </button>
                                <button className='btnDin'><Money style={{ fontSize: '20px', color: 'green'  }} /><p style={{ marginLeft: '7px' }}>Dinheiro</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


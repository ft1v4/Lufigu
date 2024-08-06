import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {

            const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);


            if (itemIndex >= 0) {
                const newCart = [...prevCart];
                console.log(newCart[itemIndex])

                newCart[itemIndex].quantity += item.quantity;

                newCart[itemIndex].precoTotal = newCart[itemIndex].precoUnitario * newCart[itemIndex].quantity;
                console.log(newCart[itemIndex])


                return newCart;
            }
            return [...prevCart, {
                ...item,
                precoTotal: item.preco * item.quantity,
                precoUnitario: item.preco
            }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

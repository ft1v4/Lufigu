import React, { useState } from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Produtos } from '../Produtos/Produtos';



export const Home = ({produtosHome}) => {

  return (
    <>
      <NavBar />
      <Produtos produtosHome={produtosHome}/>
    </>
  );
};

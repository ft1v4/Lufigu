import React from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Produtos } from '../Produtos/Produtos';
import { IconSobre } from '../../components/IconSobre/IconSobre';





export const Home = ({ produtosHome }) => {

  return (
    <>
      <NavBar />
      <Produtos produtosHome={produtosHome} />
      <IconSobre/>
    </>
  );
};

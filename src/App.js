import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Sobre } from './Pages/Sobre/Sobre';
import { UnicoProduto } from './Pages/Produto/UnicoProduto.js';
import { CartProvider } from './Pages/CartContext/CartContext.js';
import { Cart } from './components/Cart/Cart.js';

function App() {
  const produtosHome = [
    {
      id: 1,
      nome: 'Chocolate Kit Kat ao Leite Nestlé - 41,5g',
      descricao: 'O melhor break de todos! Impossível não se deliciar com essa clássica combinação de chocolate ao leite com wafer. Perfeito para te acompanhar no break, em um formato que dá para levar no bolso, na mochila, em qualquer lugar.',
      preco: 3.00,
      img: 'https://images-americanas.b2w.io/produtos/01/00/img/44414/1/44414154_1SZ.jpg'
    },
    {
      id: 2,
      nome: 'Paçoca Moreninha Do Rio ',
      descricao: 'Doce tradicional da culinária brasileira, amplamente apreciado em todo o país. Feita a partir de uma combinação simples, mas irresistível, de amendoim torrado e moído, açúcar e sal, a paçoca possui uma textura granulada e sabor marcante',
      preco: 1.00,
      img: 'https://acdn.mitiendanube.com/stores/002/547/070/products/6211-044af51b90f3e098e316915249977590-1024-1024.webp'
    }
  ];

  const produtosUnico = {
    1: {
      sabores: {
        Ao_Leite: {
          nome: 'Chocolate Kit Kat ao Leite Nestlé - 41,5g',
          descricao: 'O melhor break de todos! Impossível não se deliciar com essa clássica combinação de chocolate ao leite com wafer.',
          preco: 3.00,
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/44414/1/44414154_1SZ.jpg',
          estoque: 6
        },
        Dark: {
          nome: 'Chocolate Kit Kat Dark Nestlé - 41,5g',
          descricao: 'A combinação perfeita para um break mais intenso! Perfeito para te acompanhar no break, em um formato que dá para levar no bolso.',
          preco: 3.00,
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/44414/0/44414058_1SZ.jpg',
          estoque: 3
        },
        Branco: {
          nome: 'Chocolate Kit Kat Branco 41,5g - Nestlé',
          descricao: 'Delicie-se com o Chocolate Kit Kat Branco Nestlé.',
          preco: 3.00,
          img: 'https://images-americanas.b2w.io/produtos/01/00/img3/444138/9/44413832_1SZ.jpg',
          estoque: 1
        }
      }
    },
    2: {

      nome: 'Paçoca Moreninha Do Rio ',
      descricao: 'Doce tradicional da culinária brasileira, amplamente apreciado em todo o país. Feita a partir de uma combinação simples, mas irresistível, de amendoim torrado e moído, açúcar e sal, a paçoca possui uma textura granulada e sabor marcante',
      preco: 1.00,
      img: 'https://acdn.mitiendanube.com/stores/002/547/070/products/6211-044af51b90f3e098e316915249977590-1024-1024.webp',
      estoque: 32

    }


  };

  return (
    <>
      <CartProvider>
        <div className="App" >
          <Routes>
            <Route path='/' element={<Home produtosHome={produtosHome} />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/produto/:id' element={<UnicoProduto produtosUnico={produtosUnico} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div >
      </CartProvider>
    </>
  );
}

export default App;

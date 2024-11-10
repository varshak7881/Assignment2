
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CakePage from './pages/CakePage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  const [cakes] = useState([
    { id: 1, name: 'Chocolate Cake', price: 10, image: 'https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full', description: 'Delicious chocolate cake.' },
    { id: 2, name: 'Vanilla Cake', price: 8, image: 'https://i.ytimg.com/vi/nfFrxw0kxYc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbE2HlCXW1-SLYkSL0XShTodmJXQ', description: 'Creamy vanilla cake.' },
    { id: 3, name: 'Red Velvet Cake', price: 12, image:'https://i.ytimg.com/vi/vGE-RfP6KRE/maxresdefault.jpg',description:'wow redvelvet cake'},
    { id: 4, name: 'Mango Cake',price: 20,image:'https://abicake.com/cdn/shop/files/Mango-Cake.png?v=1701886572',description:'superb mango cake'},
    { id: 5, name: 'Chocolate Chip Cake',price: 18,image:'https://hbtbakery.com/wp-content/uploads/2023/10/HBT_compressed-1_page-0068.jpg',description:'choco creamy choco chips cake'},
    { id: 6, name: 'Mix fruit cake', price:22,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK40hD1VWzxtD_nx_Y-7LDl0fMo_Ng_F8Qyw&s',description:'fruit funfest venilla cake'},
  ]);

  const [selectedCake, setSelectedCake] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const viewCakeDetails = (cake) => {
    setSelectedCake(cake);
  };

  const addToCart = (cake) => {
    setCartItems([...cartItems, cake]);
  };

  return (
    <div className="app">
      <Navbar cartItemsCount={cartItems.length} />
      {selectedCake ? (
        <CakePage selectedCake={selectedCake} addToCart={addToCart} />
      ) : (
        <Home cakes={cakes} viewCakeDetails={viewCakeDetails} />
      )}
      <Cart cartItems={cartItems} />
      <Footer />
    </div>

  );
};

export default App;

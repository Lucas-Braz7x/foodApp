import React from 'react';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { Cart } from './components/Cart';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals';

function App() {
  const [mealsList, setMealsList] = useState([]);
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    fetch('./database.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => setMealsList(res));
  }, []);

  const handleShowCart = () => {
    setCartModal(!cartModal);
  }
  return (
    <Fragment>
      {cartModal && <Cart onHideCart={handleShowCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals mealsList={mealsList} />
      </main>
    </Fragment>
  );
}

export default App;

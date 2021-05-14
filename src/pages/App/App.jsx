import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as productsAPI from '../../utilities/products-api';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import InventoryPage from '../InventoryPage/InventoryPage';
import OrderIndexPage from '../OrderIndexPage/OrderIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  
  useEffect(function () {
    async function getProducts() {
      const productsIndex = await productsAPI.getAll();
      setProducts(productsIndex);
    }
    getProducts();
  }, []);

  return (
    <main className="App has-background-primary-light">
      { user ? 
      <>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path='/orders/new'>
            <NewOrderPage 
              products={products}
              setProducts={setProducts}
            />
          </Route>
          <Route path='/orders'>
            <OrderIndexPage />
          </Route>
          <Route path='/inventory'>
            <InventoryPage
              products={products}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setProducts={setProducts}
            />
          </Route>
          <Redirect to='/inventory' />
        </Switch>
      </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

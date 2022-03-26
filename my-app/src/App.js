import React, {useState, useEffect} from 'react';
import './App.css';
import Filter from './Filter';
import ProductContainer from './ProductContainer';
// import ProductContainer from './ProductContainer';
function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async() => {
   const url = 'https://assessment-edvora.herokuapp.com/'
   const response =  await fetch(url);
   const products = await response.json();
   setProducts(products);
  }

  useEffect(() => {
   getProducts();
  },[])

  return (
  <div className="app-container">
    <header className='header-container'>
        <h1 className='title'>heraclitus</h1>
        <p className='subtitle'>Products</p>
    </header>
    <main>
    <Filter products={products} />
    <ProductContainer products = {products}/>
    <ProductContainer products = {products}/>
    </main>
    </div> )
}
export default App
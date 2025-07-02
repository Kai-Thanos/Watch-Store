import React from 'react'
import { useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import DisplayPro from '../../components/DisplayPro/DisplayPro';

const Home = () => {
    const [category, setCategory] = useState('Apple')
  return (
    <div>
        <ProductList category={category} setCategory={setCategory}/>
        <DisplayPro category={category}/>

    </div>
  )
}

export default Home

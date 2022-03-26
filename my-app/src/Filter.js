import React, {useState} from 'react'
import './Filter.css'
import FilterMenu from './FilterMenu'

function Filter({products}) {

    return (
      <aside className='filter-container'>
        <p className='filter-title'>Filters</p>
        
        <FilterMenu products = {products} type="Products" key='Products'/>
        <FilterMenu products = {products} type="State" key='State'/>
        <FilterMenu products = {products} type="City" key="City"/>

         </aside>
    )
  }
  
  export default Filter;

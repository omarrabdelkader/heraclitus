import React, {useState} from 'react'

function FilterMenu({type, products}) {
    
    let productValuesArray = [];

    function setProductValuesArray(value){
        productValuesArray = value;
    }
    
    const [menuDisplay, setMenuDisplay] = useState(false);
    const toggleMenuDisplay = (e) => {
        e.preventDefault();
        setMenuDisplay(!menuDisplay);
    }
    
    products.map((product => {
            if(type === "Products"){
                setProductValuesArray([...productValuesArray, product.product_name]);
                setProductValuesArray([...new Set(productValuesArray)]);
            }
            else if(type === "State"){
                setProductValuesArray([...productValuesArray, product.address.state]);
                setProductValuesArray([...new Set(productValuesArray)]);
            }
            else if(type === "City"){
                setProductValuesArray([...productValuesArray, product.address.city]);
                setProductValuesArray([...new Set(productValuesArray)]);
            }
    }))
    
    return (
    <div>
        <button className='filter-button' onClick={toggleMenuDisplay}>
            {type}   
        </button>
        { menuDisplay ? <div className='menu'>
           {productValuesArray.map((productValue => {
             return <button className='productValue-btn'>{productValue}</button>
           }))}
        </div> : ''} 
    </div>
  )
}

export default FilterMenu
import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

   const ProductContainer = ({products}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(4)
    const indexOfLastPage =  currentPage * productsPerPage
    console.log(indexOfLastPage)
    const indexOfFirstPage = indexOfLastPage - productsPerPage
    console.log(indexOfFirstPage)
    const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage)
    console.log(currentProducts)
    const totalProducts = products.length
    console.log(totalProducts)
    const MaxPages = Math.ceil(totalProducts/productsPerPage)

    const nextPage = () => {
      if (currentPage < MaxPages) {
        setCurrentPage(currentPage + 1)
      }
    }

    const previousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }
    return(
      <div className='product-container'>
       <button onClick={previousPage} className='btn'>
       <FontAwesomeIcon icon={faArrowLeft} className='arrowBtn'>
         Pervious
        </FontAwesomeIcon>
         </button>
       <ul className='list-container'>
      {currentProducts.map((product) => (<li  className='list-group-item'>
                  <img className='img-product' src={product.image} alt={product.product_name}/>
                   <div className='colo-info'>
                   <p className='product_info'>{product.product_name}</p>
                  <p className='product_info'>{product.brand_name}</p>
                  <p className='product_info'>{product.price}$</p>
                  
                   </div>
              </li>))}
      </ul>

       <button onClick = {nextPage} className='btn'>
       <FontAwesomeIcon icon={faArrowRight} className='arrowBtn'>
         Pervious
        </FontAwesomeIcon>
         </button>
      </div>)
      
   }
  
  
  
  


export default ProductContainer
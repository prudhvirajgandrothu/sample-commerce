
import React from 'react'
import Cookies from 'js-cookie'
import {  useNavigate } from 'react-router-dom';
import AllProductsSection from '../AllProductsSection'
import './index.css'

 


function Products() {
    const navigate = useNavigate()

    const onClickLogout = () => {
        
       
        Cookies.remove('jwt_token')
        navigate('/lg')
        
      }
    return (
        <>
         <button
            type="button"
            
            onClick={onClickLogout}
          >
            Logout
          </button>
        <div> <AllProductsSection /></div>
            
        </>
    )

}
export default Products

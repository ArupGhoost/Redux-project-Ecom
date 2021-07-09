import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts} from '../ActionEcom/index.js';
import axios from 'axios';
import ProductComponents from '../Container/ProductComponents';

const ProductListing = () => {
       const products = useSelector((state) => state.allProducts.products);
       const dispatch = useDispatch();
       
       const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
                console.log('Err', err)
            });
            dispatch(setProducts(response.data)); 
            
       };

       useEffect(() =>{
           fetchProducts();
       },[]);

       console.log('Products: ',products);

    return (
        <>
          <div className='ui container center'>
              <ProductComponents />
          </div>  
        </>
    )
}

export default ProductListing

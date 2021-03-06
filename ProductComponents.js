import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponents = () => {

    const products = useSelector((state) => state.allProducts.products);
      const renderList =  products.map((product) => {
        const { id, title, image, price, category } = product;
       return(
         <div className='four column wide' key={id} style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
        <div className='ui link cards'>
          <div className='card'>
            <div className='image' >
              <img src={image} alt={title} style={{width:'25%'}}/>
            <div className='content'>
            <div className='header'>
              {title}
            </div>
            <div className='meta price'> $ {price}</div>
            <div className='meta'>{category}</div>
            </div>

            </div>
          </div>

        </div>
          
      </div>
       );
       
     });

    return (
        <>{renderList}</>
    );
}


export default ProductComponents;

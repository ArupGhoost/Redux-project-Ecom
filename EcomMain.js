import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ProductDetails from './ProductDetails';
import ProductListing from './ProductListing';



const Ecommercemain = () => {

    useEffect(() =>{
            document.title = 'Ecommerce Pract'
    }, []) 

    return (
        <>
        <Router>
        <Header />
         <Switch>
          <Route path='/' exact component={ProductListing}/>
          <Route path='/product/:productId' exact component={ProductDetails}/>
          <Route>404 Not Found!</Route>
          </Switch>
          </Router>
        </>
    )
}

export default Ecommercemain;

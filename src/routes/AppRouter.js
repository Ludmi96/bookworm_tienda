import Cart from '../components/Cart/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const AppRouter = () => {

    return (
      <BrowserRouter>
      <>
            <Navbar />
            <Routes>
              <Route path='/' element={ <ItemListContainer /> }/>
              <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
              <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='*' element={ <Navigate to={"/"}/> }/>
            </Routes>
        </>
      </BrowserRouter>
       
    )
}

export default AppRouter
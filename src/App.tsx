import React from 'react';
import { BrowserRouter as Router,  Route, Routes, } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Goods from './pages/Goods';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App" data-testid='app' >
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Catalog />} />
            <Route path='/:id' element={<Goods />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>         
        </main>
        <Footer />
      </Router >
    </div>

  );
}

export default App;

import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/Header';
import Categoria from './pages/Categoria';
import Home from './pages/Home'
import Post from './pages/Post';
import Sobre from './pages/Sobre'
import Page404 from './pages/page404';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      {/*Estatico */}
      <Header />
      <Routes>
      {/*Dinamico*/}
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

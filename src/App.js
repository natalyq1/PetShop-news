import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/Header';
import Home from './pages/Home'
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
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css'
import Home from './pages/home';
import Presentation from './pages/presentation';
import Veille from './pages/veille';
import Entreprise from './pages/entreprise';
import Projet from './pages/projet';


function App() {
  return (
    <BrowserRouter>
          <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entreprise" element={< Entreprise/>} />
        <Route path="/presentation" element={< Presentation/>} />
        <Route path="/projet" element={< Projet/>} />
        <Route path="/veille" element={< Veille/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
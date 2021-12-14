import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';
import AlertDisplay from './components/AlertDisplay';


function App() {
  return (
  <BrowserRouter>
    <AlertDisplay/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

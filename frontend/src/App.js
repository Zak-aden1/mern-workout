import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';

import Navbar from './components/Navbar';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Details />}/>
            <Route path='/:type' element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

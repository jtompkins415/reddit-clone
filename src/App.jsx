import {useState} from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav'
import LandingPage from './pages/LandingPage';
import './App.css'

function App() {
  
  const [currUser, setCurrUser] = useState('');


  return (
    <>
    <header>
      <HeaderNav currUser={currUser} />
    </header>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

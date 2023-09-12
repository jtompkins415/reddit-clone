import {useState} from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav'
import './App.css'

function App() {
  
  const [currUser, setCurrUser] = useState('');


  return (
    <>
    <header>
      <HeaderNav currUser={currUser} />
    </header>
     
    </>
  )
}

export default App

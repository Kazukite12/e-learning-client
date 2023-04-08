import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter,Routes,Route, BrowserRouter } from 'react-router-dom'
import Login from './component/login'
import Home from './component/home'
import Register from './component/register'

function App() {

  const [name, setName] = useState('');

  useEffect(() => {
    (
      async () => {
          const response = await fetch('http://localhost:8080/api/user', {
            method:'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
          });
          const content = await response.json();
          setName(content.user[0].name);
          console.log(name)
      } 
    )();

  },[]);




  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home name={name}/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

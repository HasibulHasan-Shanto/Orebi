
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Shope from './components/pages/Shope';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shope' element={<Shope />}/>
      </Routes>
    </>
  )
}

export default App

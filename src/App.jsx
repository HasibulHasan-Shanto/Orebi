
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Shope from './components/pages/Shope';
import Error from './components/pages/Error';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shope' element={<Shope />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  )
}

export default App

import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import Home from './Pages/Home';

import PageNotFound from './Pages/404Page';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

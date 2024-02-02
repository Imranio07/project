import React from 'react';
import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./menu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
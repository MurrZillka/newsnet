import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPage} from '002_pages/MainPage';
import {AboutPage} from '002_pages/AboutPage/ui/AboutPage';

function App() {
  return (
    <div className="app">
        <Link to="/">Главная страница</Link>
        <Link to="/about">О компании</Link>

        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

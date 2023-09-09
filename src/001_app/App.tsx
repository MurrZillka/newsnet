import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from '006_shared/lib/styles';
import {MainPage} from '002_pages/MainPage';
import {AboutPage} from '002_pages/AboutPage';

function App() {
    return (
        <div className={classNames('app')}>
            <Link to="/">Главная страница</Link>
            <Link to="/about">О компании</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

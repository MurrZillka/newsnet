import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from '006_shared/lib/styles';
import {MainPage} from '002_pages/MainPage';
import {AboutPage} from '002_pages/AboutPage';
import {useAppTheme} from '001_app/providers/appThemeProvider/lib/useAppTheme';
import {useTranslation} from 'react-i18next';

function App() {

    const {appTheme} = useAppTheme()
    const {t, i18n} = useTranslation()

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={classNames('app', {}, [appTheme])}>
                <Link to="/">{t('Главная страница')}</Link>
                <Link to="/about">{t('О компании')}</Link>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <button onClick={toggleLang}>{t('Перевод')}</button>
            </div>
        </Suspense>
    );
}

export default App;

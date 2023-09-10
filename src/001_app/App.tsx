import React, {Suspense, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {classNames} from '006_shared/lib/styles';
import {MainPage} from '002_pages/MainPage';
import {AboutPage} from '002_pages/AboutPage';
import {useAppTheme} from '001_app/providers/appThemeProvider/lib/useAppTheme';
import {useTranslation} from 'react-i18next';
import {Navbar} from '003_widjets/Navbar/ui/Navbar';
import {Modal} from '006_shared/ui/Modal/Modal';

function App() {

    const {appTheme} = useAppTheme()
    const {t, i18n} = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={classNames('app', {}, [appTheme])}>
                <Navbar />
                <button onClick={toggleLang}>{t('Перевод')}</button>
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}>

                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis
                    doloribus illo impedit magnam maxime tempora voluptates. Adipisci aliquam atque
                    aut consequatur dolore dolorem ducimus ea eveniet ex exercitationem fugiat fugit
                    id illum, impedit iure iusto magnam minima, nostrum, numquam obcaecati omnis
                    placeat sapiente ut veniam voluptatum? Accusamus, officiis, qui!'
                </Modal>
                <div className="content-page">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </div>
        </Suspense>
    );
}

export default App;

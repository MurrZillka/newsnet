import React, {FC, useCallback, useState} from 'react';
import {classNames} from '006_shared/lib/styles';
import s from './Navbar.module.scss'
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Modal} from '006_shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className = ''}) => {

    const {t} = useTranslation()
    const [isSignInModal, setIsSignInModal] = useState(false);
    const [isSignUpModal, setIsSignUpModal] = useState(false);

    const onToggleSignInModal = useCallback(() => {
        setIsSignInModal(prev => !prev)
    }, [])

    const onToggleSignUpModal = useCallback(() => {
        setIsSignUpModal(prev => !prev)
    }, [])

    return (
        <nav className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <Link className={s.link} to="/">{t('Главная страница')}</Link>
                <Link className={s.link} to="/about">{t('О компании')}</Link>
            </div>
            <div className={s.links}>
                <button
                    className={s.button}
                    onClick={onToggleSignInModal}
                >{t('Войти')}
                </button>

                <button
                    className={s.button}
                    onClick={onToggleSignUpModal}
                >
                    {t('Регистрация')}
                </button>
            </div>
            <Modal
                 isOpen={isSignInModal}
                 onClose={onToggleSignInModal}
            >
               <h1>Окно входа</h1>
            </Modal>
            <Modal
                isOpen={isSignUpModal}
                onClose={onToggleSignUpModal}
            >
                <h1>Окно регистрации</h1>
            </Modal>
        </nav>
    );
};

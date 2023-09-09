import React, {FC} from 'react';
import {classNames} from '006_shared/lib/styles';
import s from './Navbar.module.scss'
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

interface NavbarProps {
    className?:string;
}

export const Navbar:FC<NavbarProps> = ({className = ''}) => {

    const {t} = useTranslation()

    return (
        <nav className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <Link className={s.link} to="/">{t('Главная страница')}</Link>
                <Link className={s.link} to="/about">{t('О компании')}</Link>
            </div>
            <div className={s.links}>
                <button className={s.button}>{t('Войти')}</button>
                <button className={s.button}>{t('Регистрация')}</button>
            </div>
        </nav>
    );
};

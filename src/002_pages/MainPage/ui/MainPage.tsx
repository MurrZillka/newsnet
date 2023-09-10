import {FC} from 'react';
import {classNames} from '006_shared/lib/styles';
import s from './MainPage.module.scss'
import {useTranslation} from 'react-i18next';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = ({className = ''}) => {

    const {t} = useTranslation('mainPage')

    return (
        <div className={classNames(s.MainPage, {}, [className])}>
            <h1>{t('Главная страница')}</h1>
        </div>
    );
};

export default MainPage;

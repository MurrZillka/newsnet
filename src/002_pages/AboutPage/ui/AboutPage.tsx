import {FC} from 'react';
import {classNames} from '006_shared/lib/styles';
import s from './AboutPage.module.scss'
import {useTranslation} from 'react-i18next';

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = ({className = ''}) => {

    const {t} = useTranslation('aboutPage')

    return (
        <div className={classNames(s.AboutPage, {}, [className])}>
            <h1>{t('О компании')}</h1>
        </div>
    );
};

export default AboutPage;

import {FC} from 'react';
import {classNames} from '006_shared/lib/styles';
import s from './AboutPage.module.scss'

// import {useTranslation} from 'react-i18next';

interface AboutPageProps {
    className?: string;
}

export const AboutPage: FC<AboutPageProps> = ({className = ''}) => {

    // const {t} = useTranslation()

    return (
        <div className={classNames(s.AboutPage, {}, [className])}>
            <h1>About Page</h1>
        </div>
    );
};

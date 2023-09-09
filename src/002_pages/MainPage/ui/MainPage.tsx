import {FC} from 'react';
import {classNames} from '006_shared/lib/styles';
import s from './MainPage.module.scss'

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = ({className = ''}) => {

    return (
        <div className={classNames(s.MainPage, {}, [className])}>
            <h1>Main Page</h1>
        </div>
    );
};

export default MainPage;

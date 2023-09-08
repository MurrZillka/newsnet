import {appThemeContext, AppThemes} from './themeContext';
import {useContext} from 'react';


const LOCAL_STORAGE_APP_THEME_KEY = 'theme';

interface UseThemeResult {
    appTheme: AppThemes;
    toggleAppTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const context = useContext(appThemeContext);

    if (!context) {
        throw new Error('Context must have a value')
    }
    const {appTheme, setAppTheme} = context;

    const toggleAppTheme = () => {

        const newAppTheme = appTheme === AppThemes.LIGHT
            ? AppThemes.DARK
            : AppThemes.LIGHT;

        setAppTheme(newAppTheme);
        localStorage.setItem(LOCAL_STORAGE_APP_THEME_KEY, newAppTheme)
    };

    return {appTheme, toggleAppTheme}
}

import {appThemeContext, AppThemes} from '001_app/providers/appThemeProvider/lib/appThemeContext';
import {useContext} from 'react';

export const LOCAL_STORAGE_APP_THEME_KEY = 'theme';

interface UseThemeResult {
    appTheme: AppThemes;
    toggleAppTheme: () => void;
}

export function useAppTheme(): UseThemeResult {
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

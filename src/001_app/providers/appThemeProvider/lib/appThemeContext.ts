import {createContext} from 'react';

export const enum AppThemes {
    LIGHT = 'light',
    DARK = 'dark',
}

export type AppThemeContextProps = {
    appTheme: AppThemes;
    setAppTheme: (appTheme: AppThemes) => void;
} | undefined;

export const appThemeContext = createContext<AppThemeContextProps>(undefined);

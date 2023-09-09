import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_APP_THEME_KEY} from '../lib/useAppTheme';
import {AppThemes, appThemeContext} from '../lib/appThemeContext';


const defaultAppTheme = localStorage.getItem(
    LOCAL_STORAGE_APP_THEME_KEY) as AppThemes || AppThemes.LIGHT;

type AppThemeProviderProps = {
    children: React.ReactNode
}

export const AppThemeProvider: FC<AppThemeProviderProps> =
    ({children}) => {

        const [appTheme, setAppTheme] = useState(defaultAppTheme);

        const defaultAppThemeProps = useMemo(() => ({
            appTheme, setAppTheme
        }), [appTheme]);

        return (
            <appThemeContext.Provider value={defaultAppThemeProps}>
                {children}
            </appThemeContext.Provider>
        )
    }

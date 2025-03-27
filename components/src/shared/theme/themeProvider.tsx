import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationLightTheme,
    Theme as NavigationTheme,
} from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { fontConfig } from './fontConfig'

export interface AppTheme extends Omit<NavigationTheme, 'fonts'> {
    colors: NavigationTheme['colors'] & {
        primaryAlt?: string
        onPrimary?: string
        background?: string
        secondary?: string
        surface?: string
        onSurface?: string
        secondaryAlt?: string
        primaryContainer?: string
        accent?: string
        onAccent?: string
        text?: string
        textReverse?: string
        divider?: string
        textSecondary?: string
        disabled?: string
        placeholder?: string
        cancel: string
        error: string
        notification: string
        success: string
        warning: string
        border: string
        errorText: string
        graycaption: string
    }
    elevation: {
        none: number
        low: number
        medium: number
        high: number
    }
    fonts: {
        displayLarge: {
            fontSize: number
            fontFamily: string
        }
        displayMedium: {
            fontSize: number
            fontFamily: string
        }
        displaySmall: {
            fontSize: number
            fontFamily: string
        }
        headlineLarge: {
            fontSize: number
            fontFamily: string
        }
        headlineMedium: {
            fontSize: number
            fontFamily: string
        }
        headlineSmall: {
            fontSize: number
            fontFamily: string
        }
        titleLarge: {
            fontSize: number
            fontFamily: string
        }
        titleMedium: {
            fontSize: number
            fontFamily: string
        }
        titleSmall: {
            fontSize: number
            fontFamily: string
        }
        bodyLarge: {
            fontSize: number
            fontFamily: string
        }
        bodyMedium: {
            fontSize: number
            fontFamily: string
        }
        bodySmall: {
            fontSize: number
            fontFamily: string
        }
        labelLarge: {
            fontSize: number
            fontFamily: string
        }
        labelMedium: {
            fontSize: number
            fontFamily: string
        }
        labelSmall: {
            fontSize: number
            fontFamily: string
        }
    }
}

const darkTheme: AppTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        primary: '#006a5f',
        primaryAlt: '#004d40',
        onPrimary: '#ffffff',
        secondary: '#795548',
        secondaryAlt: '#FFC107',
        accent: '#FFF176',
        background: '#121212',
        surface: '#1F1F1F',
        text: '#ffffff',
        textReverse: '#000000',
        textSecondary: '#BDBDBD',
        disabled: '#333333',
        placeholder: '#666666',
        cancel: '#b70202',
        errorText: '#e42929',
        error: '#CF6679',
        notification: '#ff80ab',
        success: '#8BC34A',
        warning: '#ff9800',
        border: '#424242',
        primaryContainer: 'rgba(0, 106, 95, 0.16)',
        graycaption: '#9a9a9a',
    },
    elevation: {
        none: 0,
        low: 1,
        medium: 5,
        high: 10,
    },
    fonts: fontConfig,
}

const lightTheme: AppTheme = {
    ...NavigationLightTheme,
    colors: {
        ...NavigationLightTheme.colors,
        primary: '#006259',
        primaryAlt: '#004d47',
        onPrimary: '#ffffff',

        secondary: '#2E7D73',
        secondaryAlt: '#58AFA0',

        accent: '#93c4f5',
        onAccent: '#ffffff',

        background: '#ffffff',
        surface: '#f4f4f4',
        onSurface: '#333333',

        text: '#1F1F1F',
        textReverse: '#ffffff',
        textSecondary: '#4F4F4F',
        disabled: '#BDBDBD',

        placeholder: '#9E9E9E',
        border: '#D6D6D6',
        divider: '#E0E0E0',

        cancel: '#D32F2F',
        error: '#B00020',
        errorText: '#ffffff',

        success: '#388E3C',
        warning: '#FFA000',

        primaryContainer: '#C2E8E1',
        graycaption: '#757575',
    },
    elevation: {
        none: 0,
        low: 1,
        medium: 5,
        high: 10,
    },
    fonts: fontConfig,
}

export const ThemeContext = createContext<{
    theme: AppTheme
    toggleTheme: () => void
}>({
    theme: lightTheme,
    toggleTheme: () => {},
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                           children,
                                                                       }) => {
    const systemTheme = useColorScheme()
    const [theme, setTheme] = useState<AppTheme>(
        systemTheme === 'dark' ? darkTheme : lightTheme,
    )

    useEffect(() => {
        setTheme(systemTheme === 'dark' ? darkTheme : lightTheme)
    }, [systemTheme])

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme.colors.background === darkTheme.colors.background
                ? lightTheme
                : darkTheme,
        )
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): AppTheme => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme deve ser usado dentro do ThemeProvider')
    }
    return context.theme
}

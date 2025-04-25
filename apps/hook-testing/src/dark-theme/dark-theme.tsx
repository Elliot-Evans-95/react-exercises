import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type UseDarkTheme = {
    theme: Theme;
    toggleTheme: () => void
}

export function useDarkTheme(): UseDarkTheme {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        return savedTheme || 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return {theme, toggleTheme};
}

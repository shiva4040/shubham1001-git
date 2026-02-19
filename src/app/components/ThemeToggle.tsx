import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
            className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-500"
            style={{
                background: isDark
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: isDark
                    ? '1px solid rgba(255,255,255,0.18)'
                    : '1px solid rgba(100,120,200,0.25)',
                boxShadow: isDark
                    ? '0 4px 24px rgba(0,0,0,0.4), 0 0 12px rgba(124,133,255,0.2)'
                    : '0 4px 24px rgba(100,130,220,0.2), 0 2px 8px rgba(0,0,0,0.08)',
                color: isDark ? 'rgba(200,215,255,0.9)' : '#3b4a8a',
                cursor: 'pointer',
            }}
            onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = 'scale(1.08)';
                el.style.boxShadow = isDark
                    ? '0 6px 30px rgba(0,0,0,0.5), 0 0 20px rgba(124,133,255,0.35)'
                    : '0 6px 30px rgba(100,130,220,0.3), 0 2px 8px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = 'scale(1)';
                el.style.boxShadow = isDark
                    ? '0 4px 24px rgba(0,0,0,0.4), 0 0 12px rgba(124,133,255,0.2)'
                    : '0 4px 24px rgba(100,130,220,0.2), 0 2px 8px rgba(0,0,0,0.08)';
            }}
        >
            {/* Animated icon swap */}
            <span
                className="transition-all duration-500"
                style={{
                    display: 'inline-flex',
                    transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)',
                    opacity: 1,
                }}
            >
                {isDark ? (
                    <Sun className="w-4 h-4" style={{ color: '#fbbf24' }} />
                ) : (
                    <Moon className="w-4 h-4" style={{ color: '#6366f1' }} />
                )}
            </span>
            <span className="text-sm font-semibold select-none">
                {isDark ? 'Day' : 'Night'}
            </span>
        </button>
    );
}

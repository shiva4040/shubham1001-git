import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
                background: isLight
                    ? 'linear-gradient(135deg, rgba(79,95,239,0.9), rgba(6,182,212,0.8))'
                    : 'linear-gradient(135deg, rgba(124,133,255,0.8), rgba(0,212,255,0.6))',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: '0 4px 24px rgba(124,133,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeInUp 0.3s ease',
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px) scale(1.08)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(124,133,255,0.55)';
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = '';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(124,133,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
            }}
        >
            <ArrowUp className="w-5 h-5 text-white" />
        </button>
    );
}

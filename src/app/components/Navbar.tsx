import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Heroes', href: '#inspirations' },
    { label: 'Games', href: '#games' },
    { label: 'Wins', href: '#achievements' },
    { label: 'My Day', href: '#daily' },
    { label: 'Dreams', href: '#future' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ids = ['about', 'skills', 'inspirations', 'games', 'achievements', 'daily', 'future'];
        const observers: IntersectionObserver[] = [];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.35 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const isActive = (href: string) => {
        const id = href.replace('#', '');
        return activeSection === id || (id === '' && activeSection === '');
    };

    return (
        <>
            {/* Desktop pill navbar — centered, floating */}
            <nav
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 transition-all duration-400"
                style={{
                    background: isLight
                        ? 'rgba(255,255,255,0.72)'
                        : 'rgba(10,12,35,0.72)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: isLight
                        ? '1px solid rgba(79,95,239,0.18)'
                        : '1px solid rgba(124,133,255,0.18)',
                    borderRadius: '9999px',
                    padding: '5px 8px',
                    boxShadow: isLight
                        ? '0 4px 32px rgba(79,95,239,0.12), 0 1px 0 rgba(255,255,255,0.8) inset'
                        : '0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset',
                }}
            >
                {navLinks.map(({ label, href }) => {
                    const active = isActive(href);
                    return (
                        <a
                            key={label}
                            href={href}
                            className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-250"
                            style={{
                                color: active
                                    ? isLight ? '#fff' : '#fff'
                                    : isLight ? '#374151' : 'rgba(200,215,255,0.75)',
                                background: active
                                    ? isLight
                                        ? 'linear-gradient(135deg, #4f5fef, #0891b2)'
                                        : 'linear-gradient(135deg, rgba(124,133,255,0.85), rgba(0,212,255,0.65))'
                                    : 'transparent',
                                boxShadow: active ? '0 2px 12px rgba(124,133,255,0.4)' : 'none',
                                fontWeight: active ? 600 : 500,
                                textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                                if (!active) {
                                    (e.currentTarget as HTMLAnchorElement).style.background = isLight
                                        ? 'rgba(79,95,239,0.08)'
                                        : 'rgba(124,133,255,0.12)';
                                    (e.currentTarget as HTMLAnchorElement).style.color = isLight ? '#1e2a6e' : '#e0e7ff';
                                }
                            }}
                            onMouseLeave={e => {
                                if (!active) {
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                                    (e.currentTarget as HTMLAnchorElement).style.color = isLight ? '#374151' : 'rgba(200,215,255,0.75)';
                                }
                            }}
                        >
                            {label}
                        </a>
                    );
                })}
            </nav>

            {/* Mobile pill — centered, collapsible */}
            <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
                {/* Collapsed pill trigger */}
                <button
                    onClick={() => setMenuOpen(v => !v)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                    style={{
                        background: isLight ? 'rgba(255,255,255,0.80)' : 'rgba(10,12,35,0.80)',
                        backdropFilter: 'blur(20px)',
                        border: isLight ? '1px solid rgba(79,95,239,0.20)' : '1px solid rgba(124,133,255,0.20)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                        color: isLight ? '#374151' : 'rgba(200,215,255,0.9)',
                    }}
                    aria-label="Toggle menu"
                >
                    <span style={{ color: isLight ? '#4f5fef' : '#a5b4fc' }}>☰</span>
                    Menu
                </button>

                {/* Expanded dropdown pill */}
                {menuOpen && (
                    <div
                        className="mt-2 flex flex-col gap-1 p-2 rounded-3xl"
                        style={{
                            background: isLight ? 'rgba(255,255,255,0.92)' : 'rgba(10,12,35,0.92)',
                            backdropFilter: 'blur(24px)',
                            border: isLight ? '1px solid rgba(79,95,239,0.18)' : '1px solid rgba(124,133,255,0.18)',
                            boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
                            animation: 'fadeInUp 0.2s ease',
                        }}
                    >
                        {navLinks.map(({ label, href }) => {
                            const active = isActive(href);
                            return (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="px-6 py-2 rounded-full text-sm font-medium text-center transition-all duration-200"
                                    style={{
                                        color: active ? '#fff' : isLight ? '#374151' : 'rgba(200,215,255,0.8)',
                                        background: active
                                            ? isLight
                                                ? 'linear-gradient(135deg, #4f5fef, #0891b2)'
                                                : 'linear-gradient(135deg, rgba(124,133,255,0.85), rgba(0,212,255,0.65))'
                                            : 'transparent',
                                        fontWeight: active ? 600 : 500,
                                        textDecoration: 'none',
                                    }}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

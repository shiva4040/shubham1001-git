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
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 80) setActiveSection('');
        };
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
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Close menu on outside click
    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (menuOpen && !(e.target as HTMLElement).closest('[data-navbar]')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, [menuOpen]);

    const isActive = (href: string) => {
        const id = href.replace('#', '');
        return activeSection === id || (id === '' && activeSection === '');
    };

    const pillBg = isLight ? 'rgba(255,255,255,0.80)' : 'rgba(10,12,35,0.80)';
    const pillBorder = isLight ? '1px solid rgba(79,95,239,0.18)' : '1px solid rgba(124,133,255,0.18)';
    const pillShadow = isLight
        ? '0 4px 32px rgba(79,95,239,0.12), inset 0 1px 0 rgba(255,255,255,0.8)'
        : '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)';

    const activeBg = isLight
        ? 'linear-gradient(135deg, #4f5fef, #0891b2)'
        : 'linear-gradient(135deg, rgba(124,133,255,0.85), rgba(0,212,255,0.65))';

    const linkColor = (active: boolean) =>
        active ? '#fff' : isLight ? '#374151' : 'rgba(200,215,255,0.75)';

    return (
        <div data-navbar>
            {/* ── Desktop floating pill ── */}
            <nav
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1"
                style={{
                    background: pillBg,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: pillBorder,
                    borderRadius: '9999px',
                    padding: '5px 8px',
                    boxShadow: pillShadow,
                }}
            >
                {navLinks.map(({ label, href }) => {
                    const active = isActive(href);
                    return (
                        <a
                            key={label}
                            href={href}
                            className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                            style={{
                                color: linkColor(active),
                                background: active ? activeBg : 'transparent',
                                boxShadow: active ? '0 2px 12px rgba(124,133,255,0.35)' : 'none',
                                fontWeight: active ? 600 : 500,
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {label}
                        </a>
                    );
                })}
            </nav>

            {/* ── Mobile pill — left-aligned to avoid ThemeToggle overlap ── */}
            <div
                data-navbar
                className="md:hidden fixed top-3 left-4 z-50 flex flex-col items-start"
            >
                {/* Trigger pill */}
                <button
                    onClick={e => { e.stopPropagation(); setMenuOpen(v => !v); }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                        background: pillBg,
                        backdropFilter: 'blur(20px)',
                        border: pillBorder,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                        color: isLight ? '#374151' : 'rgba(200,215,255,0.9)',
                    }}
                    aria-label="Toggle navigation"
                >
                    {/* Animated bars */}
                    <span className="flex flex-col gap-[3px] w-4">
                        {[0, 1, 2].map(i => (
                            <span
                                key={i}
                                className="block h-[2px] rounded-full transition-all duration-300"
                                style={{
                                    background: isLight ? '#4f5fef' : '#a5b4fc',
                                    width: menuOpen && i === 1 ? '60%' : '100%',
                                    transform: menuOpen && i === 0 ? 'rotate(45deg) translate(2px, 4px)'
                                        : menuOpen && i === 2 ? 'rotate(-45deg) translate(2px, -4px)' : 'none',
                                    opacity: menuOpen && i === 1 ? 0 : 1,
                                }}
                            />
                        ))}
                    </span>
                    <span style={{ color: isLight ? '#374151' : 'rgba(200,215,255,0.9)' }}>
                        Menu
                    </span>
                </button>

                {/* Dropdown */}
                {menuOpen && (
                    <div
                        className="mt-2 flex flex-col gap-0.5 p-2 min-w-[160px]"
                        style={{
                            background: isLight ? 'rgba(255,255,255,0.96)' : 'rgba(10,12,35,0.96)',
                            backdropFilter: 'blur(24px)',
                            border: pillBorder,
                            borderRadius: '20px',
                            boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
                            animation: 'fadeInUp 0.18s ease',
                        }}
                    >
                        {navLinks.map(({ label, href }) => {
                            const active = isActive(href);
                            return (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-150"
                                    style={{
                                        color: linkColor(active),
                                        background: active ? activeBg : 'transparent',
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
        </div>
    );
}

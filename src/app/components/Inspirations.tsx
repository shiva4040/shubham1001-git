import { Star, Quote } from 'lucide-react';
import { Animated } from './Animated';

const heroes = [
    {
        name: 'Albert Einstein',
        emoji: '🧔',
        role: 'Theoretical Physicist',
        why: "He proved that time itself bends! His Theory of Relativity blew my mind. Also, he failed school exams — so there's hope for all of us! 😄",
        quote: '"Imagination is more important than knowledge."',
        color: '#a5b4fc',
        glow: 'rgba(124,133,255,0.4)',
        gradient: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))',
    },
    {
        name: 'Isaac Newton',
        emoji: '🍎',
        role: 'Mathematician & Physicist',
        why: "An apple fell and he discovered gravity — that's the most legendary 'aha!' moment in history. I look at falling objects differently now.",
        quote: '"If I have seen further, it is by standing on the shoulders of giants."',
        color: '#86efac',
        glow: 'rgba(34,197,94,0.4)',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.25), rgba(6,182,212,0.15))',
    },
    {
        name: 'APJ Abdul Kalam',
        emoji: '🚀',
        role: 'Scientist & President of India',
        why: 'He came from a small village just like me and became a rocket scientist AND president of India. The MOST inspiring person ever!',
        quote: '"Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action."',
        color: '#fda4af',
        glow: 'rgba(244,63,94,0.4)',
        gradient: 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(168,85,247,0.15))',
    },
    {
        name: 'Stephen Hawking',
        emoji: '🌌',
        role: 'Cosmologist & Author',
        why: '"A Brief History of Time" is my favourite book. He explained black holes and the Big Bang in a way even a 7th grader can understand!',
        quote: '"Look up at the stars, not down at your feet."',
        color: '#67e8f9',
        glow: 'rgba(6,182,212,0.4)',
        gradient: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(59,130,246,0.15))',
    },
];

export function Inspirations() {
    return (
        <section id="inspirations" className="py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <Animated animation="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 md:mb-4 text-glow-warm font-bold">My Heroes &amp; Inspirations</h2>
                </Animated>
                <Animated animation="fade-up" delay={100}>
                    <p className="text-center mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base" style={{ color: 'var(--text-subtitle)' }}>
                        These legends proved that curiosity + hard work = changing the world! 🌍
                    </p>
                </Animated>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-14">
                    {heroes.map(({ name, emoji, role, why, quote, color, glow, gradient }, i) => (
                        <Animated key={name} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={(i * 100) as 0 | 100 | 200 | 300}>
                            <div
                                className="glass glass-card-hover p-5 md:p-7 rounded-2xl h-full relative overflow-hidden"
                                style={{ background: gradient, border: `1px solid ${color}30` }}
                            >
                                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none"
                                    style={{ background: `radial-gradient(circle, ${glow}, transparent 70%)` }} />
                                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                    <div className="text-4xl md:text-5xl">{emoji}</div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-heading)' }}>{name}</h3>
                                        <p className="text-xs font-medium tracking-wide" style={{ color }}>{role}</p>
                                    </div>
                                    <Star className="w-4 h-4 ml-auto flex-shrink-0" style={{ color: '#fbbf24' }} />
                                </div>
                                <p className="text-xs md:text-sm mb-4 md:mb-5" style={{ color: 'var(--text-body)', lineHeight: 1.75 }}>{why}</p>
                                <div className="rounded-xl p-3 md:p-4" style={{ background: 'var(--glass-bg)', border: `1px solid ${color}25` }}>
                                    <Quote className="w-3.5 h-3.5 mb-1.5" style={{ color }} />
                                    <p className="text-xs italic" style={{ color: 'var(--text-quote)', lineHeight: 1.7 }}>{quote}</p>
                                </div>
                            </div>
                        </Animated>
                    ))}
                </div>

                <Animated animation="zoom-in" delay={200}>
                    <div className="glass-strong p-6 md:p-8 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,133,255,1), transparent)' }} />
                        <div className="relative z-10">
                            <p className="text-base md:text-lg font-medium mb-2" style={{ color: 'var(--text-heading)' }}>
                                🌟 What they all have in common?
                            </p>
                            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
                                They never stopped asking <span className="font-bold" style={{ color: 'var(--icon-accent)' }}>"Why?"</span> — even
                                when adults around them thought they were wasting time. That gives me so much courage.
                                Maybe my weird questions about time machines are not so weird after all! 🚀
                            </p>
                        </div>
                    </div>
                </Animated>
            </div>
        </section>
    );
}

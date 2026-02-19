import { Trophy, Medal, Star, Award } from 'lucide-react';
import { Animated } from './Animated';

const achievements = [
    {
        icon: Trophy,
        title: 'Kabaddi District Champion',
        desc: 'Our team won the district-level Kabaddi competition. I scored the most raid points in the final! 🏆',
        color: '#fbbf24',
        glow: 'rgba(251,191,36,0.5)',
        gradient: 'linear-gradient(135deg, rgba(251,191,36,0.3), rgba(245,158,11,0.15))',
        year: '2024',
    },
    {
        icon: Star,
        title: 'Science Quiz Runner-Up',
        desc: 'Came 2nd in the inter-school science quiz. The question I missed was about chemical formulas — still salty! 😅',
        color: '#a5b4fc',
        glow: 'rgba(124,133,255,0.5)',
        gradient: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.15))',
        year: '2024',
    },
    {
        icon: Medal,
        title: '1st in Class — Science',
        desc: 'Scored the highest in science in my class three terms in a row. Physics never lets me down! 🔬',
        color: '#67e8f9',
        glow: 'rgba(6,182,212,0.5)',
        gradient: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(59,130,246,0.15))',
        year: '2023–24',
    },
    {
        icon: Award,
        title: 'Best Student Award',
        desc: "Won the 'Most Curious Student' award from my class teacher. Yes, that is a real award. Yes, I ask that many questions. 😂",
        color: '#86efac',
        glow: 'rgba(34,197,94,0.5)',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(5,150,105,0.15))',
        year: '2023',
    },
];

const stats = [
    { value: '95%', label: 'Avg. Science Score', emoji: '🧪' },
    { value: '3×', label: 'Kabaddi Champion', emoji: '🏃' },
    { value: '50+', label: 'Books Read', emoji: '📚' },
    { value: '∞', label: 'Questions Asked', emoji: '🤔' },
];

export function Achievements() {
    return (
        <section id="achievements" className="py-24 px-4 aurora-bg">
            <div className="max-w-6xl mx-auto">
                <Animated animation="fade-up">
                    <h2 className="text-4xl md:text-5xl text-center mb-4 text-glow font-bold">My Achievements 🏆</h2>
                </Animated>
                <Animated animation="fade-up" delay={100}>
                    <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-subtitle)' }}>
                        Small wins that keep me motivated for bigger dreams!
                    </p>
                </Animated>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                    {stats.map(({ value, label, emoji }, i) => (
                        <Animated key={label} animation="zoom-in" delay={(i * 100) as 0 | 100 | 200 | 300}>
                            <div className="glass-strong p-6 text-center rounded-2xl">
                                <div className="text-3xl mb-2">{emoji}</div>
                                <div className="text-3xl font-black mb-1 text-glow">{value}</div>
                                <p className="text-xs" style={{ color: 'var(--text-muted-comp)' }}>{label}</p>
                            </div>
                        </Animated>
                    ))}
                </div>

                {/* Achievement cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map(({ icon: Icon, title, desc, color, glow, gradient, year }, i) => (
                        <Animated key={title} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={(i * 100) as 0 | 100 | 200 | 300}>
                            <div className="glass glass-card-hover p-7 rounded-2xl relative overflow-hidden h-full"
                                style={{ background: gradient, border: `1px solid ${color}35` }}>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs font-bold px-2 py-1 rounded-full"
                                        style={{ background: `${color}25`, color, border: `1px solid ${color}40` }}>{year}</span>
                                </div>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                                    style={{ background: `${color}22`, boxShadow: `0 0 20px ${glow}`, border: `1px solid ${color}35` }}>
                                    <Icon className="w-7 h-7" style={{ color }} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-heading)' }}>{title}</h3>
                                <p style={{ color: 'var(--text-body)', lineHeight: 1.75 }}>{desc}</p>
                            </div>
                        </Animated>
                    ))}
                </div>

                {/* Motivational note */}
                <Animated animation="fade-up" delay={300}>
                    <div className="mt-12 p-6 rounded-2xl text-center" style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(16px)',
                    }}>
                        <p className="italic" style={{ color: 'var(--text-quote)', lineHeight: 1.8 }}>
                            "I am not collecting trophies. I am collecting experiences that make me braver, smarter, and more ready for what comes next." 💪
                        </p>
                    </div>
                </Animated>
            </div>
        </section>
    );
}

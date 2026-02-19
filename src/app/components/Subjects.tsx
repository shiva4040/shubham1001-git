import { BookOpen, FlaskConical, Calculator, Globe, Atom, Code } from 'lucide-react';
import { Animated } from './Animated';
import { useRef, useEffect, useState } from 'react';

const subjects = [
    { name: 'Science', icon: FlaskConical, color: '#67e8f9', glow: 'rgba(6,182,212,0.5)', level: 95, desc: 'My absolute favourite! Especially physics.' },
    { name: 'Mathematics', icon: Calculator, color: '#a5b4fc', glow: 'rgba(124,133,255,0.5)', level: 88, desc: 'I love solving tricky problems!' },
    { name: 'Social Studies', icon: Globe, color: '#86efac', glow: 'rgba(34,197,94,0.5)', level: 78, desc: 'History and Geography are pretty cool.' },
    { name: 'English', icon: BookOpen, color: '#fda4af', glow: 'rgba(244,63,94,0.4)', level: 82, desc: 'Reading story books is fun.' },
];

const softSkills = [
    { emoji: '🤔', title: 'Critical Thinking', desc: 'Always questioning how and why things work.' },
    { emoji: '🎯', title: 'Focus', desc: 'When I love something, I go full-send on it.' },
    { emoji: '🤝', title: 'Teamwork', desc: 'Kabaddi & Kho Kho taught me to play together.' },
    { emoji: '💡', title: 'Creativity', desc: 'I come up with wild ideas — time machines, anyone?' },
    { emoji: '📚', title: 'Self-Learning', desc: 'YouTube science channels are my second teacher.' },
    { emoji: '😄', title: 'Optimism', desc: "Even power cuts can't stop my homework!" },
];

function SkillBar({ name, level, color, glow, desc, icon: Icon, delay }: {
    name: string; level: number; color: string; glow: string; desc: string;
    icon: React.ElementType; delay: 0 | 100 | 200 | 300 | 400 | 500 | 600;
}) {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setWidth(level), delay);
                observer.unobserve(el);
            }
        }, { threshold: 0.3 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [level, delay]);

    return (
        <Animated animation="fade-up" delay={delay}>
            <div ref={ref} className="glass p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: `rgba(${color === '#67e8f9' ? '6,182,212' : color === '#a5b4fc' ? '124,133,255' : color === '#86efac' ? '34,197,94' : '244,63,94'},0.2)`, boxShadow: `0 0 12px ${glow}` }}>
                        <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-sm" style={{ color: 'var(--text-heading)' }}>{name}</span>
                            <span className="text-xs font-bold" style={{ color }}>{level}%</span>
                        </div>
                    </div>
                </div>
                <p className="text-xs mb-3" style={{ color: 'var(--text-muted-comp)' }}>{desc}</p>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--glass-bg)' }}>
                    <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                            width: `${width}%`,
                            background: `linear-gradient(90deg, ${color}, ${color}88)`,
                            boxShadow: `0 0 8px ${glow}`,
                        }}
                    />
                </div>
            </div>
        </Animated>
    );
}

export function Subjects() {
    return (
        <section id="skills" className="py-24 px-4 aurora-bg">
            <div className="max-w-6xl mx-auto">
                <Animated animation="fade-up">
                    <h2 className="text-4xl md:text-5xl text-center mb-4 text-glow font-bold">Subjects & Skills</h2>
                </Animated>
                <Animated animation="fade-up" delay={100}>
                    <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-subtitle)' }}>
                        School is actually fun when you love what you're learning!
                    </p>
                </Animated>

                {/* Skill bars */}
                <div className="grid md:grid-cols-2 gap-5 mb-14">
                    {subjects.map((s, i) => (
                        <SkillBar
                            key={s.name}
                            name={s.name}
                            level={s.level}
                            color={s.color}
                            glow={s.glow}
                            desc={s.desc}
                            icon={s.icon}
                            delay={(i * 100) as 0 | 100 | 200 | 300}
                        />
                    ))}
                </div>

                {/* Currently learning highlight */}
                <Animated animation="zoom-in" delay={200}>
                    <div className="glass-strong p-8 mb-14 text-center">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <Atom className="w-8 h-8" style={{ color: '#fbbf24' }} />
                            <h3 className="text-2xl font-bold" style={{ color: 'var(--text-heading)' }}>Currently Geeking Out On 🤓</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mt-6">
                            {[
                                { icon: '⚛️', title: 'Quantum Physics', sub: 'Reading simplified books about particles' },
                                { icon: '🌌', title: 'Space & Cosmos', sub: 'YouTube documentaries every weekend' },
                                { icon: '♟️', title: 'Chess Strategy', sub: 'Trying to beat the computer on hard mode' },
                            ].map(({ icon, title, sub }) => (
                                <Animated key={title} animation="fade-up" delay={100}>
                                    <div className="glass p-5 rounded-2xl">
                                        <div className="text-4xl mb-3">{icon}</div>
                                        <h4 className="font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>{title}</h4>
                                        <p className="text-sm" style={{ color: 'var(--text-muted-comp)' }}>{sub}</p>
                                    </div>
                                </Animated>
                            ))}
                        </div>
                    </div>
                </Animated>

                {/* Soft Skills */}
                <Animated animation="fade-up">
                    <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-heading)' }}>
                        <Code className="inline w-6 h-6 mr-2" style={{ color: 'var(--icon-accent)' }} />
                        Life Skills I'm Building
                    </h3>
                </Animated>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {softSkills.map(({ emoji, title, desc }, i) => (
                        <Animated key={title} animation="zoom-in" delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
                            <div className="glass glass-card-hover p-5 text-center rounded-2xl h-full">
                                <div className="text-3xl mb-3">{emoji}</div>
                                <h4 className="font-semibold mb-2 text-sm" style={{ color: 'var(--text-heading)' }}>{title}</h4>
                                <p className="text-xs" style={{ color: 'var(--text-body)', lineHeight: 1.6 }}>{desc}</p>
                            </div>
                        </Animated>
                    ))}
                </div>
            </div>
        </section>
    );
}

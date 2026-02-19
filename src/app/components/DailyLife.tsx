import { Sun, Moon, Zap, Coffee, BookOpen, Gamepad2 } from 'lucide-react';
import { Animated } from './Animated';

const schedule = [
    {
        time: '6:00 AM',
        icon: Sun,
        title: 'Wake Up & Freshen Up',
        desc: "I'm actually a morning person! (Don't tell my friends — they'd be shocked.) Quick freshen-up and ready to go.",
        color: '#fbbf24',
        side: 'left' as const,
    },
    {
        time: '7:00 AM',
        icon: BookOpen,
        title: 'School Time!',
        desc: 'Hop on the school bus. I use the commute to review notes or read a cool science fact of the day.',
        color: '#a5b4fc',
        side: 'right' as const,
    },
    {
        time: '2:00 PM',
        icon: Coffee,
        title: 'Home & Lunch Break',
        desc: "Back home! Mom's cooking is the real reward for surviving 7 hours of school. Eat, relax, maybe nap a little 😴",
        color: '#86efac',
        side: 'left' as const,
    },
    {
        time: '4:00 PM',
        icon: Zap,
        title: 'Outdoor Games',
        desc: "Kabaddi, Kho Kho, or just running around with village friends. Physical games are my mental reset button!",
        color: '#f97316',
        side: 'right' as const,
    },
    {
        time: '6:30 PM',
        icon: BookOpen,
        title: 'Homework & Study',
        desc: "Science first — always. Then Maths. English last (sorry, English! ✌️). Sometimes I go way too deep into a topic...",
        color: '#67e8f9',
        side: 'left' as const,
    },
    {
        time: '8:30 PM',
        icon: Gamepad2,
        title: 'Gaming & YouTube',
        desc: "Survival games or physics documentary — depends on the mood. Sometimes both at the same time. 😅",
        color: '#f9a8d4',
        side: 'right' as const,
    },
    {
        time: '10:30 PM',
        icon: Moon,
        title: 'Lights Out... (Kind Of)',
        desc: "Officially sleeping. Unofficially thinking about what time actually is and whether parallel universes exist. Night! 🌌",
        color: '#c4b5fd',
        side: 'left' as const,
    },
];

export function DailyLife() {
    return (
        <section id="daily" className="py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <Animated animation="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 md:mb-4 text-glow-warm font-bold">A Day in My Life</h2>
                </Animated>
                <Animated animation="fade-up" delay={100}>
                    <p className="text-center mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base" style={{ color: 'var(--text-subtitle)' }}>
                        From sunrise to late-night existential thoughts — here's how I roll! 🌞
                    </p>
                </Animated>

                <div className="relative">
                    {/* Center line — desktop only */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
                        style={{ background: 'linear-gradient(to bottom, transparent, var(--glow-purple), var(--glow-cyan), transparent)' }} />

                    {/* Mobile left line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px md:hidden"
                        style={{ background: 'linear-gradient(to bottom, transparent, var(--glow-purple), var(--glow-cyan), transparent)' }} />

                    <div className="space-y-5 md:space-y-8">
                        {schedule.map(({ time, icon: Icon, title, desc, color, side }, i) => (
                            <Animated key={time} animation={side === 'left' ? 'fade-right' : 'fade-left'} delay={(i % 3 * 100) as 0 | 100 | 200}>
                                {/* Mobile layout: always left-aligned with left dot */}
                                <div className="md:hidden flex items-start gap-3 pl-10 relative">
                                    {/* Dot on left line */}
                                    <div className="absolute left-[14px] top-4 w-3 h-3 rounded-full border-2 flex-shrink-0"
                                        style={{ background: color, borderColor: 'var(--background)', boxShadow: `0 0 8px ${color}` }} />
                                    <div className="flex-1 glass p-4 rounded-2xl" style={{ border: `1px solid ${color}30` }}>
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ background: `${color}22`, border: `1px solid ${color}40` }}>
                                                <Icon className="w-3.5 h-3.5" style={{ color }} />
                                            </div>
                                            <h4 className="font-bold text-sm" style={{ color: 'var(--text-heading)' }}>{title}</h4>
                                            <span className="text-xs px-2 py-0.5 rounded-full font-medium ml-auto"
                                                style={{ background: `${color}20`, color, border: `1px solid ${color}35` }}>{time}</span>
                                        </div>
                                        <p className="text-xs mt-1" style={{ color: 'var(--text-body)', lineHeight: 1.65 }}>{desc}</p>
                                    </div>
                                </div>

                                {/* Desktop alternating layout */}
                                <div className={`hidden md:flex items-center gap-4 ${side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className="flex-1 glass glass-card-hover p-5 rounded-2xl" style={{ border: `1px solid ${color}30` }}>
                                        <div className="flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                                                style={{ background: `${color}22`, border: `1px solid ${color}40` }}>
                                                <Icon className="w-4 h-4" style={{ color }} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                    <h4 className="font-bold text-sm" style={{ color: 'var(--text-heading)' }}>{title}</h4>
                                                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                                                        style={{ background: `${color}20`, color, border: `1px solid ${color}35` }}>{time}</span>
                                                </div>
                                                <p className="text-sm" style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>{desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full flex-shrink-0 border-2 z-10"
                                        style={{ background: color, borderColor: 'var(--background)', boxShadow: `0 0 12px ${color}` }} />
                                    <div className="flex-1" />
                                </div>
                            </Animated>
                        ))}
                    </div>
                </div>

                <Animated animation="zoom-in" delay={200}>
                    <div className="mt-10 md:mt-14 glass-strong p-6 md:p-8 text-center">
                        <p className="text-base md:text-lg" style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
                            Every day is a little adventure — even if it's just figuring out whether black holes are
                            cooler than surviving on a desert island in a mobile game. Spoiler:
                            <span className="font-bold" style={{ color: 'var(--icon-accent)' }}> black holes win. Always.</span> 🌑
                        </p>
                    </div>
                </Animated>
            </div>
        </section>
    );
}

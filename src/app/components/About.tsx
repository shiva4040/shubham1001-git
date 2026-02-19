import { Brain, Zap, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Animated } from './Animated';

const cards = [
  {
    Icon: Brain,
    title: 'Super Curious',
    desc: "I'm obsessed with time machines and physics. I spend hours wondering \"What actually is time?\" and dreaming about exploring galaxies. My brain never stops asking questions!",
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.7), rgba(139,92,246,0.5))',
    glow: 'rgba(99,102,241,0.45)',
    iconColor: '#a5b4fc',
    delay: 0 as const,
  },
  {
    Icon: Zap,
    title: 'Active & Energetic',
    desc: "Whether it's Kabaddi, Kho Kho, or any physical game, I'm always ready to play! When I'm not running around, you'll find me gaming on my phone.",
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.65), rgba(59,130,246,0.5))',
    glow: 'rgba(6,182,212,0.4)',
    iconColor: '#67e8f9',
    delay: 200 as const,
  },
  {
    Icon: Heart,
    title: 'Future Dreamer',
    desc: "Will I be an engineer? A doctor? Something else? Honestly, I have no idea yet! But that's okay — I'm just enjoying the journey and learning everything I can.",
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.65), rgba(168,85,247,0.5))',
    glow: 'rgba(236,72,153,0.4)',
    iconColor: '#f9a8d4',
    delay: 400 as const,
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Animated animation="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 md:mb-4 text-glow font-bold">About Me</h2>
        </Animated>
        <Animated animation="fade-up" delay={100}>
          <p className="text-center mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base"
            style={{ color: 'var(--text-subtitle)' }}>
            Just a curious 7th grader trying to figure out the universe!
          </p>
        </Animated>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {cards.map(({ Icon, title, desc, gradient, glow, iconColor, delay }) => (
            <Animated key={title} animation="fade-up" delay={delay}>
              <div className="glass glass-card-hover p-6 md:p-8 h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-5"
                  style={{ background: gradient, boxShadow: `0 0 20px ${glow}`, border: '1px solid rgba(255,255,255,0.18)' }}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: iconColor }} />
                </div>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold" style={{ color: 'var(--text-heading)' }}>{title}</h3>
                <p className="text-sm md:text-base" style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            </Animated>
          ))}
        </div>

        <Animated animation="fade-up" delay={200}>
          <div className="glass-strong p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl mb-3 font-semibold" style={{ color: 'var(--text-heading)' }}>Where I'm From 🏡</h3>
                <p className="text-sm md:text-base" style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
                  I live in a small village in India. Not super tiny, but small enough that everyone knows everyone!
                  It's peaceful here, and the best part? When there's a power cut (which happens more often than I'd like),
                  I can actually see the stars clearly at night. That's when I think about galaxies the most!
                </p>
              </div>
              <Animated animation="fade-left" delay={300} className="w-full md:w-1/3">
                <div className="rounded-2xl overflow-hidden" style={{
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}>
                  <ImageWithFallback src="/shubham.png" alt="Shubham" className="w-full h-40 md:h-48 object-cover" />
                </div>
              </Animated>
            </div>
          </div>
        </Animated>
      </div>
    </section>
  );
}


import { Brain, Zap, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cards = [
  {
    Icon: Brain,
    title: 'Super Curious',
    desc: "I'm obsessed with time machines and physics. I spend hours wondering \"What actually is time?\" and dreaming about exploring galaxies. My brain never stops asking questions!",
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.7), rgba(139,92,246,0.5))',
    glow: 'rgba(99,102,241,0.45)',
    iconColor: '#a5b4fc',
  },
  {
    Icon: Zap,
    title: 'Active & Energetic',
    desc: "Whether it's Kabaddi, Kho Kho, or any physical game, I'm always ready to play! When I'm not running around, you'll find me gaming on my phone.",
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.65), rgba(59,130,246,0.5))',
    glow: 'rgba(6,182,212,0.4)',
    iconColor: '#67e8f9',
  },
  {
    Icon: Heart,
    title: 'Future Dreamer',
    desc: "Will I be an engineer? A doctor? Something else? Honestly, I have no idea yet! But that's okay — I'm just enjoying the journey and learning everything I can.",
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.65), rgba(168,85,247,0.5))',
    glow: 'rgba(236,72,153,0.4)',
    iconColor: '#f9a8d4',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-glow font-bold">About Me</h2>
        <p className="text-center mb-16 max-w-2xl mx-auto"
          style={{ color: 'var(--text-subtitle)' }}>
          Just a curious 7th grader trying to figure out the universe (and which college course to pick!)
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map(({ Icon, title, desc, gradient, glow, iconColor }) => (
            <div key={title} className="glass glass-card-hover p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: gradient, boxShadow: `0 0 20px ${glow}`, border: '1px solid rgba(255,255,255,0.18)' }}>
                <Icon className="w-6 h-6" style={{ color: iconColor }} />
              </div>
              <h3 className="text-xl mb-3 font-semibold" style={{ color: 'var(--text-heading)' }}>{title}</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-strong p-8 mt-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: 'var(--text-heading)' }}>Where I'm From 🏡</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
                I live in a small village in India. Not super tiny, but small enough that everyone knows everyone!
                It's peaceful here, and the best part? When there's a power cut (which happens more often than I'd like),
                I can actually see the stars clearly at night. That's when I think about galaxies and space the most!
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="rounded-2xl overflow-hidden" style={{
                border: '1px solid var(--glass-border)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}>
                <ImageWithFallback src="/shubham.png" alt="Shubham" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

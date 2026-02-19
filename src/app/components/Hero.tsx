import { Sparkles, MapPin } from 'lucide-react';
import { Animated } from './Animated';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden aurora-bg">
      {/* Top glow ring */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--glow-purple), var(--glow-cyan), transparent)' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <Animated animation="fade-down" delay={0}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-pill mb-8"
            style={{ color: 'var(--text-body)' }}>
            <Sparkles className="w-4 h-4" style={{ color: '#fbbf24' }} />
            <span className="text-sm font-medium tracking-wide">Class 7 Student</span>
          </div>
        </Animated>

        {/* Heading */}
        <Animated animation="fade-up" delay={100}>
          <h1 className="text-5xl md:text-7xl mb-5 leading-tight" style={{ color: 'var(--text-heading)' }}>
            Hi, I'm{' '}
            <span className="text-glow" style={{ fontWeight: 800, fontSize: 'inherit', display: 'inline-block' }}>
              Shubham
            </span>
          </h1>
        </Animated>

        {/* Subtitle */}
        <Animated animation="fade-up" delay={200}>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--hero-subtitle)', lineHeight: 1.6 }}>
            Future physicist, time machine enthusiast, and gaming champion
          </p>
        </Animated>

        {/* Location */}
        <Animated animation="fade-up" delay={300}>
          <div className="flex items-center justify-center gap-2 mb-10"
            style={{ color: 'var(--text-muted-comp)' }}>
            <MapPin className="w-4 h-4" />
            <span className="text-sm">From a small village in India 🇮🇳</span>
          </div>
        </Animated>

        {/* CTA Buttons */}
        <Animated animation="fade-up" delay={400}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#about"
              className="relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(124,133,255,0.8), rgba(0,212,255,0.6))',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: '0 4px 24px var(--glow-purple), inset 0 1px 0 rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              About Me
            </a>
            <a
              href="#future"
              className="px-8 py-3.5 rounded-full font-semibold transition-all duration-300"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-body)',
                backdropFilter: 'blur(12px)',
                boxShadow: 'var(--glass-shadow)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--glass-bg-hover)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--glass-bg)';
              }}
            >
              My Dreams ✨
            </a>
          </div>
        </Animated>
      </div>

      {/* Floating emoji decorations */}
      <div className="gentle-bounce absolute top-20 left-10 text-4xl select-none" style={{ animationDelay: '0s' }}>🎮</div>
      <div className="gentle-bounce absolute top-40 right-10 text-4xl select-none" style={{ animationDelay: '0.8s' }}>🏃</div>
      <div className="gentle-bounce absolute bottom-40 left-20 text-4xl select-none" style={{ animationDelay: '1.6s' }}>🔬</div>
      <div className="gentle-bounce absolute bottom-20 right-20 text-4xl select-none" style={{ animationDelay: '2.4s' }}>🌌</div>
    </section>
  );
}

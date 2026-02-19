import { Heart } from 'lucide-react';
import { Animated } from './Animated';

export function Footer() {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      <div className="section-glow-divider mb-16" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, var(--glow-purple), transparent 70%)',
        opacity: 0.35,
      }} />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <Animated animation="zoom-in">
          <div className="glass-strong p-10 max-w-2xl mx-auto">
            <Animated animation="fade-down" delay={100}>
              <h3 className="text-3xl mb-2 font-bold text-glow">Shubham</h3>
            </Animated>
            <Animated animation="fade-up" delay={200}>
              <p className="mb-6" style={{ color: 'var(--text-subtitle)' }}>
                Class 7 Student · Future Physicist · Gaming Enthusiast
              </p>
            </Animated>

            <Animated animation="fade-up" delay={300}>
              <div className="flex items-center justify-center gap-2 mb-6" style={{ color: 'var(--text-subtitle)' }}>
                <span>Made with</span>
                <Heart className="w-4 h-4 fill-current" style={{ color: '#f472b6' }} />
                <span>and lots of curiosity</span>
              </div>
            </Animated>

            <Animated animation="fade-up" delay={400}>
              <div className="rounded-xl p-5 mb-6" style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
              }}>
                <p className="italic text-sm" style={{ color: 'var(--text-quote)', lineHeight: 1.8 }}>
                  "The important thing is not to stop questioning. Curiosity has its own reason for existing."
                  <br />
                  <span style={{ color: 'var(--text-muted-comp)' }}>— Albert Einstein (My Hero!)</span>
                </p>
              </div>
            </Animated>

            <Animated animation="fade-up" delay={500}>
              <div className="text-sm" style={{ color: 'var(--text-muted-comp)' }}>
                <p>© 2026 Shubham's Portfolio</p>
                <p className="mt-1">Still figuring out life, one question at a time! 🚀</p>
              </div>
            </Animated>
          </div>
        </Animated>
      </div>
    </footer>
  );
}

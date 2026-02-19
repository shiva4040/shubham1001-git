import { Clock, Telescope, Sparkles, HelpCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FutureGoals() {
  return (
    <section id="future" className="py-24 px-4 aurora-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-glow-warm font-bold">My Future Dreams</h2>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-subtitle)' }}>
          Big questions, bigger dreams, and a whole lot of curiosity!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* What is Time */}
          <div className="glass glass-card-hover p-8 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%)' }} />
            <Clock className="w-12 h-12 mb-4" style={{ color: 'var(--icon-accent)' }} />
            <h3 className="text-2xl mb-3 font-semibold" style={{ color: 'var(--text-heading)' }}>What is Time? ⏰</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
              This is THE question that keeps me up at night! Is time just something we invented?
              Can we really travel through it? I want to understand the deepest mysteries of time and maybe,
              just maybe, figure out how to build a time machine someday!
            </p>
          </div>

          {/* Galaxies */}
          <div className="relative overflow-hidden rounded-2xl" style={{
            border: '1px solid var(--glass-border)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            minHeight: '260px',
          }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709408635158-8d735f0395c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMG5lYnVsYXxlbnwxfHx8fDE3NzA2MTkyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Galaxy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(6,8,24,0.88) 0%, rgba(6,8,24,0.4) 50%, rgba(6,8,24,0.15) 100%)',
            }} />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <Telescope className="w-12 h-12 mb-4" style={{ color: '#67e8f9' }} />
              <h3 className="text-2xl mb-3 font-semibold text-white">Learning About Galaxies 🌌</h3>
              <p style={{ color: 'rgba(200,220,255,0.82)', lineHeight: 1.7 }}>
                The universe is HUGE! I want to learn everything about galaxies, black holes, nebulae,
                and all those amazing things floating in space.
              </p>
            </div>
          </div>
        </div>

        {/* Physics Card */}
        <div className="glass-strong p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--glass-border)', boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1734024653249-c6ba7b742ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNzJTIwdGltZSUyMGNvbmNlcHR8ZW58MXx8fHwxNzcwNjQ3MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Physics concept"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8" style={{ color: '#fbbf24' }} />
                <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-heading)' }}>Physics is My Passion</h3>
              </div>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
                I'm fascinated by how everything works! From the tiniest atoms to the biggest stars,
                physics explains it all. I spend my free time reading about Einstein, Newton, and other
                brilliant scientists. Maybe one day my name will be in textbooks too! (A boy can dream, right? 😄)
              </p>
            </div>
          </div>
        </div>

        {/* Career Confusion */}
        <div className="glass p-8" style={{
          border: '1px solid rgba(251,191,36,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 24px rgba(251,191,36,0.06)',
        }}>
          <div className="flex items-start gap-4">
            <HelpCircle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#fbbf24' }} />
            <div>
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: 'var(--text-heading)' }}>
                The Big Question: What Will I Become? 🤔
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }} className="mb-4">
                Honestly? I have NO idea! Everyone keeps asking me: "What do you want to be when you grow up?"
                And I'm like... "Can I be a physicist who also plays Ludo professionally?" 😂
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { emoji: '👨‍🔬', text: 'Maybe a scientist studying time and space?' },
                  { emoji: '👨‍⚕️', text: 'Or a doctor helping people?' },
                  { emoji: '🤷', text: 'Or something completely different!' },
                ].map(({ emoji, text }) => (
                  <div key={text} className="glass p-4 text-center">
                    <div className="text-3xl mb-2">{emoji}</div>
                    <p className="text-sm" style={{ color: 'var(--text-body)' }}>{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm" style={{ color: 'var(--text-muted-comp)' }}>
                <span className="font-semibold" style={{ color: 'var(--text-subtitle)' }}>My current plan:</span> Study hard, keep being curious,
                and figure it out along the way. I've got time! (Speaking of time... see what I did there? 😉)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

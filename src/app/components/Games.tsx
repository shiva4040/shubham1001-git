import { Smartphone, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Animated } from './Animated';

export function Games() {
  const androidGames = [
    { name: 'Last Island of Survival', emoji: '🏝️', description: 'Building shelters and surviving like a pro!' },
    { name: 'Chess', emoji: '♟️', description: 'The classic game where strategy beats luck.' },
    { name: 'And Many More...', emoji: '🎮', description: 'Always exploring and trying new games!' },
  ];

  const physicalGames = [
    { name: 'Kabaddi', emoji: '🏃', description: 'Kabaddi kabaddi kabaddi... *runs out of breath*' },
    { name: 'Kho Kho', emoji: '⚡', description: 'Fast, furious, and super fun!' },
    { name: 'Other Sports', emoji: '⚽', description: 'Cricket, badminton, and more!' },
  ];

  const GameCard = ({ game, delay }: { game: { name: string; emoji: string; description: string }; delay: 0 | 100 | 200 | 300 | 400 | 500 | 600 }) => (
    <Animated animation="fade-up" delay={delay}>
      <div className="glass glass-card-hover p-4">
        <div className="flex items-start gap-3">
          <span className="text-3xl">{game.emoji}</span>
          <div>
            <h4 className="font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>{game.name}</h4>
            <p className="text-sm" style={{ color: 'var(--text-body)' }}>{game.description}</p>
          </div>
        </div>
      </div>
    </Animated>
  );

  return (
    <section id="games" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Animated animation="fade-up">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-glow font-bold">My Gaming World</h2>
        </Animated>
        <Animated animation="fade-up" delay={100}>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-subtitle)' }}>
            Whether it's on my phone or in the playground, I enjoy every form of competition.
          </p>
        </Animated>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Android Games */}
          <Animated animation="fade-right">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center glow-icon"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.7), rgba(5,150,105,0.5))', boxShadow: '0 0 24px rgba(16,185,129,0.5)' }}>
                  <Smartphone className="w-6 h-6" style={{ color: '#6ee7b7' }} />
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-heading)' }}>Android Games</h3>
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                <ImageWithFallback src="/shubham-gaming.png" alt="Playing mobile games" className="w-full h-48 object-cover" />
              </div>
              <div className="space-y-3">
                {androidGames.map((game, i) => <GameCard key={i} game={game} delay={(i * 100) as 0 | 100 | 200} />)}
              </div>
            </div>
          </Animated>

          {/* Physical Games */}
          <Animated animation="fade-left">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center glow-icon"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.7), rgba(234,88,12,0.5))', boxShadow: '0 0 24px rgba(249,115,22,0.5)' }}>
                  <Users className="w-6 h-6" style={{ color: '#fdba74' }} />
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-heading)' }}>Physical Games</h3>
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                <ImageWithFallback src="/shubham-phgame.png" alt="Playing outdoor physical games" className="w-full h-48 object-cover" />
              </div>
              <div className="space-y-3">
                {physicalGames.map((game, i) => <GameCard key={i} game={game} delay={(i * 100) as 0 | 100 | 200} />)}
              </div>
            </div>
          </Animated>
        </div>

        <Animated animation="fade-up" delay={200}>
          <div className="mt-12 glass-strong p-6 text-center">
            <p style={{ color: 'var(--text-subtitle)' }}>
              💡 <span className="font-semibold" style={{ color: 'var(--text-heading)' }}>Fun fact:</span>{' '}
              My Ludo high score? Still undefeated. And in Kabaddi, I once tagged three players in a single raid! 🏆
            </p>
          </div>
        </Animated>
      </div>
    </section>
  );
}
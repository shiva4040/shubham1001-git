import { Hero } from './components/Hero';
import { About } from './components/About';
import { Subjects } from './components/Subjects';
import { Inspirations } from './components/Inspirations';
import { Games } from './components/Games';
import { Achievements } from './components/Achievements';
import { DailyLife } from './components/DailyLife';
import { FutureGoals } from './components/FutureGoals';
import { FunFacts } from './components/FunFacts';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: isLight
          ? 'linear-gradient(160deg, #dde8ff 0%, #eef2ff 45%, #e4f0fb 100%)'
          : '#060818',
        color: isLight ? '#0f1535' : '#e8eaf6',
        transition: 'background 0.5s ease, color 0.4s ease',
      }}
    >
      {/* Fixed background layer */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>

        {isLight ? (
          /* ── DAY background ──────────────────────── */
          <>
            {/* Soft sky gradient */}
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse 130% 80% at 50% -10%, #dbeafe 0%, #f0f4ff 50%, #e8eeff 100%)'
            }} />
            {/* Pastel aurora orbs */}
            <div className="orb" style={{
              width: '55vw', height: '55vw',
              top: '-15%', left: '-10%',
              background: 'radial-gradient(circle, rgba(167,189,255,0.45), transparent 70%)',
              filter: 'blur(80px)',
              animationDuration: '10s',
            }} />
            <div className="orb" style={{
              width: '40vw', height: '40vw',
              top: '20%', right: '-8%',
              background: 'radial-gradient(circle, rgba(147,227,255,0.38), transparent 70%)',
              filter: 'blur(80px)',
              animationDuration: '13s',
              animationDelay: '-4s',
            }} />
            <div className="orb" style={{
              width: '35vw', height: '35vw',
              bottom: '10%', left: '25%',
              background: 'radial-gradient(circle, rgba(216,180,254,0.32), transparent 70%)',
              filter: 'blur(80px)',
              animationDuration: '11s',
              animationDelay: '-7s',
            }} />
            {/* Subtle sunburst rays from top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full" style={{
              height: '40vh',
              background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,220,130,0.18) 0%, transparent 70%)',
            }} />
          </>
        ) : (
          /* ── NIGHT background ────────────────────── */
          <>
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #0d0f2b 0%, #060818 60%, #02040f 100%)'
            }} />
            <div className="orb orb-purple" style={{
              width: '55vw', height: '55vw',
              top: '-15%', left: '-10%',
              opacity: 0.55,
              animationDuration: '10s',
            }} />
            <div className="orb orb-cyan" style={{
              width: '40vw', height: '40vw',
              top: '20%', right: '-8%',
              opacity: 0.4,
              animationDuration: '13s',
              animationDelay: '-4s',
            }} />
            <div className="orb orb-pink" style={{
              width: '35vw', height: '35vw',
              bottom: '10%', left: '25%',
              opacity: 0.35,
              animationDuration: '11s',
              animationDelay: '-7s',
            }} />
            <div className="orb orb-amber" style={{
              width: '30vw', height: '30vw',
              bottom: '30%', right: '20%',
              opacity: 0.28,
              animationDuration: '14s',
              animationDelay: '-2s',
            }} />
            {/* Starfield */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.6) 0%, transparent 100%),
                radial-gradient(1px 1px at 45% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
                radial-gradient(1.5px 1.5px at 70% 35%, rgba(255,255,255,0.7) 0%, transparent 100%),
                radial-gradient(1px 1px at 85% 55%, rgba(255,255,255,0.4) 0%, transparent 100%),
                radial-gradient(1px 1px at 30% 70%, rgba(255,255,255,0.5) 0%, transparent 100%),
                radial-gradient(1.5px 1.5px at 92% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
                radial-gradient(1px 1px at 60% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
                radial-gradient(1px 1px at 10% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
                radial-gradient(1px 1px at 78% 65%, rgba(200,200,255,0.5) 0%, transparent 100%),
                radial-gradient(1px 1px at 22% 48%, rgba(200,220,255,0.4) 0%, transparent 100%),
                radial-gradient(1.5px 1.5px at 5% 60%, rgba(255,255,255,0.55) 0%, transparent 100%),
                radial-gradient(1px 1px at 97% 80%, rgba(255,255,255,0.45) 0%, transparent 100%)
              `
            }} />
          </>
        )}
      </div>

      {/* Theme toggle button (fixed top-right) */}
      <ThemeToggle />

      {/* Page content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <div className="section-glow-divider" />
        <About />
        <div className="section-glow-divider" />
        <Subjects />
        <div className="section-glow-divider" />
        <Inspirations />
        <div className="section-glow-divider" />
        <Games />
        <div className="section-glow-divider" />
        <Achievements />
        <div className="section-glow-divider" />
        <DailyLife />
        <div className="section-glow-divider" />
        <FutureGoals />
        <div className="section-glow-divider" />
        <FunFacts />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

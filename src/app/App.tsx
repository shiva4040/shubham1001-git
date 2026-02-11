import { Hero } from './components/Hero';
import { About } from './components/About';
import { Games } from './components/Games';
import { FutureGoals } from './components/FutureGoals';
import { FunFacts } from './components/FunFacts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Hero />
      <About />
      <Games />
      <FutureGoals />
      <FunFacts />
      <Footer />
    </div>
  );
}

import { Coffee, Lightbulb, BookOpen, Smile } from 'lucide-react';

const funFacts = [
  {
    icon: Coffee,
    title: 'Power Cut Expert',
    description: "I've become a pro at doing homework during power cuts. Candles, flashlights, and phone lights — I've mastered them all! Sometimes I wonder if this is training for becoming a scientist working in extreme conditions. 😄",
    gradient: 'linear-gradient(135deg, rgba(251,191,36,0.7), rgba(245,158,11,0.5))',
    glow: 'rgba(251,191,36,0.45)',
    iconColor: '#fde68a',
  },
  {
    icon: Lightbulb,
    title: 'Random Fact Collector',
    description: "I randomly tell my friends facts about black holes during lunch break. They think I'm weird, but I think I'm awesome! \"Did you know time slows down near a black hole?\" — Me, every day.",
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.7), rgba(59,130,246,0.5))',
    glow: 'rgba(6,182,212,0.45)',
    iconColor: '#67e8f9',
  },
  {
    icon: BookOpen,
    title: 'The Overthinker',
    description: "My teacher asks \"What's 2+2?\" and I start thinking about how numbers work in different dimensions. I might be overthinking things... just a little bit. 🤓",
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.7), rgba(236,72,153,0.5))',
    glow: 'rgba(168,85,247,0.45)',
    iconColor: '#d8b4fe',
  },
  {
    icon: Smile,
    title: 'Village Life Perks',
    description: "Living in a village means: 1) Everyone knows when you mess up in Kabaddi, 2) The internet is slower than a snail, 3) But the stars at night are AMAZING and worth it all! ✨",
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.7), rgba(5,150,105,0.5))',
    glow: 'rgba(16,185,129,0.45)',
    iconColor: '#6ee7b7',
  },
];

const quotes = [
  {
    text: "\"Mom says I spend too much time on my phone. I told her I'm researching quantum mechanics on YouTube. She didn't believe me. 📱\"",
    border: 'rgba(99,102,241,0.5)',
    bg: 'rgba(99,102,241,0.07)',
  },
  {
    text: "\"My friends: 'Let's play cricket!' Me: 'But what if time is just an illusion and we're already playing cricket in another dimension?' My friends: '...you're weird.' 🏏\"",
    border: 'rgba(168,85,247,0.5)',
    bg: 'rgba(168,85,247,0.07)',
  },
  {
    text: "\"I once tried to explain time dilation to my grandma. She said 'Time feels slow when you're waiting for dinner.' She's not wrong! 👵\"",
    border: 'rgba(16,185,129,0.5)',
    bg: 'rgba(16,185,129,0.07)',
  },
];

export function FunFacts() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-glow font-bold">Fun Facts About Me 😄</h2>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-subtitle)' }}>
          Because being in 7th grade is full of funny moments!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {funFacts.map((fact) => (
            <div key={fact.title} className="glass glass-card-hover group p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: fact.gradient, boxShadow: `0 0 20px ${fact.glow}`, border: '1px solid rgba(255,255,255,0.18)' }}>
                <fact.icon className="w-6 h-6" style={{ color: fact.iconColor }} />
              </div>
              <h3 className="text-xl mb-2 font-semibold" style={{ color: 'var(--text-heading)' }}>{fact.title}</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75 }}>{fact.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-12">
          {quotes.map(({ text, border, bg }) => (
            <div
              key={text}
              className="p-6 rounded-2xl"
              style={{
                background: bg,
                borderLeft: `4px solid ${border}`,
                border: `1px solid var(--glass-border)`,
                borderLeftWidth: '4px',
                borderLeftColor: border,
                backdropFilter: 'blur(12px)',
              }}
            >
              <p className="italic" style={{ color: 'var(--text-quote)' }}>{text}</p>
            </div>
          ))}
        </div>

        <div className="glass-strong p-8 text-center aurora-bg">
          <h3 className="text-2xl mb-4 font-semibold" style={{ color: 'var(--text-heading)' }}>Life as a 7th Grader 📚</h3>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
            Between homework, games, power cuts, slow internet, and existential questions about the universe,
            life is pretty interesting! I might not know what I want to become yet, but I know I want to keep
            learning, playing, and asking "why?" about everything. That's the fun part!
          </p>
          <div className="mt-6 text-4xl">🚀✨🎮🔬</div>
        </div>
      </div>
    </section>
  );
}

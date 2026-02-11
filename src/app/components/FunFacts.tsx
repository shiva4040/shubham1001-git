import { Coffee, Lightbulb, BookOpen, Smile } from 'lucide-react';

export function FunFacts() {
  const funFacts = [
    {
      icon: Coffee,
      title: 'Power Cut Expert',
      description: 'I\'ve become a pro at doing homework during power cuts. Candles, flashlights, and phone lights - I\'ve mastered them all! Sometimes I wonder if this is training for becoming a scientist working in extreme conditions. 😄',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Lightbulb,
      title: 'Random Fact Collector',
      description: 'I randomly tell my friends facts about black holes during lunch break. They think I\'m weird, but I think I\'m awesome! "Did you know time slows down near a black hole?" - Me, every day.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: BookOpen,
      title: 'The Overthinker',
      description: 'My teacher asks "What\'s 2+2?" and I start thinking about how numbers work in different dimensions. I might be overthinking things... just a little bit. 🤓',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Smile,
      title: 'Village Life Perks',
      description: 'Living in a village means: 1) Everyone knows when you mess up in Kabaddi, 2) The internet is slower than a snail, 3) But the stars at night are AMAZING and worth it all! ✨',
      color: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
          Fun Facts About Me 😄
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Because being in 7th grade is full of funny moments!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${fact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <fact.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900">{fact.title}</h3>
              <p className="text-slate-600 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
        
        {/* Funny Quotes */}
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-l-4 border-blue-500">
            <p className="text-slate-700 italic">
              "Mom says I spend too much time on my phone. I told her I'm researching quantum mechanics on YouTube. 
              She didn't believe me. 📱"
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border-l-4 border-purple-500">
            <p className="text-slate-700 italic">
              "My friends: 'Let's play cricket!' Me: 'But what if time is just an illusion and we're already playing cricket in another dimension?' 
              My friends: '...you're weird.' 🏏"
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border-l-4 border-green-500">
            <p className="text-slate-700 italic">
              "I once tried to explain time dilation to my grandma. She said 'Time feels slow when you're waiting for dinner.' 
              She's not wrong! 👵"
            </p>
          </div>
        </div>
        
        {/* Final Note */}
        <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-center text-white">
          <h3 className="text-2xl mb-4">Life as a 7th Grader 📚</h3>
          <p className="text-lg opacity-90 leading-relaxed max-w-3xl mx-auto">
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

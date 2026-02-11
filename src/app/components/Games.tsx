import { Smartphone, Users, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Games() {
  const androidGames = [
    {
      name: 'Last Island of Survival',
      emoji: '🏝️',
      description: 'Building shelters and surviving like a pro!'
    },
    {
      name: 'Ludo',
      emoji: '🎲',
      description: 'The classic game where luck meets strategy'
    },
    {
      name: 'And Many More...',
      emoji: '🎮',
      description: 'Always trying out new games!'
    }
  ];

  const physicalGames = [
    {
      name: 'Kabaddi',
      emoji: '🏃',
      description: 'Kabaddi kabaddi kabaddi... *runs out of breath*'
    },
    {
      name: 'Kho Kho',
      emoji: '⚡',
      description: 'Fast, furious, and super fun!'
    },
    {
      name: 'Other Sports',
      emoji: '⚽',
      description: 'Cricket, badminton, you name it!'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
          My Gaming World
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Whether it's on my phone or in the playground, I love playing games!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Android Games */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900">Android Games</h3>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759709686801-fa9bd01b418b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1pbmclMjB0ZWVuYWdlcnxlbnwxfHx8fDE3NzA2NDcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile gaming"
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="space-y-4">
              {androidGames.map((game, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{game.emoji}</span>
                    <div>
                      <h4 className="text-slate-900 mb-1">{game.name}</h4>
                      <p className="text-sm text-slate-600">{game.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Physical Games */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900">Physical Games</h3>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <Trophy className="w-20 h-20 text-orange-600 opacity-20" />
              </div>
            </div>
            
            <div className="space-y-4">
              {physicalGames.map((game, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{game.emoji}</span>
                    <div>
                      <h4 className="text-slate-900 mb-1">{game.name}</h4>
                      <p className="text-sm text-slate-600">{game.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-center">
          <p className="text-slate-700">
            💡 <span className="font-medium">Pro tip:</span> My high score in Ludo? Still bragging about it! 
            And in Kabaddi, I once tagged 3 people in a single raid! 🏆
          </p>
        </div>
      </div>
    </section>
  );
}

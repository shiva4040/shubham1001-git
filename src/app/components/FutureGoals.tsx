import { Clock, Telescope, Sparkles, HelpCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FutureGoals() {
  return (
    <section id="future" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
          My Future Dreams
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Big questions, bigger dreams, and a whole lot of curiosity!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What is Time? */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
            <div className="relative z-10">
              <Clock className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-2xl mb-3">What is Time? ⏰</h3>
              <p className="leading-relaxed opacity-90">
                This is THE question that keeps me up at night! Is time just something we invented? 
                Can we really travel through it? I want to understand the deepest mysteries of time and maybe, 
                just maybe, figure out how to build a time machine someday!
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Clock className="w-48 h-48" />
            </div>
          </div>
          
          {/* Galaxies */}
          <div className="relative overflow-hidden rounded-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709408635158-8d735f0395c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMG5lYnVsYXxlbnwxfHx8fDE3NzA2MTkyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Galaxy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-8 bg-gradient-to-t from-black/80 to-black/40 h-full flex flex-col justify-end text-white">
              <Telescope className="w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-3">Learning About Galaxies 🌌</h3>
              <p className="leading-relaxed">
                The universe is HUGE! I want to learn everything about galaxies, black holes, nebulae, 
                and all those amazing things floating in space. How did galaxies form? What's beyond our galaxy?
              </p>
            </div>
          </div>
        </div>
        
        {/* Physics Card */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734024653249-c6ba7b742ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNzJTIwdGltZSUyMGNvbmNlcHR8ZW58MXx8fHwxNzcwNjQ3MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Physics concept"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl">Physics is My Passion</h3>
              </div>
              <p className="leading-relaxed opacity-90">
                I'm fascinated by how everything works! From the tiniest atoms to the biggest stars, 
                physics explains it all. I spend my free time reading about Einstein, Newton, and other 
                brilliant scientists. Maybe one day my name will be in textbooks too! (A boy can dream, right? 😄)
              </p>
            </div>
          </div>
        </div>
        
        {/* Career Confusion */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
          <div className="flex items-start gap-4 mb-4">
            <HelpCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl mb-3 text-slate-900">The Big Question: What Will I Become? 🤔</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Honestly? I have NO idea! Everyone keeps asking me: "What do you want to be when you grow up?" 
                And I'm like... "Can I be a physicist who also plays Ludo professionally?" 😂
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-white rounded-lg border border-amber-100">
                  <div className="text-3xl mb-2">👨‍🔬</div>
                  <p className="text-sm text-slate-600">Maybe a scientist studying time and space?</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-amber-100">
                  <div className="text-3xl mb-2">👨‍⚕️</div>
                  <p className="text-sm text-slate-600">Or a doctor helping people?</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-amber-100">
                  <div className="text-3xl mb-2">🤷</div>
                  <p className="text-sm text-slate-600">Or something completely different!</p>
                </div>
              </div>
              <p className="text-slate-700 mt-4 text-sm">
                <span className="font-medium">My current plan:</span> Study hard, keep being curious, 
                and figure it out along the way. I've got time! (Speaking of time... see what I did there? 😉)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

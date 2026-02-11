import { Sparkles, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-slate-600">Class 7 Student</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-4 text-slate-900">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shubham</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-6">
          Future physicist, time machine enthusiast, and gaming champion
        </p>
        
        <div className="flex items-center justify-center gap-2 text-slate-500 mb-8">
          <MapPin className="w-4 h-4" />
          <span>From a small village in India 🇮🇳</span>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#about"
            className="px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
          >
            About Me
          </a>
          <a
            href="#future"
            className="px-6 py-3 bg-white text-slate-900 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
          >
            My Dreams
          </a>
        </div>
      </div>
      
      {/* Floating emoji decorations */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>
        🎮
      </div>
      <div className="absolute top-40 right-10 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>
        🏃
      </div>
      <div className="absolute bottom-40 left-20 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>
        🔬
      </div>
      <div className="absolute bottom-20 right-20 text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>
        🌌
      </div>
    </section>
  );
}

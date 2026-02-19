
import { Brain, Zap, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
          About Me
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Just a curious 7th grader trying to figure out the universe (and which college course to pick!)
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-3 text-slate-900">Super Curious</h3>
            <p className="text-slate-600">
              I'm obsessed with time machines and physics. I spend hours wondering "What actually is time?" 
              and dreaming about exploring galaxies. My brain never stops asking questions!
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-3 text-slate-900">Active & Energetic</h3>
            <p className="text-slate-600">
              Whether it's Kabaddi, Kho Kho, or any physical game, I'm always ready to play! 
              When I'm not running around, you'll find me gaming on my phone.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-3 text-slate-900">Future Dreamer</h3>
            <p className="text-slate-600">
              Will I be an engineer? A doctor? Something else? Honestly, I have no idea yet! 
              But that's okay - I'm just enjoying the journey and learning everything I can.
            </p>
          </div>
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl mb-3 text-slate-900">Where I'm From 🏡</h3>
              <p className="text-slate-600 leading-relaxed">
                I live in a small village in India. Not super tiny, but small enough that everyone knows everyone! 
                It's peaceful here, and the best part? When there's a power cut (which happens more often than I'd like), 
                I can actually see the stars clearly at night. That's when I think about galaxies and space the most!
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <ImageWithFallback
                src="/shubham.png"
                alt="Shubham"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

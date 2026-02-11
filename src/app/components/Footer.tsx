import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl mb-2">Shubham</h3>
          <p className="text-slate-400">Class 7 Student | Future Physicist | Gaming Enthusiast</p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>and lots of curiosity</span>
        </div>
        
        <div className="text-sm text-slate-500">
          <p>© 2026 Shubham's Portfolio</p>
          <p className="mt-2">
            Still figuring out life, one question at a time! 🚀
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm italic">
            "The important thing is not to stop questioning. Curiosity has its own reason for existing." 
            <br />
            <span className="text-slate-500">- Albert Einstein (My Hero!)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

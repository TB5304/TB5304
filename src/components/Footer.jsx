import { Heart } from 'lucide-react';
import data from '../data/data.json';

export default function Footer() {
  const { personal } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>© {currentYear} {personal.name}</span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="text-emerald-400" fill="currentColor" />
            </span>
          </div>

          {/* Tech stack */}
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span>React</span>
            <span className="text-slate-700">•</span>
            <span>Tailwind CSS</span>
            <span className="text-slate-700">•</span>
            <span>Lucide Icons</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
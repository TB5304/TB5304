import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Server, Database, Zap, Code2, Terminal } from 'lucide-react';
import profileImg from '../assets/Test1.png';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import data from '../data/data.json';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { personal } = data;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Server className="absolute top-20 left-[15%] w-8 h-8 text-emerald-400/20 animate-float" style={{ animationDelay: '0s' }} />
        <Database className="absolute top-40 right-[20%] w-6 h-6 text-emerald-400/15 animate-float" style={{ animationDelay: '2s' }} />
        <Zap className="absolute bottom-32 left-[25%] w-7 h-7 text-emerald-400/20 animate-float" style={{ animationDelay: '4s' }} />
        <Code2 className="absolute bottom-48 right-[15%] w-5 h-5 text-emerald-400/15 animate-float" style={{ animationDelay: '1s' }} />
        <Terminal className="absolute top-1/3 right-[10%] w-6 h-6 text-emerald-400/10 animate-float" style={{ animationDelay: '5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Profile Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-1 rounded-full bg-slate-900" />
              
              {/* Profile image */}
              <img
                src={profileImg}
                alt="Manjunath Honamore"
                className="absolute inset-2 rounded-full object-cover w-[calc(100%-8px)] h-[calc(100%-8px)]"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl animate-pulse-glow" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-emerald-400 animate-float" style={{ animationDelay: '0.5s' }}>
              ☕ Coffee Powered
            </div>
            <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-emerald-400 animate-float" style={{ animationDelay: '1.5s' }}>
              🚀 Open Source
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1 max-w-2xl">
            {/* Status badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-400">Available for opportunities</span>
            </div>

            {/* Greeting */}
            <div
              className={`mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-lg sm:text-xl text-emerald-400 font-medium">Hello, I'm</span>
            </div>

            {/* Name - BOLD */}
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {personal.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Title with decorative line */}
            <div
              className={`flex items-center gap-4 mb-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="hidden sm:block h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-emerald-400/50" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 glow-text">
                {personal.title}
              </h2>
              <div className="hidden sm:block h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-emerald-400/50" />
            </div>

            {/* Tagline */}
            <p
              className={`text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-900 font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 glass text-slate-200 font-semibold rounded-xl hover:bg-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-4 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href={`https://github.com/${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={`https://linkedin.com/in/${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-xl glass text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-emerald-400 transition-all duration-700 delay-700 animate-bounce cursor-pointer ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
}

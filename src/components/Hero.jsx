import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Server, Database, Zap, Code2, Terminal, Download, Coffee, Rocket, Award, Star } from 'lucide-react';
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

// Tech logos as SVG components
const SpringBootLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.205 14.684c-.486-.154-.8-.338-.8-.338a12.57 12.57 0 0 0 2.462-6.664c0-3.495-1.406-6.387-4.274-7.753a8.15 8.15 0 0 0-2.59-.768c-.726-.073-1.47-.073-2.196 0a8.15 8.15 0 0 0-2.59.768C7.513 1.603 6.107 4.495 6.107 7.99c0 2.667.943 5.165 2.462 6.664s-.314.184-.8.338C5.26 15.76 4 17.565 4 19.634c0 2.07 1.26 3.874 3.767 5.01a11.42 11.42 0 0 0 4.416.936c1.57 0 3.066-.315 4.416-.936C19.047 23.508 20.307 21.704 20.307 19.634c0-2.07-1.26-3.874-2.102-4.95z"/>
  </svg>
);

const PythonLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
  </svg>
);

const JavaLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
  </svg>
);

const RedisLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.478 12.74L3.635 17.14l6.843 4.4 6.843-4.4-6.843-4.4zM3.635 8.34l6.843 4.4 6.843-4.4-6.843-4.4-6.843 4.4zm6.843 4.4l6.843-4.4 6.843 4.4-6.843 4.4-6.843-4.4z"/>
  </svg>
);

const KafkaLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const MicroservicesLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
    <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4"/>
  </svg>
);

import data from '../data/data.json';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [techPositions, setTechPositions] = useState([]);
  const { personal } = data;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Initialize floating tech logos
  useEffect(() => {
    const logos = ['spring', 'python', 'java', 'redis', 'kafka', 'microservices'];
    const positions = logos.map((logo, i) => ({
      id: logo,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * 360,
    }));
    setTechPositions(positions);

    const animate = () => {
      setTechPositions(prev => prev.map(pos => {
        let newX = pos.x + pos.speedX;
        let newY = pos.y + pos.speedY;
        let newSpeedX = pos.speedX;
        let newSpeedY = pos.speedY;

        if (newX <= 5 || newX >= 95) newSpeedX = -newSpeedX;
        if (newY <= 10 || newY >= 90) newSpeedY = -newSpeedY;

        return {
          ...pos,
          x: Math.max(5, Math.min(95, newX)),
          y: Math.max(10, Math.min(90, newY)),
          speedX: newSpeedX,
          speedY: newSpeedY,
          rotation: pos.rotation + 0.5,
        };
      }));
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = '/Manjunath_Java_3YOE.pdf';
    link.download = 'Manjunath_Java_3YOE.pdf';
    link.click();
  };

  const getLogoComponent = (type) => {
    switch(type) {
      case 'spring': return <SpringBootLogo className="w-8 h-8 text-green-500/40" />;
      case 'python': return <PythonLogo className="w-8 h-8 text-blue-500/40" />;
      case 'java': return <JavaLogo className="w-8 h-8 text-red-500/40" />;
      case 'redis': return <RedisLogo className="w-8 h-8 text-red-600/40" />;
      case 'kafka': return <KafkaLogo className="w-8 h-8 text-purple-500/40" />;
      case 'microservices': return <MicroservicesLogo className="w-8 h-8 text-emerald-500/40" />;
      default: return null;
    }
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

      {/* Floating tech logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techPositions.map(pos => (
          <div
            key={pos.id}
            className="absolute transition-all duration-100"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: `rotate(${pos.rotation}deg)`,
            }}
          >
            {getLogoComponent(pos.id)}
          </div>
        ))}
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
              <Coffee className="inline w-3 h-3 mr-1" /> Coffee Powered
            </div>
            <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-emerald-400 animate-float" style={{ animationDelay: '1.5s' }}>
              <Rocket className="inline w-3 h-3 mr-1" /> Open Source
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
              <button
                onClick={handleDownloadResume}
                className="group flex items-center gap-2 px-8 py-4 glass text-slate-200 font-semibold rounded-xl hover:bg-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                <span>Hire Me</span>
              </button>
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
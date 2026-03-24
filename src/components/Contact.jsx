import { useEffect, useRef, useState } from 'react';
import { Mail, Send, MapPin, ArrowUpRight } from 'lucide-react';

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

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { personal } = data;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'from-red-400 to-rose-500',
    },
    {
      icon: <GithubIcon />,
      label: 'GitHub',
      value: `@${personal.github}`,
      href: `https://github.com/${personal.github}`,
      color: 'from-slate-400 to-slate-600',
    },
    {
      icon: <LinkedinIcon />,
      label: 'LinkedIn',
      value: personal.linkedin,
      href: `https://linkedin.com/in/${personal.linkedin}`,
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-emerald-400 text-sm font-medium mb-4">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating or have a backend challenge? Let's build something great together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div
              className={`space-y-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-emerald-500/20 transition-all duration-300 group hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} text-white group-hover:shadow-lg transition-shadow`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-1">{link.label}</div>
                    <div className="text-slate-200 font-medium">{link.value}</div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}

              {/* Location */}
              <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Location</div>
                  <div className="text-slate-200 font-medium">India</div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className={`glass-card rounded-2xl p-8 flex flex-col justify-center transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to scale your systems?
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you need help with microservices architecture, performance
                optimization, or building high-throughput systems — I'm here to help.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send size={18} />
                  <span>Send a Message</span>
                </a>

                <a
                  href={`https://linkedin.com/in/${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 glass text-slate-300 font-semibold rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <LinkedinIcon />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              {/* Availability status */}
              <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-slate-400">
                  Currently available for new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
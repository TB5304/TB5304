import { useEffect, useRef, useState } from 'react';
import { Award, Code, Star, BadgeCheck, ExternalLink } from 'lucide-react';
import data from '../data/data.json';

const iconMap = {
  award: Award,
  code: Code,
  star: Star,
  badge: BadgeCheck,
};

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { achievements, certifications } = data;

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

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-emerald-400 text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Key <span className="text-emerald-400">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Recognitions and certifications that showcase my technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-emerald-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const certContent = (
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white group-hover:shadow-lg transition-shadow">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                    {cert.url && (
                      <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                    )}
                  </div>
                );

                return cert.url ? (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300 group hover:-translate-y-1 block"
                  >
                    {certContent}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300 group hover:-translate-y-1"
                  >
                    {certContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-emerald-400" />
              Awards & Recognitions
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = iconMap[achievement.icon] || Award;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white group-hover:shadow-lg transition-shadow shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {achievement.title}
                      </h4>
                    </div>
                    {achievement.url && (
                      <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 mt-1" />
                    )}
                  </div>
                );

                return achievement.url ? (
                  <a
                    key={index}
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300 group hover:-translate-y-1 block"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300 group hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
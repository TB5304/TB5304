import { useEffect, useRef, useState } from 'react';
import { Building2, Calendar, ChevronRight, Check } from 'lucide-react';
import data from '../data/data.json';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { experience } = data;

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
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-emerald-400 text-sm font-medium mb-4">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Building enterprise-grade solutions at scale
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-emerald-400/20 to-transparent" />

          {experience.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 sm:pl-20 pb-12 last:pb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-slate-900 z-10">
                <div className="absolute inset-1 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-emerald-500/20 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 size={16} className="text-emerald-400" />
                      <span className="text-slate-300 font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-400">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="mt-1.5 p-0.5 rounded-full bg-emerald-400/20 text-emerald-400 shrink-0 group-hover/item:bg-emerald-400/30 transition-colors">
                        <ChevronRight size={12} />
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 pt-6 border-t border-slate-700/50 flex flex-wrap gap-2">
                  {['Spring Boot', 'Redis', 'Kafka', 'Microservices', 'Java'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Current position indicator */}
          <div
            className={`relative pl-8 sm:pl-20 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute left-0 sm:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-emerald-400 bg-slate-900 z-10 animate-pulse" />
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-emerald-400">
                <Check size={16} />
                <span className="font-medium">Currently making an impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
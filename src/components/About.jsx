import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Code2, Cpu, Layers } from 'lucide-react';
import data from '../data/data.json';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { personal, education } = data;

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

  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: 'Microservices Architecture',
      description: 'Designing distributed systems that scale to millions of users',
    },
    {
      icon: <Cpu size={24} />,
      title: 'Performance Engineering',
      description: 'Optimizing latency and throughput for high-traffic applications',
    },
    {
      icon: <Layers size={24} />,
      title: 'SDK Development',
      description: 'Building reusable middleware that empowers 250+ engineers',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-emerald-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Engineering the Future of{' '}
            <span className="text-emerald-400">Distributed Systems</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A passionate backend engineer focused on building resilient, high-performance
            systems that power modern digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Education */}
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Bio Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm <span className="text-emerald-400 font-medium">{personal.name}</span>, a{' '}
                <span className="text-slate-200">{personal.title}</span> at{' '}
                <span className="text-slate-200">Tata Consultancy Services</span>. I specialize
                in building scalable Spring Boot microservices and distributed systems that
                handle millions of transactions daily.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My work focuses on high-throughput banking applications, where I've contributed
                to systems serving <span className="text-emerald-400">28M+ users</span> and
                reduced API latency by up to <span className="text-emerald-400">50%</span>{' '}
                through intelligent caching strategies and architectural optimizations.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-slate-200 font-medium">{education.degree}</h4>
                  <p className="text-slate-400 text-sm">{education.college}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 font-medium">
                    CGPA: {education.cgpa}
                  </span>
                  <span className="text-slate-500">{education.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white">Core Expertise</h3>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300 group hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400 group-hover:bg-emerald-400/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
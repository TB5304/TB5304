import { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Workflow } from 'lucide-react';
import data from '../data/data.json';

const skillIcons = {
  languages: <Code size={20} />,
  backend: <Server size={20} />,
  architecture: <Workflow size={20} />,
};

const skillColors = {
  languages: 'from-blue-400 to-blue-600',
  backend: 'from-emerald-400 to-emerald-600',
  architecture: 'from-purple-400 to-purple-600',
};

const skillDescriptions = {
  languages: 'Core programming languages for building robust applications',
  backend: 'Frameworks and tools for server-side development',
  architecture: 'Design patterns and system architecture principles',
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('languages');
  const sectionRef = useRef(null);
  const { skills } = data;

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

  const categories = Object.keys(skills);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-emerald-400 text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technologies & <span className="text-emerald-400">Tools</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building high-performance, scalable backend systems
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <div
              key={category}
              className={`transition-all duration-500 ${
                activeCategory === category ? 'block' : 'hidden'
              }`}
            >
              {/* Category Header */}
              <div className="glass-card rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skillColors[category]} text-white`}>
                    {skillIcons[category]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white capitalize">{category}</h3>
                    <p className="text-slate-400 text-sm">{skillDescriptions[category]}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills[category].map((skill, index) => (
                  <div
                    key={skill}
                    className="glass-card rounded-xl p-4 text-center hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1 group"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br ${skillColors[category]} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">
                        {skill.charAt(0)}
                      </span>
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div
          className={`mt-16 grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { label: 'Languages', value: `${skills.languages.length}+`, icon: <Code size={16} /> },
            { label: 'Frameworks', value: `${skills.backend.length}+`, icon: <Server size={16} /> },
            { label: 'Architectures', value: `${skills.architecture.length}+`, icon: <Database size={16} /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Layers, GitBranch, Globe, Calendar, Building2 } from 'lucide-react';
import data from '../data/data.json';

const projectGradients = [
  'from-orange-400 to-red-500',
  'from-blue-400 to-indigo-500',
  'from-emerald-400 to-teal-500',
  'from-purple-400 to-pink-500',
  'from-cyan-400 to-blue-500',
  'from-amber-400 to-orange-500',
  'from-green-400 to-emerald-500',
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { projects } = data;

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
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-emerald-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Showcasing distributed systems, ML models, and developer tools
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const gradient = projectGradients[index % projectGradients.length];

            return (
              <div
                key={project.name}
                className={`glass-card rounded-2xl overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${gradient}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white group-hover:shadow-lg transition-shadow`}>
                      <Layers size={20} />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all"
                          aria-label="GitHub"
                        >
                          <GitBranch size={16} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all"
                          aria-label="Live Demo"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Period & Company */}
                  <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                    {project.period && (
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {project.period}
                      </span>
                    )}
                    {project.company && (
                      <span className="flex items-center gap-1">
                        <Building2 size={12} />
                        {project.company}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details link */}
                  {(project.github || project.demo) && (
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium group/link cursor-pointer pt-2 border-t border-slate-700/50">
                      <span>View Details</span>
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-16 glass-card rounded-2xl p-6 sm:p-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-slate-400 mb-4">
            More projects and contributions available on GitHub
          </p>
          <a
            href={`https://github.com/${data.personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-400/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <GitBranch size={18} />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
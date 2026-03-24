import { useEffect, useRef, useState } from 'react';
import { Activity, TrendingUp, Users, Zap } from 'lucide-react';
import data from '../data/data.json';

const metricIcons = {
  'Latency Reduction': <Zap size={24} />,
  'User Base': <Users size={24} />,
  'Developer Impact': <Activity size={24} />,
};

const metricColors = {
  'Latency Reduction': { from: 'from-amber-400', to: 'to-orange-500', bg: 'bg-amber-400' },
  'User Base': { from: 'from-emerald-400', to: 'to-teal-500', bg: 'bg-emerald-400' },
  'Developer Impact': { from: 'from-violet-400', to: 'to-purple-500', bg: 'bg-violet-400' },
};

const metricFillWidths = {
  'Latency Reduction': '85%',
  'User Base': '92%',
  'Developer Impact': '78%',
};

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function MetricCard({ metric, index, isVisible }) {
  const colors = metricColors[metric.label];
  const icon = metricIcons[metric.label];
  const fillWidth = metricFillWidths[metric.label];

  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-8 hover:border-emerald-500/20 transition-all duration-500 group hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colors.from} ${colors.to} text-white mb-6 group-hover:shadow-lg transition-shadow`}>
        {icon}
      </div>

      {/* Value */}
      <div className="mb-2">
        <span className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${colors.from} ${colors.to} bg-clip-text text-transparent`}>
          <AnimatedCounter
            target={metric.value.replace(/[^0-9]/g, '')}
            suffix={metric.value.replace(/[0-9]/g, '')}
          />
        </span>
      </div>

      {/* Label */}
      <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>

      {/* Detail */}
      <p className="text-slate-400 text-sm mb-6">{metric.detail}</p>

      {/* Progress bar */}
      <div className="relative">
        <div className="h-2 rounded-full bg-slate-700/50 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${colors.from} ${colors.to} animate-fill-bar`}
            style={{
              '--fill-width': fillWidth,
              animationDelay: `${index * 200 + 500}ms`,
            }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>0%</span>
          <span className="font-medium text-slate-400">{fillWidth}</span>
        </div>
      </div>
    </div>
  );
}

function SystemDiagram() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 delay-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
          <TrendingUp size={20} />
        </div>
        <h3 className="text-lg font-semibold text-white">System Architecture Impact</h3>
      </div>

      {/* Mini architecture diagram */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {['API Gateway', 'Redis Cache', 'Microservices'].map((service, i) => (
          <div
            key={service}
            className={`glass rounded-xl p-3 text-center transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: `${500 + i * 100}ms` }}
          >
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-emerald-400/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            </div>
            <span className="text-xs text-slate-400">{service}</span>
          </div>
        ))}
      </div>

      {/* Connection lines (visual) */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />
        <div className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-medium">
          ↓ 50% latency
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-emerald-400/50 to-transparent" />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { label: 'Throughput', value: '10K+', unit: 'req/s' },
          { label: 'Uptime', value: '99.9', unit: '%' },
          { label: 'Response', value: '<50', unit: 'ms' },
        ].map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="text-xl font-bold text-white">
              {stat.value}
              <span className="text-sm text-emerald-400">{stat.unit}</span>
            </div>
            <div className="text-xs text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { metrics } = data;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-emerald-400 text-sm font-medium mb-4">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            System <span className="text-emerald-400">Metrics</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Quantifiable impact through engineering excellence — from latency optimizations
            to scaling systems for millions of users
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* System Diagram */}
        <div className="max-w-2xl mx-auto">
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}
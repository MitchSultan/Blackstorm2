"use client";
import { Fragment, useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50,
    prefix: "$",
    suffix: "M+",
    label: "Maximum single project value",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="30" width="8" height="12"/><rect x="20" y="18" width="8" height="24"/><rect x="34" y="8" width="8" height="34"/>
      </svg>
    ),
  },
  {
    value: 25,
    prefix: "",
    suffix: "+",
    label: "Years of engineering experience",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="32" rx="3"/><path d="M6 16h36"/><path d="M16 8V4"/><path d="M32 8V4"/>
        <path d="M16 24h6"/><path d="M16 30h10"/>
      </svg>
    ),
  },
  {
    value: 7,
    prefix: "",
    suffix: "",
    label: "Specialist service disciplines",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="14" height="14" rx="2"/><rect x="28" y="6" width="14" height="14" rx="2"/>
        <rect x="6" y="28" width="14" height="14" rx="2"/><rect x="28" y="28" width="14" height="14" rx="2"/>
      </svg>
    ),
  },
];

function CountUp({ value, prefix, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [active, value]);

  return (
    <span>{prefix}{count}{suffix}</span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="stats" aria-label="Our impact in numbers" ref={ref}>
      <div className="container">
        <div className="stats__header">
          <div className="stats__rule" aria-hidden="true" />
          <span className="label-tag">By the Numbers</span>
          <h2>Our impact in numbers</h2>
        </div>

        <div className="stats__grid">
          {stats.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && <div className="stats__divider" aria-hidden="true" />}
              <div className="stat-item">
                <div className="stat-item__icon" aria-hidden="true">{s.icon}</div>
                <div className="stat-item__number">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} active={active} />
                </div>
                <div className="stat-item__label">{s.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

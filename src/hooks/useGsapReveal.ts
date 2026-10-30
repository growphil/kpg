import { useEffect, useRef, type RefObject } from 'react';
import { gsap, isReducedMotion } from '@/lib/animations';

interface RevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  triggerHook?: string | number;
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
): RefObject<T | null> {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const items = el.querySelectorAll('[data-reveal]');
      const target = items.length > 0 ? items : el;

      gsap.from(target, {
        y: options.y ?? 24,
        opacity: options.opacity ?? 0,
        duration: options.duration ?? 0.8,
        delay: options.delay ?? 0,
        stagger: options.stagger ?? 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [options.y, options.opacity, options.duration, options.delay, options.stagger]);

  return containerRef;
}


import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface UseAccordionProps {
  defaultIndex?: number | null;
}

export const useAccordion = ({ defaultIndex = null }: UseAccordionProps = {}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultIndex);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      // Select the inner content container (usually the div wrapping the text)
      const content = el.querySelector('.accordion-content');

      if (i === activeIndex) {
        // OPEN ANIMATION
        gsap.to(content, {
          height: 'auto',
          opacity: 1,
          duration: 0.7,
          ease: "expo.inOut",
          overwrite: true
        });
      } else {
        // CLOSE ANIMATION
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          overwrite: true
        });
      }
    });
  }, [activeIndex]);

  return { activeIndex, setActiveIndex, itemsRef };
};
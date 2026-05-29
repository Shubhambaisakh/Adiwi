// Disable GSAP to fix lag - use CSS animations instead
export const disableGSAP = () => {
  // This will prevent GSAP from running
  if (typeof window !== 'undefined') {
    (window as any).gsap = {
      registerPlugin: () => {},
      context: (fn: any) => {
        // Return empty cleanup function
        return { revert: () => {} };
      },
      from: () => {},
      to: () => {},
      fromTo: () => {},
      set: () => {},
      timeline: () => ({
        to: () => {},
        from: () => {},
        fromTo: () => {},
      }),
      utils: {
        toArray: (selector: any) => [],
      },
    };
  }
};

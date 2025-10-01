
// Animation utility to reveal elements on scroll
export const setupScrollReveal = () => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const elements = document.querySelectorAll('.reveal');
  elements.forEach((element) => observer.observe(element));

  return () => {
    elements.forEach((element) => observer.unobserve(element));
  };
};

// Use this to add a staggered delay to elements
export const getStaggeredDelay = (index: number, baseDelay = 0.1) => {
  return `${baseDelay * index}s`;
};

// Apply parallax effect to an element
export const applyParallax = (element: HTMLElement, speed = 0.5) => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Smooth image loading with blur effect
export const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.classList.remove('opacity-0');
  event.currentTarget.classList.add('opacity-100');
  
  const placeholder = event.currentTarget.parentElement?.querySelector('.placeholder');
  if (placeholder) {
    placeholder.classList.add('opacity-0');
  }
};

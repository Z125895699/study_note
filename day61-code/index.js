document.addEventListener('DOMContentLoaded', (event) => {
  // if (CSS.supports("animation-timeline: view()")) {
    const MARKS = document.querySelectorAll("ul");
    const OPTS = {
      threshold: 1.0
    };

    const HANDLE = (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        target.style.setProperty('--lightness', '80%');
        target.style.setProperty('--highlight', `hsl(${target.style.getPropertyValue('--hue') || 45}, 80%, var(--lightness))`);
        target.style.backgroundImage = 'linear-gradient(120deg, var(--highlight, lightblue) 50%, transparent 50%)';
        target.style.backgroundSize = '200% 100%';
        target.style.backgroundRepeat = 'no-repeat';
        target.style.backgroundPosition = `calc((1 - ${entry.isIntersecting ? 1 : 0}) * 110%) 0`;
        target.style.transition = 'background-position 1s';
        target.style.setProperty("--highlighted", entry.isIntersecting ? '1' : '0');
      });
    };

    const OBSERVER = new IntersectionObserver(HANDLE, OPTS);
    MARKS.forEach((M) => OBSERVER.observe(M));
  // }
});

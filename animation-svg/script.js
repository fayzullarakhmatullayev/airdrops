const svg = document.getElementById('mySVG');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      svg.style.opacity = '1';
      svg.style.clipPath = 'inset(0 0 0 0)';
    }
  });
}, options);

observer.observe(document.querySelector('.block'));

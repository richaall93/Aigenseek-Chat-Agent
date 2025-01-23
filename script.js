document.addEventListener("DOMContentLoaded", () => {
  
  // ... (rest of your particle effect code)

  // Particle Effect: Universe-like background
  const particlesContainer = document.querySelector('.particles');

  function createParticles(count) {
      for (let i = 0; i < count; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');

          const size = Math.random() * 5 + 3; // Random size between 3px and 8px
          const left = Math.random() * 100; // Random horizontal position
          const top = Math.random() * 100; // Random vertical position
          const duration = Math.random() * 20 + 15; // Random animation duration between 15s and 35s
          const dx = Math.random() * 2 - 1; // Random horizontal movement
          const dy = Math.random() * 2 - 1; // Random vertical movement

          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${left}vw`;
          particle.style.top = `${top}vh`;
          particle.style.animationDuration = `${duration}s`;
          particle.style.setProperty('--dx', dx);
          particle.style.setProperty('--dy', dy);

          particlesContainer.appendChild(particle);
      }
  }

  createParticles(100); // Create 100 particles
});

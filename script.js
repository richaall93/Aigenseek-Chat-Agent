// Particle Effect: Universe-like background
const particlesContainer = document.querySelector('.particles');

function createParticles(count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 5 + 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const dx = Math.random() * 2 - 1;
        const dy = Math.random() * 2 - 1;

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

createParticles(100); // Adjust particle count if needed

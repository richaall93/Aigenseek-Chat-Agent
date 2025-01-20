document.addEventListener("DOMContentLoaded", () => {
    const vfChatContainer = document.getElementById("vf-chat");
    let isChatInitialized = false;

    function initializeChatbot() {
        if (!isChatInitialized) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.onload = function () {
                window.voiceflow.chat.load({
                    verify: { projectID: '67767c60295927a88b27bafc' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    settings: {
                        open: true,
                        container: vfChatContainer, // Embed directly into #vf-chat
                    },
                });
                isChatInitialized = true;
            };
            script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
            document.head.appendChild(script);
        }
    }

    // Initialize chatbot
    if (vfChatContainer) {
        vfChatContainer.innerHTML = ""; // Clear any previous content
        initializeChatbot();
    }

    // Particle Effect
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

    createParticles(100);
});

 // Intersection pour animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // observe toutes les sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Smooth scroll pour lien interne
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    
    document.addEventListener('mousemove', (e) => {
      const particles = document.querySelectorAll('.particle');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        particle.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
      });
    });
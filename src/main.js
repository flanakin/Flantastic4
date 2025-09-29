import './style.css'

// Export the render function for testing
export function renderApp(appElement) {
  if (!appElement) return false;
  
  appElement.innerHTML = `
    <div class="container">
      <header class="header">
        <div class="logo">
          <h1>Flantastic <span class="highlight">4</span></h1>
        </div>
        <nav class="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main class="main">
        <section id="home" class="hero">
          <div class="hero-content">
            <h2 class="hero-title">Four hearts. One algorithm. All Flantastic.</h2>
            <p class="hero-subtitle">Professional music production studio creating cutting-edge sounds that blend human creativity with algorithmic precision.</p>
            <div class="hero-buttons">
              <button class="btn btn-primary">Our Work</button>
              <button class="btn btn-secondary">Get In Touch</button>
            </div>
          </div>
          <div class="hero-visual">
            <div class="sound-wave">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
        </section>

        <section id="services" class="services">
          <h3>Our Services</h3>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🎵</div>
              <h4>Music Production</h4>
              <p>Full-scale music production from concept to final master</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🎧</div>
              <h4>Mixing & Mastering</h4>
              <p>Professional mixing and mastering services</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🤖</div>
              <h4>AI-Enhanced Production</h4>
              <p>Cutting-edge AI tools integrated with human creativity</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🎤</div>
              <h4>Recording</h4>
              <p>State-of-the-art recording studio facilities</p>
            </div>
          </div>
        </section>

        <section id="about" class="about">
          <h3>About Flantastic 4</h3>
          <p>We are a collective of four passionate music producers who believe in the power of combining human emotion with algorithmic precision. Our unique approach creates sounds that are both technically perfect and emotionally resonant.</p>
        </section>
      </main>

      <footer class="footer">
        <p>&copy; 2024 Flantastic 4. All rights reserved.</p>
      </footer>
    </div>
  `
  
  // Set up interactions
  setupInteractions();
  return true;
}

function setupInteractions() {
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Animate sound waves
  const waves = document.querySelectorAll('.wave');
  waves.forEach((wave, index) => {
    wave.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('#app');
  renderApp(appElement);
});

// For immediate execution (when DOM is already loaded)
if (document.readyState === 'loading') {
  // Document is still loading
  document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.querySelector('#app');
    renderApp(appElement);
  });
} else {
  // Document is already loaded
  const appElement = document.querySelector('#app');
  renderApp(appElement);
}

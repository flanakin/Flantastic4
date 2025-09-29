import './style.css'

// Export the render function for testing
export function renderApp(appElement: HTMLElement | null): boolean {
  if (!appElement) return false;
  
  appElement.innerHTML = `
    <div class="container">
      <header class="header" role="banner">
        <div class="logo">
          <h1>Flantastic <span class="highlight">4</span></h1>
        </div>
        <nav class="nav" role="navigation" aria-label="Main navigation">
          <a href="#home" aria-label="Go to home section">Home</a>
          <a href="#music" aria-label="Go to music section">Music</a>
          <a href="#videos" aria-label="Go to videos section">Videos</a>
          <a href="#news" aria-label="Go to news section">News</a>
          <a href="#about" aria-label="Go to about section">About</a>
        </nav>
      </header>

      <main class="main" role="main">
        <section id="home" class="hero">
          <div class="hero-content">
            <h2 class="hero-title">Four hearts. One algorithm. All Flantastic.</h2>
            <p class="hero-subtitle">Family-powered beats and AI-driven magic straight from the living room studio.</p>
            <div class="hero-buttons">
              <a href="#music" class="btn btn-primary" aria-label="Listen to our music catalog">
                🎵 Listen now
              </a>
              <a href="https://www.youtube.com/@flantastic4" class="btn btn-secondary" target="_blank" rel="noopener noreferrer" aria-label="Watch our videos on YouTube">
                📺 Watch videos
              </a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="neon-orb" aria-hidden="true">
              <div class="orb-core"></div>
              <div class="orb-glow"></div>
              <div class="orb-pulse"></div>
            </div>
          </div>
        </section>

        <section id="featured" class="featured">
          <h3>Featured Release</h3>
          <div class="featured-content">
            <div class="featured-song">
              <h4>"I Fly" - Latest Single</h4>
              <div class="embed-container">
                <div class="placeholder-embed">
                  <p>🎵 Featured track embed placeholder</p>
                  <p>Connect Spotify/SoundCloud player here</p>
                </div>
              </div>
            </div>
            <div class="featured-video">
              <h4>Behind the Beats</h4>
              <div class="embed-container">
                <div class="placeholder-embed">
                  <p>📺 Featured video embed placeholder</p>
                  <p>Connect YouTube player here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="music" class="music">
          <h3>Music Catalog</h3>
          <div class="music-grid">
            <div class="music-card">
              <div class="music-cover" aria-label="I Fly album cover with neon gradient design">
                <div class="cover-art">🎵</div>
              </div>
              <h4>I Fly</h4>
              <p>Hip Hop / AI-Enhanced</p>
              <div class="music-actions">
                <button class="btn-small btn-listen" aria-label="Listen to I Fly">Listen</button>
                <button class="btn-small btn-watch" aria-label="Watch I Fly music video">Watch</button>
              </div>
            </div>
            <div class="music-card">
              <div class="music-cover" aria-label="Neon Dreams album cover with cyberpunk aesthetic">
                <div class="cover-art">🌟</div>
              </div>
              <h4>Neon Dreams</h4>
              <p>EDM / Lofi Fusion</p>
              <div class="music-actions">
                <button class="btn-small btn-listen" aria-label="Listen to Neon Dreams">Listen</button>
                <button class="btn-small btn-watch" aria-label="Watch Neon Dreams music video">Watch</button>
              </div>
            </div>
            <div class="music-card">
              <div class="music-cover" aria-label="Family Vibes album cover with warm colors">
                <div class="cover-art">💝</div>
              </div>
              <h4>Family Vibes</h4>
              <p>R&B / Pop</p>
              <div class="music-actions">
                <button class="btn-small btn-listen" aria-label="Listen to Family Vibes">Listen</button>
                <button class="btn-small btn-watch" aria-label="Watch Family Vibes music video">Watch</button>
              </div>
            </div>
            <div class="music-card">
              <div class="music-cover" aria-label="Algorithm Love album cover with tech-inspired design">
                <div class="cover-art">🤖</div>
              </div>
              <h4>Algorithm Love</h4>
              <p>AI-Pop / Electronic</p>
              <div class="music-actions">
                <button class="btn-small btn-listen" aria-label="Listen to Algorithm Love">Listen</button>
                <button class="btn-small btn-watch" aria-label="Watch Algorithm Love music video">Watch</button>
              </div>
            </div>
          </div>
        </section>

        <section id="videos" class="videos">
          <h3>Latest Videos</h3>
          <div class="videos-content">
            <p>Check out our latest music videos and behind-the-scenes content!</p>
            <a href="https://www.youtube.com/@flantastic4/videos" class="btn btn-primary" target="_blank" rel="noopener noreferrer" aria-label="View all videos on our YouTube playlist">
              View YouTube Playlist
            </a>
          </div>
        </section>

        <section id="news" class="news">
          <h3>Latest News</h3>
          <div class="news-feed">
            <article class="news-item">
              <time datetime="2024-03-15">March 15, 2024</time>
              <h4>New Single "I Fly" Drops Tomorrow!</h4>
              <p>Our latest AI-enhanced hip hop track is ready for takeoff. Get ready for some serious beats! 🚀</p>
            </article>
            <article class="news-item">
              <time datetime="2024-03-10">March 10, 2024</time>
              <h4>Behind the Scenes: Family Studio Setup</h4>
              <p>Take a peek inside our living room studio where the magic happens. Four hearts, countless beats!</p>
            </article>
            <article class="news-item">
              <time datetime="2024-03-05">March 5, 2024</time>
              <h4>AI Collaboration: Meet Our Fifth Bandmate</h4>
              <p>Discover how we're integrating AI as our creative partner in music production.</p>
            </article>
          </div>
        </section>

        <section id="about" class="about">
          <h3>About Flantastic 4</h3>
          <p>We're a family collective blending hip hop, R&B, EDM, pop, and lofi with our secret weapon: AI as our fifth bandmate! What started as jam sessions in our living room has evolved into a unique sound that's both heartfelt and cutting-edge.</p>
          <p>Our music is where human emotion meets algorithmic creativity — four hearts beating in sync with one incredible algorithm. From bass lines that make you move to melodies that touch your soul, we're here to prove that the future of music is both high-tech and deeply personal.</p>
          <p class="tagline">Straight out of the living room studio, remixed for the world. 🎵</p>
        </section>
      </main>

      <footer class="footer" role="contentinfo">
        <div class="footer-content">
          <div class="footer-links">
            <a href="#music" aria-label="Music catalog">Music</a>
            <a href="#videos" aria-label="Video content">Videos</a>
            <a href="#news" aria-label="Latest news">News</a>
            <a href="#about" aria-label="About us">About</a>
          </div>
          <div class="footer-socials">
            <a href="https://open.spotify.com/artist/flantastic4" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Spotify">Spotify</a>
            <a href="https://www.youtube.com/@flantastic4" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">YouTube</a>
            <a href="https://www.instagram.com/flantastic4" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">Instagram</a>
          </div>
        </div>
        <p>&copy; 2024 Flantastic 4. All rights reserved.</p>
      </footer>
    </div>
  `
  
  // Set up interactions
  setupInteractions();
  return true;
}

function setupInteractions(): void {
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href') || '');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Animate neon orb
  const orb = document.querySelector('.neon-orb');
  if (orb) {
    // Add pulsing animation that syncs with "background music"
    let pulseInterval = setInterval(() => {
      orb.classList.add('pulse-active');
      setTimeout(() => {
        orb.classList.remove('pulse-active');
      }, 300);
    }, 1200); // Pulse every 1.2 seconds to simulate music beat
  }

  // Add focus states for accessibility
  const focusableElements = document.querySelectorAll('a, button, [tabindex]');
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.classList.add('focused');
    });
    element.addEventListener('blur', function() {
      this.classList.remove('focused');
    });
  });
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('#app') as HTMLElement;
  renderApp(appElement);
});

// For immediate execution (when DOM is already loaded)
if (document.readyState === 'loading') {
  // Document is still loading
  document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.querySelector('#app') as HTMLElement;
    renderApp(appElement);
  });
} else {
  // Document is already loaded
  const appElement = document.querySelector('#app') as HTMLElement;
  renderApp(appElement);
}
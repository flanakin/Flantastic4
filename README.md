# Flantastic 4

**Four hearts. One algorithm. All Flantastic.**

A modern music production studio website built with Vite, featuring a sleek design with animated elements and comprehensive test coverage.

## 🎵 Features

- **Modern Design**: Purple gradient theme with animated sound waves
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Professional Content**: Services showcase, about section, and studio philosophy
- **Interactive Elements**: Smooth scrolling navigation and hover effects
- **Test Coverage**: Comprehensive test suite with 12 passing tests

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Building

```bash
npm run build
```

### Testing

```bash
npm run test        # Run tests in watch mode
npm run test:run    # Run tests once
```

## 🌐 Deployment

This site is configured to deploy automatically to GitHub Pages when changes are pushed to the `main` branch.

### To Enable GitHub Pages Deployment:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will run automatically on pushes to `main`

The site will be available at: `https://[username].github.io/Flantastic4/`

## 🧪 Testing

The project includes comprehensive tests using Vitest and Testing Library to ensure:

- Proper rendering of all website sections
- Correct navigation functionality  
- Semantic HTML structure
- Interactive element presence
- Content accuracy

## 🎨 Design Philosophy

The website embodies the studio's core philosophy of combining human creativity with algorithmic precision, featuring:

- **Color Palette**: Purple and pink gradients representing creativity and technology
- **Typography**: Clean, modern fonts for professional appeal
- **Animations**: Subtle sound wave animations reflecting the audio focus
- **Layout**: Structured sections highlighting services and expertise

## 📁 Project Structure

```
├── .github/workflows/deploy.yml  # GitHub Actions deployment
├── public/                       # Static assets
├── src/
│   ├── __tests__/               # Test files
│   ├── main.js                  # Main application logic
│   ├── style.css                # Styles and animations
│   └── test-setup.js            # Test configuration
├── index.html                   # Main HTML file
├── package.json                 # Dependencies and scripts
└── vite.config.js              # Vite configuration
```

## 🛠️ Technologies

- **Vite**: Fast build tool and dev server
- **Vanilla JavaScript**: Modern ES6+ features
- **CSS3**: Custom properties, animations, and Grid/Flexbox
- **Vitest**: Unit testing framework
- **Testing Library**: DOM testing utilities
- **GitHub Actions**: Automated deployment

---

*© 2024 Flantastic 4. All rights reserved.*
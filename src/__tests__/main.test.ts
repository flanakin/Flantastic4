import { beforeEach, describe, it, expect } from 'vitest'
import { screen } from '@testing-library/dom'
import { renderApp } from '../main.ts'

describe('Flantastic 4 Website', () => {
  let appElement: HTMLElement;
  
  beforeEach(() => {
    // Clear the document and create the app container
    document.body.innerHTML = '<div id="app"></div>'
    appElement = document.querySelector('#app') as HTMLElement
    
    // Render the app
    renderApp(appElement)
  })

  it('should display the main heading with correct text', () => {
    const heading = screen.getByRole('heading', { name: /flantastic 4/i, level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toContain('Flantastic')
    expect(heading.textContent).toContain('4')
  })

  it('should display the tagline', () => {
    const tagline = screen.getByRole('heading', { name: /four hearts\. one algorithm\. all flantastic\./i })
    expect(tagline).toBeInTheDocument()
  })

  it('should have navigation links for new structure', () => {
    const homeLink = screen.getByRole('link', { name: /go to home section/i })
    const musicLink = screen.getByRole('link', { name: /go to music section/i })
    const videosLink = screen.getByRole('link', { name: /go to videos section/i })
    const newsLink = screen.getByRole('link', { name: /go to news section/i })
    const aboutLink = screen.getByRole('link', { name: /go to about section/i })
    
    expect(homeLink).toBeInTheDocument()
    expect(musicLink).toBeInTheDocument()
    expect(videosLink).toBeInTheDocument()
    expect(newsLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    
    expect(homeLink.getAttribute('href')).toBe('#home')
    expect(musicLink.getAttribute('href')).toBe('#music')
    expect(videosLink.getAttribute('href')).toBe('#videos')
    expect(newsLink.getAttribute('href')).toBe('#news')
    expect(aboutLink.getAttribute('href')).toBe('#about')
  })

  it('should display new call-to-action buttons', () => {
    const listenButton = screen.getByRole('link', { name: /listen to our music catalog/i })
    const watchButton = screen.getByRole('link', { name: /watch our videos on youtube/i })
    
    expect(listenButton).toBeInTheDocument()
    expect(watchButton).toBeInTheDocument()
    expect(listenButton.textContent).toContain('Listen now')
    expect(watchButton.textContent).toContain('Watch videos')
  })

  it('should display music catalog section', () => {
    const musicHeading = screen.getByRole('heading', { name: /music catalog/i })
    expect(musicHeading).toBeInTheDocument()
    
    // Check for some music cards
    const flyTrack = screen.getByText('I Fly')
    const neonTrack = screen.getByText('Neon Dreams')
    expect(flyTrack).toBeInTheDocument()
    expect(neonTrack).toBeInTheDocument()
  })

  it('should display the updated about section with family collective content', () => {
    const aboutHeading = screen.getByRole('heading', { name: /about flantastic 4/i })
    expect(aboutHeading).toBeInTheDocument()
    
    const familyText = screen.getByText(/family collective blending hip hop/i)
    expect(familyText).toBeInTheDocument()
    
    const taglineText = screen.getByText(/straight out of the living room studio/i)
    expect(taglineText).toBeInTheDocument()
  })

  it('should display hero subtitle with family-powered content', () => {
    const subtitle = screen.getByText(/family-powered beats and ai-driven magic/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('should display news section', () => {
    const newsHeading = screen.getByRole('heading', { name: /latest news/i })
    expect(newsHeading).toBeInTheDocument()
    
    const newsItem = screen.getByText(/new single "i fly" drops tomorrow/i)
    expect(newsItem).toBeInTheDocument()
  })

  it('should have proper HTML structure with ARIA roles', () => {
    // Check for semantic elements with ARIA roles
    const header = document.querySelector('[role="banner"]')
    const nav = document.querySelector('[role="navigation"]')
    const main = document.querySelector('[role="main"]')
    const footer = document.querySelector('[role="contentinfo"]')
    
    expect(header).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it('should have neon orb animation instead of sound waves', () => {
    const orb = document.querySelector('.neon-orb')
    const orbCore = document.querySelector('.orb-core')
    expect(orb).toBeInTheDocument()
    expect(orbCore).toBeInTheDocument()
    
    // Old sound waves should not exist
    const waves = document.querySelectorAll('.wave')
    expect(waves.length).toBe(0)
  })

  it('should render successfully with valid app element', () => {
    const newAppElement = document.createElement('div')
    const result = renderApp(newAppElement)
    expect(result).toBe(true)
    expect(newAppElement.innerHTML).toContain('Flantastic 4')
  })

  it('should return false when app element is null', () => {
    const result = renderApp(null)
    expect(result).toBe(false)
  })

  it('should have accessibility features', () => {
    // Check for aria-labels
    const musicLink = screen.getByLabelText(/go to music section/i)
    expect(musicLink).toBeInTheDocument()
    
    // Check for proper link structure
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach(link => {
      expect(link.getAttribute('rel')).toContain('noopener')
      expect(link.getAttribute('rel')).toContain('noreferrer')
    })
  })
})
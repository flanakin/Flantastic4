import { beforeEach, describe, it, expect } from 'vitest'
import { screen } from '@testing-library/dom'
import { renderApp } from '../main.js'

describe('Flantastic 4 Website', () => {
  let appElement;
  
  beforeEach(() => {
    // Clear the document and create the app container
    document.body.innerHTML = '<div id="app"></div>'
    appElement = document.querySelector('#app')
    
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

  it('should have navigation links', () => {
    const homeLink = screen.getByRole('link', { name: /home/i })
    const servicesLink = screen.getByRole('link', { name: /services/i })
    const aboutLink = screen.getByRole('link', { name: /about/i })
    const contactLink = screen.getByRole('link', { name: /contact/i })
    
    expect(homeLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
    
    expect(homeLink.getAttribute('href')).toBe('#home')
    expect(servicesLink.getAttribute('href')).toBe('#services')
    expect(aboutLink.getAttribute('href')).toBe('#about')
    expect(contactLink.getAttribute('href')).toBe('#contact')
  })

  it('should display all service cards', () => {
    const musicProduction = screen.getByRole('heading', { name: /music production/i })
    const mixingMastering = screen.getByRole('heading', { name: /mixing & mastering/i })
    const aiProduction = screen.getByRole('heading', { name: /ai-enhanced production/i })
    const recording = screen.getByRole('heading', { name: /recording/i })
    
    expect(musicProduction).toBeInTheDocument()
    expect(mixingMastering).toBeInTheDocument()
    expect(aiProduction).toBeInTheDocument()
    expect(recording).toBeInTheDocument()
  })

  it('should display call-to-action buttons', () => {
    const ourWorkButton = screen.getByRole('button', { name: /our work/i })
    const getInTouchButton = screen.getByRole('button', { name: /get in touch/i })
    
    expect(ourWorkButton).toBeInTheDocument()
    expect(getInTouchButton).toBeInTheDocument()
  })

  it('should display the about section', () => {
    const aboutHeading = screen.getByRole('heading', { name: /about flantastic 4/i })
    expect(aboutHeading).toBeInTheDocument()
    
    const aboutText = screen.getByText(/we are a collective of four passionate music producers/i)
    expect(aboutText).toBeInTheDocument()
  })

  it('should display the footer with copyright', () => {
    const footer = screen.getByText(/© 2024 flantastic 4\. all rights reserved\./i)
    expect(footer).toBeInTheDocument()
  })

  it('should have proper HTML structure', () => {
    // Check for main semantic elements
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    
    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it('should have animated sound wave elements', () => {
    const waves = document.querySelectorAll('.wave')
    expect(waves.length).toBe(4) // Four wave elements for the animation
  })

  it('should contain the studio tagline in description', () => {
    const description = screen.getByText(/professional music production studio creating cutting-edge sounds/i)
    expect(description).toBeInTheDocument()
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
})
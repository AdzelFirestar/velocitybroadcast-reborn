import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-glow-effect, .footer-glow-orb, .footer-logo-icon, .footer-heart-icon, .footer-main::before, .footer-cta-section::before {
  animation: none;
}
.footer-link:hover, .footer-social-link:hover, .footer-scroll-top:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="pluginforge-footer" className="footer-container">
        <div aria-hidden="true" className="footer-scanline-overlay"></div>
        <div aria-hidden="true" className="footer-glow-effect"></div>
        <div className="footer-content-wrapper">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 19h8M4 17l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h2 className="footer-logo-text">PluginForge</h2>
              </div>
              <p className="footer-tagline">
                {' '}
                Crafting premium Minecraft plugins, distributed free for the
                community.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-stats">
                <div className="footer-stat-item">
                  <span data-count="100" className="footer-stat-value">
                    0
                  </span>
                  <span className="footer-stat-label">Open Source</span>
                </div>
                <div aria-hidden="true" className="footer-stat-divider"></div>
                <div className="footer-stat-item">
                  <span data-count="0" className="footer-stat-value">
                    0
                  </span>
                  <span className="footer-stat-label">Cost</span>
                </div>
                <div aria-hidden="true" className="footer-stat-divider"></div>
                <div className="footer-stat-item">
                  <span className="footer-stat-value">∞</span>
                  <span className="footer-stat-label">Community</span>
                </div>
              </div>
            </div>
            <div className="footer-links-section">
              <h3 className="footer-section-title">Quick Access</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </g>
                        </svg>
                      </span>
                      <span className="footer-link-text">
                        GitHub Repositories
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10l5 5l5-5"></path>
                          </g>
                        </svg>
                      </span>
                      <span className="footer-link-text">Download Plugins</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span className="footer-link-text">Documentation</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect
                              x="2"
                              y="4"
                              rx="2"
                              width="20"
                              height="16"
                            ></rect>
                          </g>
                        </svg>
                      </span>
                      <span className="footer-link-text">Contact</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-section">
              <h3 className="footer-section-title">Resources</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-text">Plugin List</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-text">
                        Installation Guide
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-text">
                        API Documentation
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span className="footer-link-text">Changelog</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-cta-section">
              <h3 className="footer-section-title">Support the Project</h3>
              <p className="footer-cta-text">
                {' '}
                Help keep PluginForge free and active. Your support fuels
                development.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button className="btn-accent footer-support-btn btn">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Buy Me a Coffee</span>
              </button>
              <div className="footer-social-links">
                <a href="#">
                  <div
                    aria-label="GitHub Profile"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Email Contact"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <span className="footer-copyright-text">
                  {' '}
                  © 2025 PluginForge. Made with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="footer-heart-icon"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="footer-copyright-text">for the community</span>
              </div>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-legal-divider">
                  |
                </span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Use</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-legal-divider">
                  |
                </span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>License</span>
                  </div>
                </a>
              </div>
            </div>
            <button aria-label="Scroll to top" className="footer-scroll-top">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="m5 12l7-7l7 7m-7 7V5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="footer-tech-grid"></div>
        <div
          aria-hidden="true"
          className="footer-glow-orb-1 footer-glow-orb"
        ></div>
        <div
          aria-hidden="true"
          className="footer-glow-orb-2 footer-glow-orb"
        ></div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footerGlowPulse {0%,100% {opacity: 0.3;
transform: translateX(-50%) scale(1);}
50% {opacity: 0.5;
transform: translateX(-50%) scale(1.1);}}@keyframes footerOrbFloat {0%,100% {transform: translate(0, 0) scale(1);}
25% {transform: translate(20px, -20px) scale(1.05);}
50% {transform: translate(-15px, 15px) scale(0.95);}
75% {transform: translate(15px, 10px) scale(1.02);}}@keyframes footerLineScan {0%,100% {transform: translateX(0);
opacity: 1;}
50% {transform: translateX(400px);
opacity: 0.3;}}@keyframes footerLogoGlow {0%,100% {box-shadow: 0 0 20px
        color-mix(in srgb, var(--color-accent) 20%, transparent);}
50% {box-shadow: 0 0 30px
        color-mix(in srgb, var(--color-accent) 40%, transparent);}}@keyframes footerCtaScan {0%,100% {left: -100%;}
50% {left: 100%;}}@keyframes footerHeartbeat {0%,100% {transform: scale(1);}
10%,30% {transform: scale(1.1);}
20%,40% {transform: scale(1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer">
(function(){
  // Counter Animation for Stats
  const counterElements = document.querySelectorAll(
    ".footer-stat-value[data-count]"
  )

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute("data-count"))
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        element.textContent = Math.floor(current) + "%"
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target + "%"
      }
    }

    updateCounter()
  }

  // Intersection Observer for Counter Animation
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        entry.target.classList.add("animated")
        animateCounter(entry.target)
      }
    })
  }, observerOptions)

  counterElements.forEach((element) => {
    observer.observe(element)
  })

  // Scroll to Top Button
  const scrollTopBtn = document.querySelector(".footer-scroll-top")

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Enhanced Link Hover Effects with Ripple
  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function (e) {
      const icon = this.querySelector(".footer-link-icon")
      if (icon) {
        icon.style.transform = "scale(1.2) rotate(5deg)"
        setTimeout(() => {
          icon.style.transform = ""
        }, 300)
      }
    })
  })

  // Social Link Pulse Effect on Hover
  const socialLinks = document.querySelectorAll(".footer-social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.animation = "none"
      setTimeout(() => {
        this.style.animation = ""
      }, 10)
    })
  })

  // Dynamic Glow Effect Following Mouse
  const footerContainer = document.getElementById("pluginforge-footer")
  const glowEffect = document.querySelector(".footer-glow-effect")

  if (footerContainer && glowEffect) {
    footerContainer.addEventListener("mousemove", (e) => {
      const rect = footerContainer.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const percentX = (x / rect.width) * 100
      const percentY = (y / rect.height) * 100

      glowEffect.style.background = \`radial-gradient(
      circle at \${percentX}% \${percentY}%,
      color-mix(in srgb, var(--color-accent) 20%, transparent),
      transparent 50%
    )\`
    })
  }

  // Add Typing Effect to Logo on Load
  const logoText = document.querySelector(".footer-logo-text")
  if (logoText) {
    const originalText = logoText.textContent
    logoText.textContent = ""
    let charIndex = 0

    const typeWriter = () => {
      if (charIndex < originalText.length) {
        logoText.textContent += originalText.charAt(charIndex)
        charIndex++
        setTimeout(typeWriter, 100)
      }
    }

    // Delay start for visual impact
    setTimeout(typeWriter, 500)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer

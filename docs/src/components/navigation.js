import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation-logo, .navigation-link, .navigation-action-btn, .navigation-toggle, .navigation-mobile-menu, .navigation-mobile-link {
  animation: none;
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav
        id="navigation-main"
        aria-label="Main navigation"
        className="navigation"
      >
        <div className="navigation-container">
          <a href="/">
            <div aria-label="PluginForge Home" className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              </div>
              <span className="navigation-logo-text">
                <span className="navigation-navigation-logo-primary">
                  Plugin
                </span>
                <span className="navigation-navigation-logo-accent">Forge</span>
              </span>
              <div className="navigation-logo-glow"></div>
            </div>
          </a>
          <div className="navigation-links">
            <a href="#projects">
              <div className="navigation-link">
                <span className="navigation-link-text">Projects</span>
                <span className="navigation-link-underline"></span>
              </div>
            </a>
            <a href="#plugins">
              <div className="navigation-link">
                <span className="navigation-link-text">Plugins</span>
                <span className="navigation-link-underline"></span>
              </div>
            </a>
            <a href="#about">
              <div className="navigation-link">
                <span className="navigation-link-text">About</span>
                <span className="navigation-link-underline"></span>
              </div>
            </a>
            <a href="#contact">
              <div className="navigation-link">
                <span className="navigation-link-text">Contact</span>
                <span className="navigation-link-underline"></span>
              </div>
            </a>
          </div>
          <div className="navigation-actions">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitHub"
                className="navigation-action-github navigation-action-btn"
              >
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
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
                <span className="navigation-action-glow"></span>
              </div>
            </a>
            <a href="#support">
              <div className="navigation-action-btn navigation-action-support">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
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
                <span className="navigation-action-text">Support</span>
                <span className="navigation-action-glow"></span>
              </div>
            </a>
          </div>
          <button
            id="navigation-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <span className="navigation-navigation-toggle-icon1">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigation-toggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigation-toggle-glow"></span>
          </button>
        </div>
        <div id="navigation-mobile-menu" className="navigation-mobile-menu">
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <a href="#projects">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                  <span className="navigation-mobile-link-text">Projects</span>
                  <span className="navigation-mobile-link-accent"></span>
                </div>
              </a>
              <a href="#plugins">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                  <span className="navigation-mobile-link-text">Plugins</span>
                  <span className="navigation-mobile-link-accent"></span>
                </div>
              </a>
              <a href="#about">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        r="10"
                        cx="12"
                        cy="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></circle>
                      <path
                        d="M12 16v-4m0-4h.01"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span className="navigation-mobile-link-text">About</span>
                  <span className="navigation-mobile-link-accent"></span>
                </div>
              </a>
              <a href="#contact">
                <div className="navigation-mobile-link">
                  <span className="navigation-mobile-link-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="m22 6l-10 7L2 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span className="navigation-mobile-link-text">Contact</span>
                  <span className="navigation-mobile-link-accent"></span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-actions">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  className="navigation-mobile-action"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>View GitHub</span>
                </div>
              </a>
              <a href="#support">
                <div className="navigation-mobile-action-primary navigation-mobile-action">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
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
                  <span>Support Me</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="navigation-backdrop" className="navigation-backdrop"></div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigationSlideDown {from {transform: translateY(-100%);
opacity: 0;}
to {transform: translateY(0);
opacity: 1;}}@keyframes navigationGlowPulse {0%,100% {opacity: 0.3;}
50% {opacity: 1;}}@keyframes navigationLogoPulse {0%,100% {transform: scale(0.95);
opacity: 0.4;}
50% {transform: scale(1.05);
opacity: 1;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigation-toggle")
  const navigationMobileMenu = document.getElementById("navigation-mobile-menu")
  const navigationBackdrop = document.getElementById("navigation-backdrop")
  const navigationMobileLinks = document.querySelectorAll(
    ".navigation-mobile-link"
  )

  function toggleMobileMenu() {
    const isActive = navigationToggle.classList.contains("active")

    navigationToggle.classList.toggle("active")
    navigationMobileMenu.classList.toggle("active")
    navigationBackdrop.classList.toggle("active")

    navigationToggle.setAttribute("aria-expanded", !isActive)
    document.body.style.overflow = isActive ? "" : "hidden"
  }

  function closeMobileMenu() {
    navigationToggle.classList.remove("active")
    navigationMobileMenu.classList.remove("active")
    navigationBackdrop.classList.remove("active")
    navigationToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", toggleMobileMenu)
  navigationBackdrop.addEventListener("click", closeMobileMenu)

  navigationMobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeMobileMenu, 300)
    })
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigationToggle.classList.contains("active")) {
      closeMobileMenu()
    }
  })

  let lastScroll = 0
  const navigation = document.getElementById("navigation-main")

  window.addEventListener(
    "scroll",
    () => {
      const currentScroll = window.pageYOffset

      if (currentScroll <= 0) {
        navigation.style.transform = "translateY(0)"
        return
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        navigation.style.transform = "translateY(-100%)"
      } else {
        navigation.style.transform = "translateY(0)"
      }

      lastScroll = currentScroll
    },
    { passive: true }
  )
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation

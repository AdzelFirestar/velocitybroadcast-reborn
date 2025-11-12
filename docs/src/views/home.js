import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Austere Innocent Dogfish</title>
        <meta property="og:title" content="Austere Innocent Dogfish" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
#hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-surface);
  overflow: hidden;
}
@media (max-width: 767px) {
#hero {
  padding: var(--spacing-2xl) var(--spacing-md);
  min-height: auto;
}
}
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.hero-backplate, .support-backplate {
  animation: none;
}
.pulse, .support-cta, .hero-cta-primary {
  animation: none;
}
}
:focus-visible {
  outline: 3px solid var(--color-outline);
  outline-offset: 2px;
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero" aria-label="PluginForge Introduction">
        <div
          aria-hidden="true"
          className="hero-backplate hero-backplate--primary"
        ></div>
        <div
          aria-hidden="true"
          className="hero-backplate--secondary hero-backplate"
        ></div>
        <div className="hero-container">
          <div
            role="region"
            aria-label="Intro and actions"
            className="hero-content"
          >
            <div className="hero-text">
              <h1 className="home-hero-title hero-title">
                <span className="home-hero-title-main">PluginForge</span>
                <span aria-hidden="true" className="home-hero-title-divider">
                  //
                </span>
                <span className="home-hero-title-sub">
                  {' '}
                  Lightweight Minecraft plugins, uncompromised and free.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <p className="hero-subtitle home-hero-subtitle">
                {' '}
                I build precision-crafted server tools for server owners who
                value performance, clarity, and control. When a plugin
                doesn&apos;t exist or the price isn&apos;t right, I make it —
                streamlined, open-source, and ready to drop into production.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="hero-cta-group">
                <a href="#support">
                  <div
                    aria-label="Support PluginForge Development"
                    className="btn-primary hero-cta-primary btn-lg btn"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                    <span>Support PluginForge</span>
                  </div>
                </a>
                <a href="#github">
                  <div
                    aria-label="Browse GitHub Repositories"
                    className="btn-outline hero-cta-secondary btn"
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
                    <span>Browse Repositories</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="hero-preview">
              <div className="hero-preview-container">
                <video
                  src="https://videos.pexels.com/video-files/3163534/3163534-hd_1280_720_30fps.mp4"
                  loop="true"
                  muted="true"
                  autoPlay="true"
                  aria-hidden="true"
                  playsInline="true"
                  className="hero-preview-video"
                ></video>
                <div className="hero-preview-overlay"></div>
                <div className="hero-preview-content">
                  <div className="code-snippet">
                    <div className="code-line">
                      <span className="code-comment"># Explore projects</span>
                    </div>
                    <div className="code-line">
                      <span className="code-keyword">git</span>
                      <span className="code-string">clone</span>
                      <span>
                        {' '}
                        github.com/pluginforge
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-comment"># Get source</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="projects-overview"
      >
        <div className="projects-container">
          <header className="section-header">
            <h2
              id="projects-heading"
              className="section-title home-section-title"
            >
              Featured Plugins
            </h2>
            <p className="home-section-subtitle section-subtitle">
              {' '}
              Lightweight, battle-tested, and crafted for performance.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="projects-layout">
            <div className="featured-panel">
              <article className="plugin-card plugin-card--featured">
                <div className="plugin-image-container">
                  <img
                    alt="Server infrastructure visualization"
                    src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="plugin-image"
                  />
                  <div className="plugin-image-overlay"></div>
                </div>
                <div className="plugin-content">
                  <h3 className="plugin-title">QuantumKeepers</h3>
                  <p className="plugin-desc">
                    {' '}
                    Minimal anti-cheat that prioritizes low CPU overhead and
                    compatibility. Designed for high-performance servers that
                    can&apos;t afford lag spikes.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="plugin-tags">
                    <span className="plugin-tag">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        anti-cheat
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="plugin-tag">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        low-latency
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="plugin-tag">cross-version</span>
                  </div>
                  <div className="plugin-actions">
                    <a href="#">
                      <div
                        aria-label="View QuantumKeepers repository"
                        className="btn-primary btn"
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
                        <span>
                          {' '}
                          View Repo
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button
                      aria-label="Preview QuantumKeepers screenshot"
                      className="btn-outline btn"
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
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                          <circle r="3" cx="12" cy="12"></circle>
                        </g>
                      </svg>
                      <span>
                        {' '}
                        Preview
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="grid-wrap">
              <article className="plugin-card">
                <div className="plugin-content">
                  <h3 className="plugin-title">FluxPortals</h3>
                  <p className="plugin-desc">
                    {' '}
                    Fast, configurable teleportation with safety checks and
                    async world handling.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="plugin-tags">
                    <span className="plugin-tag">teleport</span>
                    <span className="plugin-tag">async</span>
                    <span className="plugin-tag">safety-first</span>
                  </div>
                  <a href="#">
                    <div
                      aria-label="View FluxPortals repository"
                      className="plugin-link"
                    >
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
              <article className="plugin-card">
                <div className="plugin-content">
                  <h3 className="plugin-title">SilentAnnouncer</h3>
                  <p className="plugin-desc">
                    {' '}
                    Non-intrusive broadcast scheduler with RGB text support and
                    per-world scoping.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="plugin-tags">
                    <span className="plugin-tag">scheduler</span>
                    <span className="plugin-tag">customization</span>
                  </div>
                  <a href="#">
                    <div
                      aria-label="View SilentAnnouncer repository"
                      className="plugin-link"
                    >
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
              <article className="plugin-card">
                <div className="plugin-content">
                  <h3 className="plugin-title">EcoBalance</h3>
                  <p className="plugin-desc">
                    {' '}
                    Lightweight economy stabilizer that prevents inflation
                    spikes and keeps server shops viable.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="plugin-tags">
                    <span className="plugin-tag">economy</span>
                    <span className="plugin-tag">performance</span>
                  </div>
                  <a href="#">
                    <div
                      aria-label="View EcoBalance repository"
                      className="plugin-link"
                    >
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
              <article className="plugin-card">
                <div className="plugin-content">
                  <h3 className="plugin-title">NomadSpawn</h3>
                  <p className="plugin-desc">
                    {' '}
                    Small-footprint spawn system designed for instant joins and
                    no startup lag.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="plugin-tags">
                    <span className="plugin-tag">spawn</span>
                    <span className="plugin-tag">instant-join</span>
                  </div>
                  <a href="#">
                    <div
                      aria-label="View NomadSpawn repository"
                      className="plugin-link"
                    >
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
              <article className="plugin-card">
                <div className="plugin-content">
                  <h3 className="plugin-title">QuickPatch</h3>
                  <p className="plugin-desc">
                    {' '}
                    Collection of micro-plugins: chunk cleaner, lag reporter,
                    and config hot-reload.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="plugin-tags">
                    <span className="plugin-tag">utilities</span>
                    <span className="plugin-tag">hot-reload</span>
                  </div>
                  <a href="#">
                    <div
                      aria-label="View QuickPatch repository"
                      className="plugin-link"
                    >
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </article>
              <article className="plugin-card plugin-card--cta">
                <div className="plugin-content">
                  <h3 className="plugin-title">Custom Feature?</h3>
                  <p className="plugin-desc">
                    {' '}
                    Open an issue or PR on any repo — collaboration and
                    community-driven improvements encouraged.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <a href="#github">
                    <div className="btn-accent btn btn-sm">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                          <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                        </g>
                      </svg>
                      <span>
                        {' '}
                        Explore All
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section
        id="updates"
        aria-labelledby="updates-heading"
        className="latest-updates"
      >
        <div className="updates-container">
          <header className="section-header">
            <h2
              id="updates-heading"
              className="section-title home-section-title"
            >
              Latest Releases
            </h2>
            <p className="home-section-subtitle section-subtitle">
              {' '}
              Real-world plugins, pushed fast. Streamlined updates and concise
              changelogs.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="updates-layout">
            <div className="timeline-column">
              <article
                role="article"
                className="update-card--major update-card"
              >
                <div className="update-header">
                  <div className="update-badge">
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
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle
                          r=".5"
                          cx="7.5"
                          cy="7.5"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                    <span>v2.1.0</span>
                  </div>
                  <h3 className="update-title">ForgePulse</h3>
                </div>
                <p className="update-content">
                  {' '}
                  Performance-focused rebuild: reduced memory overhead by 35%,
                  async task batching, refined permissions handling. Stable on
                  1.20+.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="update-meta">
                  <span className="update-date">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      2 days ago
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <a href="#">
                    <div className="update-link">
                      <span>See changelog</span>
                    </div>
                  </a>
                </div>
              </article>
              <article role="article" className="update-card">
                <div className="update-header">
                  <div className="update-badge update-badge--patch">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>v1.4.3</span>
                  </div>
                  <h3 className="update-title">LanternGuard</h3>
                </div>
                <p className="update-content">
                  {' '}
                  Security patch: fixed edge-case despawn exploit, improved
                  region checks, added optional logging hooks.
                  Backwards-compatible with 1.19+.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="update-meta">
                  <span className="update-date">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      5 days ago
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <a href="#">
                    <div className="update-link">
                      <span>See changelog</span>
                    </div>
                  </a>
                </div>
              </article>
            </div>
            <div className="cards-column">
              <article role="article" className="update-card--beta update-card">
                <div className="update-header">
                  <div className="update-badge update-badge--beta">
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
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </g>
                    </svg>
                    <span>BETA</span>
                  </div>
                  <h3 className="update-title">NanoChat v0.9.0</h3>
                </div>
                <p className="update-content">
                  {' '}
                  New feature: channel-level encryption toggles and low-latency
                  relay mode. Feedback welcomed — known issue: rare emoji
                  rendering on legacy clients.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Download Beta</span>
                  </div>
                </a>
              </article>
              <article role="article" className="update-card">
                <div className="update-header">
                  <div className="update-badge">
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
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle
                          r=".5"
                          cx="7.5"
                          cy="7.5"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                    <span>v1.2.7</span>
                  </div>
                  <h3 className="update-title">QuickWarp</h3>
                </div>
                <p className="update-content">
                  {' '}
                  UX polish: instant-teleport safety checks, teleport cooldown
                  API, and minor fixes to warp persistence. Recommended for
                  high-concurrency servers.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="update-meta">
                  <span className="update-date">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      1 week ago
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <a href="#">
                    <div className="update-link">
                      <span>See changelog</span>
                    </div>
                  </a>
                </div>
              </article>
              <div className="update-card--info update-card">
                <div className="info-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="info-title">Transparent Roadmap</h4>
                <p className="info-content">
                  {' '}
                  Short iteration cycles, security-first patches, and
                  community-driven feature flags. Subscribe on GitHub for
                  release alerts.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="downloads"
        aria-labelledby="downloads-heading"
        className="downloads-section"
      >
        <div className="downloads-container">
          <header className="section-header">
            <h2
              id="downloads-heading"
              className="section-title home-section-title"
            >
              {' '}
              Downloads &amp; Repositories
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="home-section-subtitle section-subtitle">
              {' '}
              Direct access to the latest builds and source — deploy in minutes.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div role="list" className="masonry">
            <article role="listitem" className="card--featured card">
              <div className="card-image-wrap">
                <img
                  alt="Programming code on screen"
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="card-image"
                />
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="plugin-title">PluginForge-Core</h3>
                  <span className="plugin-version">v2.4.1</span>
                </div>
                <p className="plugin-body">
                  {' '}
                  Optimized event handling, &lt; 3ms tick overhead, full 1.20
                  compatibility. High-performance utilities and common API
                  foundation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="install-snippet">
                  <div className="snippet-header">
                    <span>Quick Install</span>
                    <button
                      aria-label="Copy install command"
                      className="copy-btn"
                    >
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
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
                    </button>
                  </div>
                  <code className="code-text">
                    {' '}
                    curl -L github.com/pluginforge/core/releases/latest
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </code>
                </div>
                <div className="card-actions">
                  <a href="#">
                    <div
                      aria-label="Download PluginForge-Core binary"
                      className="btn-primary btn"
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
                          <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10l5 5l5-5"></path>
                        </g>
                      </svg>
                      <span>
                        {' '}
                        Download Binary
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      aria-label="View changelog"
                      className="btn-outline btn"
                    >
                      <span>
                        {' '}
                        View Changelog
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Open repository" className="btn-link btn">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
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
                      <span>
                        {' '}
                        Open Repo
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </article>
            <article role="listitem" className="card">
              <div className="card-content">
                <div className="card-header">
                  <h3 className="plugin-title">VaultBridge Lite</h3>
                  <span className="plugin-version">v1.2.0</span>
                </div>
                <p className="plugin-body">
                  {' '}
                  Minimal dependency bridge for economy integrations.
                  Dependency-light compatibility layer.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card-meta">
                  <span className="meta-item">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      342
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="meta-item">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 3v12"></path>
                        <circle r="3" cx="18" cy="6"></circle>
                        <circle r="3" cx="6" cy="18"></circle>
                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      18
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="card-actions">
                  <a href="#">
                    <div
                      aria-label="Download VaultBridge Lite"
                      className="btn-primary btn btn-sm"
                    >
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
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
                      <span>
                        {' '}
                        Download
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      aria-label="View repository"
                      className="btn-link btn btn-sm"
                    >
                      <span>
                        {' '}
                        Repo
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </article>
            <article role="listitem" className="card">
              <div className="card-content">
                <div className="card-header">
                  <h3 className="plugin-title">pluginforge/core</h3>
                  <div className="status-badge--success status-badge">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      CI Passing
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <p className="plugin-body">
                  {' '}
                  High-performance utilities and common API. Browse source,
                  report issues, or compile locally.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="repo-actions">
                  <a href="#">
                    <div className="repo-link">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
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
                      <span>
                        {' '}
                        Clone
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="repo-link">
                      <span>Releases</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="repo-link">
                      <span>Issues</span>
                    </div>
                  </a>
                </div>
              </div>
            </article>
            <article role="listitem" className="card">
              <div className="card-content">
                <div className="card-header">
                  <h3 className="plugin-title">pluginforge/vaultbridge-lite</h3>
                  <div className="status-badge--success status-badge">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      CI Passing
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <p className="plugin-body">
                  {' '}
                  Dependency-light compatibility layer. Clean contribution
                  guidelines and semantic tags.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="repo-actions">
                  <a href="#">
                    <div className="repo-link">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
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
                      <span>
                        {' '}
                        Clone
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="repo-link">
                      <span>Releases</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="repo-link">
                      <span>Issues</span>
                    </div>
                  </a>
                </div>
              </div>
            </article>
            <article role="listitem" className="card--highlight card">
              <div className="card-content">
                <div className="highlight-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                      <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="plugin-title">GitHub Integration</h3>
                <p className="plugin-body">
                  {' '}
                  Seamless links to release artifacts and commit history. Each
                  listed item shows latest tag, release date, and CI status.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#github">
                  <div className="btn-accent btn btn-sm">
                    <span>View All Repos</span>
                  </div>
                </a>
              </div>
            </article>
            <article role="listitem" className="card">
              <div className="card-content">
                <div className="card-header">
                  <h3 className="plugin-title">pluginforge/tools</h3>
                  <div className="status-badge status-badge--warning">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      In Development
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <p className="plugin-body">
                  {' '}
                  Build scripts, test harnesses, and deployment utilities for
                  streamlined workflows.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="repo-actions">
                  <a href="#">
                    <div className="repo-link">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
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
                      <span>
                        {' '}
                        Clone
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="repo-link">
                      <span>Releases</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="repo-link">
                      <span>Issues</span>
                    </div>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="support"
        aria-labelledby="support-heading"
        className="support-section"
      >
        <div
          aria-hidden="true"
          className="support-backplate support-backplate--1"
        ></div>
        <div
          aria-hidden="true"
          className="support-backplate support-backplate--2"
        ></div>
        <div className="support-container">
          <div className="support-hero">
            <div className="support-content">
              <h2
                id="support-heading"
                className="section-title home-section-title"
              >
                {' '}
                Power the builds you love
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-content">
                {' '}
                If my lightweight plugins save you server resources, time, or
                headaches, a small contribution helps keep development fast,
                free, and future-focused. Your support fuels updates,
                compatibility testing, and new tools designed for server owners
                who demand efficiency.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="support-cta-wrap">
                <a href="#">
                  <div
                    aria-label="Support PluginForge development"
                    className="support-cta btn-primary btn btn-xl"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                    <span>Support PluginForge</span>
                  </div>
                </a>
                <p className="support-tagline">
                  {' '}
                  All code is open-source. Support accelerates features, not
                  access.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <aside className="support-options">
            <article className="support-card">
              <div className="support-card-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              </div>
              <h3 className="support-card-title">One-time tip</h3>
              <p className="support-card-desc">
                {' '}
                Quick, no-commit thank-you to keep projects moving.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </article>
            <article className="support-card support-card--featured">
              <div className="support-card-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="support-card-title">Monthly patron</h3>
              <p className="support-card-desc">
                {' '}
                Priority access to previews, early-release builds, and feature
                priorities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <span className="featured-badge">RECOMMENDED</span>
            </article>
            <article className="support-card">
              <div className="support-card-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="support-card-title">Server sponsorship</h3>
              <p className="support-card-desc">
                {' '}
                Custom tweaks, branded builds, or priority bug fixes for active
                servers.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </article>
            <div className="support-info">
              <h4 className="support-info-title">How contributions are used</h4>
              <ul className="support-info-list">
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Automated testing and CI for stability
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Cross-version compatibility work
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    New plugins requested by community
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Reliable hosting for downloads
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section
        id="github"
        aria-labelledby="github-heading"
        className="github-section"
      >
        <div className="gh-section">
          <div className="hero-panel">
            <div className="hero-panel-left">
              <div className="pulse-indicator">
                <span className="pulse"></span>
                <span className="pulse-label">Live</span>
              </div>
              <div className="ci-badges">
                <span className="badge--success badge">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    All Builds Passing
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="badge--info badge">6 Active Repos</span>
              </div>
            </div>
            <div className="hero-panel-right">
              <a href="#">
                <div
                  aria-label="View all repositories"
                  className="btn-primary btn"
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
                  <span>
                    {' '}
                    View Profile
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <header className="section-header">
            <h2
              id="github-heading"
              className="section-title home-section-title"
            >
              Real-time GitHub pulse
            </h2>
            <p className="home-section-subtitle section-subtitle">
              {' '}
              All source, zero friction. View active repos, recent commits, and
              build status at a glance.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="bento">
            <article className="bento-card bento-card--large">
              <div className="repo-header">
                <h3 className="repo-title">pluginforge/quantum-keepers</h3>
                <div className="repo-stats">
                  <span className="stat">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      456
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="stat">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 3v12"></path>
                        <circle r="3" cx="18" cy="6"></circle>
                        <circle r="3" cx="6" cy="18"></circle>
                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      32
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <p className="repo-desc">
                {' '}
                Minimal anti-cheat that prioritizes low CPU overhead and
                compatibility. Built for performance-critical production
                environments.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="repo-languages">
                <span className="language">
                  <span className="home-language-dot1"></span>
                  <span>
                    {' '}
                    Java 94.3%
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="language">
                  <span className="home-language-dot2"></span>
                  <span>
                    {' '}
                    Groovy 5.7%
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="recent-commit">
                <div className="commit-header">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 3v12"></path>
                      <circle r="3" cx="18" cy="6"></circle>
                      <circle r="3" cx="6" cy="18"></circle>
                      <path d="M18 9a9 9 0 0 1-9 9"></path>
                    </g>
                  </svg>
                  <span className="commit-sha">a7c9d2f</span>
                  <span className="commit-time">2h ago</span>
                </div>
                <p className="commit-message">
                  {' '}
                  feat: async batch processing for region checks
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="repo-actions">
                <a href="#">
                  <div className="btn-primary btn btn-sm">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>
                      {' '}
                      Clone
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Fork</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn-link btn btn-sm">
                    <span>Issues (8)</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="bento-card">
              <div className="repo-header">
                <h3 className="repo-title">flux-portals</h3>
                <span className="status-badge--success status-badge">
                  Active
                </span>
              </div>
              <p className="repo-desc">
                {' '}
                Fast teleportation with async world handling and safety checks.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="repo-meta">
                <span className="meta-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    289
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="meta-item">Java</span>
              </div>
              <a href="#">
                <div className="repo-link">
                  <span>View Repository →</span>
                </div>
              </a>
            </article>
            <article className="bento-card">
              <div className="repo-header">
                <h3 className="repo-title">silent-announcer</h3>
                <span className="status-badge--success status-badge">
                  Active
                </span>
              </div>
              <p className="repo-desc">
                {' '}
                Non-intrusive broadcast scheduler with RGB text support.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="repo-meta">
                <span className="meta-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    167
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="meta-item">Java</span>
              </div>
              <a href="#">
                <div className="repo-link">
                  <span>View Repository →</span>
                </div>
              </a>
            </article>
            <article className="bento-card bento-card--activity">
              <h3 className="activity-title">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Live Activity
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h3>
              <div className="activity-feed">
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <span className="activity-text">
                    Merged PR #42 to quantum-keepers
                  </span>
                  <span className="activity-time">3m</span>
                </div>
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <span className="activity-text">
                    Released v2.1.0 of forge-pulse
                  </span>
                  <span className="activity-time">2h</span>
                </div>
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <span className="activity-text">
                    Opened issue #89 in eco-balance
                  </span>
                  <span className="activity-time">5h</span>
                </div>
              </div>
            </article>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle
                      r=".5"
                      cx="7.5"
                      cy="7.5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
              </div>
              <div className="timeline-content">
                <span className="timeline-tag">v2.1.0</span>
                <span className="timeline-text">forge-pulse released</span>
                <span className="timeline-time">2 days ago</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
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
              <div className="timeline-content">
                <span className="timeline-text">32 commits across 4 repos</span>
                <span className="timeline-time">This week</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 3v12"></path>
                    <circle r="3" cx="18" cy="6"></circle>
                    <circle r="3" cx="6" cy="18"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </g>
                </svg>
              </div>
              <div className="timeline-content">
                <span className="timeline-text">
                  18 forks • 1.2k total stars
                </span>
                <span className="timeline-time">All time</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="timeline-content">
                <span className="timeline-text">All CI builds passing</span>
                <span className="timeline-time">Current status</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                  </g>
                </svg>
              </div>
              <div className="timeline-content">
                <span className="timeline-text">6 active repositories</span>
                <span className="timeline-time">Open source</span>
              </div>
            </div>
          </div>
          <div className="github-footer">
            <div className="footer-content">
              <h3 className="footer-title">
                Want something customized or audited?
              </h3>
              <p className="footer-text">
                {' '}
                Request bespoke builds, priority support, or sponsored feature
                work — source-first, community-driven.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#support">
                <div className="btn-primary btn">
                  <span>Contact for Custom Work</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container5">
        <div className="home-container6">
          <Script
            html={`<style>
        @keyframes float-slow {0%,100% {transform: translateY(0) scale(1);}
50% {transform: translateY(-30px) scale(1.05);}}@keyframes hero-entrance {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes pulse-glow {0%,100% {box-shadow: 0 0 20px
          color-mix(in srgb, var(--color-primary) 40%, transparent),
        var(--shadow-level-2);}
50% {box-shadow: 0 0 30px
          color-mix(in srgb, var(--color-primary) 60%, transparent),
        var(--shadow-level-3);}}@keyframes typing {from {width: 0;}
to {width: 100%;}}@keyframes fade-in-up {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes pulse-scale {0%,100% {transform: scale(1);}
50% {transform: scale(1.05);}}@keyframes pulse-ring {0%,100% {box-shadow: 0 0 10px var(--color-accent-900), 0 0 0 0 var(--color-accent);}
50% {box-shadow: 0 0 15px var(--color-accent-900), 0 0 0 8px transparent;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container7">
        <div className="home-container8">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Parallax effect for hero backplates
  const heroBackplates = document.querySelectorAll(".hero-backplate")

  if (
    heroBackplates.length > 0 &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  ) {
    let ticking = false

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const heroSection = document.getElementById("hero")

          if (heroSection) {
            const heroHeight = heroSection.offsetHeight
            const scrollPercent = scrolled / heroHeight

            if (scrollPercent < 1.2) {
              heroBackplates.forEach((backplate, index) => {
                const speed = 0.5 + index * 0.1
                backplate.style.transform = \`translateY(\${scrolled * speed}px)\`
              })
            }
          }

          ticking = false
        })

        ticking = true
      }
    })
  }

  // Copy code snippet functionality
  const copyButtons = document.querySelectorAll(".copy-btn")

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const codeText = button
        .closest(".install-snippet")
        .querySelector(".code-text")

      if (codeText) {
        const text = codeText.textContent

        navigator.clipboard
          .writeText(text)
          .then(() => {
            const originalHTML = button.innerHTML
            button.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/></svg>'

            setTimeout(() => {
              button.innerHTML = originalHTML
            }, 2000)
          })
          .catch((err) => {
            console.error("Failed to copy text:", err)
          })
      }
    })
  })

  // Add stagger animation to project cards
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
        animateOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const cards = document.querySelectorAll(
    ".plugin-card, .update-card, .card, .bento-card"
  )
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    animateOnScroll.observe(card)
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && href.length > 1) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container9">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon264"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text70">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home

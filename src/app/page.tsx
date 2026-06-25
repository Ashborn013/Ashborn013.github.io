import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between bg-zinc-950 text-zinc-100 overflow-hidden font-sans bg-grid-pattern selection:bg-zinc-800 selection:text-zinc-100">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-zinc-900/50 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[20%] w-[60%] h-[60%] rounded-full bg-zinc-900/40 blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight text-zinc-200 text-lg">
            ashborn013
          </span>
        </div>
        <div>
          <a
            href="https://github.com/ashborn013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1.5"
            id="header-github-link"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto px-6 py-16 w-full text-center relative z-10 space-y-6">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse" />
          <span>Under Construction</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Something new is <br className="hidden sm:inline" />
            being built here.
          </h1>
          <p className="max-w-md mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            A personal space for cybersecurity walkthroughs, CTF writeups, and technical blog posts.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-900 text-zinc-500 text-xs gap-4 relative z-10">
        <div>
          © {new Date().getFullYear()} ashborn013. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ashborn013"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
            id="footer-github-link"
          >
            GitHub
          </a>
          <span className="text-zinc-800">|</span>
          <span>
            Powered by <span className="text-zinc-400">GitHub Pages</span>
          </span>
        </div>
      </footer>
    </main>
  );
}

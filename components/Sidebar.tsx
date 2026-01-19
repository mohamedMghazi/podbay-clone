import { Logo } from '@/components/Logo';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-podbay-sidebar border-r border-podbay-border flex-col hidden md:flex h-screen fixed left-0 top-0 overflow-y-auto z-20">
      <div className="p-6">
        <a href="/" className="block" aria-label="Home">
          <Logo />
        </a>
      </div>

      <nav className="flex-1 px-4 space-y-8">
        <div>
          <ul className="space-y-1">
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-3 py-2 text-podbay-subtext hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="font-medium">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-3 py-2 text-podbay-subtext hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span className="font-medium">Discover</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="px-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Your Stuff
          </h3>
          <ul className="space-y-1">
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-3 py-2 text-podbay-subtext hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="font-medium">My Queue</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-3 py-2 text-podbay-subtext hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span className="font-medium">My Podcasts</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-3 py-2 text-podbay-subtext hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">Recents</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="p-6 text-xs text-gray-600 space-y-2">
        <p>Podbay Clone v1.0</p>
        <div className="flex gap-2">
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-400">
            All Podcasts
          </a>
        </div>
      </div>
    </aside>
  );
};

import { useState, useRef, useEffect } from 'react';
import { EpisodeSectionProps } from '@/types';
import { EpisodeRow } from '@/components/EpisodeRow';
import { EpisodeCard } from '@/components/EpisodeCard';
import { ContextMenu } from '@/components/ContextMenu';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

type LayoutType = 'compact' | 'scroll' | 'grid';

export const EpisodeSection: React.FC<EpisodeSectionProps> = ({ title, episodes }) => {
  const [layout, setLayout] = useState<LayoutType>('compact');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const {
    scrollContainerRef,
    scrollLeft,
    scrollRight,
    isLeftDisabled,
    isRightDisabled,
    checkScroll,
  } = useHorizontalScroll();

  useEffect(() => {
    checkScroll();
  }, [episodes, layout, checkScroll]);

  if (episodes.length === 0) return null;

  const menuItems = [
    { label: 'Switch layout to Scroll', onClick: () => setLayout('scroll') },
    { label: 'Switch layout to Grid', onClick: () => setLayout('grid') },
    { label: 'Switch layout to Compact', onClick: () => setLayout('compact') },
  ];

  return (
    <section className="relative group/section animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">{title}</h2>

        <div className="flex items-center gap-2">
          {layout === 'scroll' && (
            <div className="hidden md:flex items-center gap-2 animate-fade-in">
              <button
                onClick={scrollLeft}
                disabled={isLeftDisabled}
                className={`p-1.5 rounded-full transition-colors ${
                  isLeftDisabled
                    ? 'text-gray-700 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                disabled={isRightDisabled}
                className={`p-1.5 rounded-full transition-colors ${
                  isRightDisabled
                    ? 'text-gray-700 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}

          <div className="relative">
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
            <ContextMenu
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
              items={menuItems}
              triggerRef={menuButtonRef}
            />
          </div>
        </div>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {layout === 'compact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 animate-fade-in">
            {episodes.map((episode) => (
              <EpisodeRow key={episode.id} episode={episode} />
            ))}
          </div>
        )}

        {layout === 'scroll' && (
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto custom-scrollbar scroll-smooth pb-6 animate-fade-in"
          >
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        )}

        {layout === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 animate-fade-in">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

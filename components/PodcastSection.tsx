import { useState, useRef, useEffect } from 'react';
import { PodcastSectionProps } from '@/types';
import { PodcastCard } from '@/components/PodcastCard';
import { ContextMenu } from '@/components/ContextMenu';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

type LayoutType = 'scroll' | 'grid';

export const PodcastSection: React.FC<PodcastSectionProps> = ({ title, podcasts, topResult }) => {
  const [layout, setLayout] = useState<LayoutType>('scroll');
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
  }, [podcasts, layout, checkScroll]);

  if (podcasts.length === 0 && !topResult) return null;

  const toggleLayout = () => {
    setLayout((prev) => (prev === 'scroll' ? 'grid' : 'scroll'));
  };

  const menuItems = [
    {
      label: layout === 'scroll' ? 'Switch layout to Grid' : 'Switch layout to Scroll',
      onClick: toggleLayout,
    },
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
              className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
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

      {layout === 'scroll' ? (
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-5 overflow-x-auto custom-scrollbar scroll-smooth pb-6 animate-fade-in"
        >
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="w-40 md:w-48 shrink-0">
              <PodcastCard podcast={podcast} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 animate-fade-in">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      )}
    </section>
  );
};

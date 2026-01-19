import { useState, useRef } from 'react';
import Image from 'next/image';
import { EpisodeRowProps } from '@/types';
import { ContextMenu } from '@/components/ContextMenu';
import { getColorFromString } from '@/lib/utils/color-utils';

export const EpisodeRow: React.FC<EpisodeRowProps> = ({ episode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const podcastColor = getColorFromString(episode.podcastTitle);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const handleAddToQueue = () => {
    // Placeholder: Add to queue functionality
  };

  const handleNavigateToEpisode = () => {
    // Placeholder: Episode navigation
  };

  const handleNavigateToPodcast = () => {
    // Placeholder: Podcast navigation
  };

  const handleDownload = () => {
    // Placeholder: Download functionality
  };

  const menuItems = [
    { label: 'Add to My Queue', onClick: handleAddToQueue },
    { label: 'Go to episode', onClick: handleNavigateToEpisode },
    { label: 'Go to podcast', onClick: handleNavigateToPodcast },
    { label: 'Download file', onClick: handleDownload },
  ];

  return (
    <div className="flex items-center gap-4 p-3 hover:bg-podbay-surface rounded-lg transition-colors cursor-pointer group border border-transparent">
      <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden bg-podbay-surface">
        {!imgError && episode.imageUrl ? (
          <Image
            src={episode.imageUrl}
            alt={episode.title}
            fill
            className="object-cover"
            sizes="48px"
            onError={() => setImgError(true)}
            unoptimized={true}
            priority={true}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4 className="font-semibold text-gray-200 text-[15px] truncate pr-4 group-hover:text-white transition-colors">
          {episode.title}
        </h4>
        <div className="flex items-center gap-2 text-xs mt-0.5">
          <span
            className={`${podcastColor} font-medium truncate max-w-[200px] hover:text-white transition-colors`}
          >
            {episode.podcastTitle}
          </span>
        </div>
      </div>

      <div className="relative">
        <button
          ref={buttonRef}
          onClick={handleMenuClick}
          className="p-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/5"
          aria-label="Episode options"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>

        <ContextMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          items={menuItems}
          triggerRef={buttonRef}
        />
      </div>
    </div>
  );
};

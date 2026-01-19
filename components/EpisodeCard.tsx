import { useRef, useState } from 'react';
import Image from 'next/image';
import { Episode } from '@/types';
import { ContextMenu } from '@/components/ContextMenu';

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    <div className="flex flex-col gap-2 relative w-40 md:w-48 shrink-0">
      <div className="group relative aspect-square overflow-hidden rounded-md bg-podbay-surface shadow-lg cursor-pointer">
        {!imgError && episode.imageUrl ? (
          <Image
            src={episode.imageUrl}
            alt={episode.title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 160px, 192px"
            onError={() => setImgError(true)}
            unoptimized={true}
            priority={true}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-500"
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

        {!menuOpen && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 z-10">
            <svg
              className="w-12 h-12 text-white drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-col min-w-0 pr-6 relative">
        <h4
          className="font-bold text-gray-100 text-[14px] leading-tight line-clamp-2 h-10"
          title={episode.title}
        >
          {episode.title}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs text-blue-400 font-medium truncate">{episode.publishedDate}</p>
          <span className="text-gray-600 text-[10px]">•</span>
          <p className="text-xs text-gray-500 font-medium">{episode.duration}</p>
        </div>

        <button
          ref={buttonRef}
          onClick={handleMenuClick}
          className="absolute -right-2 top-0 p-2 text-gray-500 hover:text-white transition-colors"
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

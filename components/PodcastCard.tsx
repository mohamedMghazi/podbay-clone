import { useState, useRef } from 'react';
import Image from 'next/image';
import { PodcastCardProps } from '@/types';
import { ContextMenu } from '@/components/ContextMenu';
import { getColorFromString } from '@/lib/utils/color-utils';

export const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const authorColor = getColorFromString(podcast.author);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const handleAddToQueue = () => {
    // Placeholder: Add to queue functionality
  };

  const handleNavigateToPodcast = () => {
    // Placeholder: Podcast navigation
  };

  const handleShare = () => {
    // Placeholder: Share functionality
  };

  const menuItems = [
    { label: 'Add to My Queue', onClick: handleAddToQueue },
    { label: 'Go to podcast', onClick: handleNavigateToPodcast },
    { label: 'Share', onClick: handleShare },
  ];

  return (
    <div className="flex flex-col gap-3 relative">
      <div className="group relative aspect-square overflow-hidden rounded-md bg-podbay-surface shadow-lg cursor-pointer">
        {!imgError && podcast.imageUrl ? (
          <Image
            src={podcast.imageUrl}
            alt={podcast.title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 160px, 192px"
            onError={() => setImgError(true)}
            unoptimized={true}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-500 uppercase">
              {podcast.title.charAt(0)}
            </span>
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
        <h3 className="font-bold text-white text-[15px] leading-tight truncate">{podcast.title}</h3>
        <p className={`text-sm truncate font-medium mt-1 ${authorColor}`}>{podcast.author}</p>

        <button
          ref={buttonRef}
          onClick={handleMenuClick}
          className="absolute -right-2 top-1 p-2 text-gray-500 hover:text-white transition-colors"
          aria-label="More options"
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

// Domain Entities
export interface Podcast {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  subscriberCount?: string;
}

export interface Episode {
  id: string;
  title: string;
  podcastTitle: string;
  publishedDate: string;
  duration: string;
  imageUrl: string;
}

export interface SearchResponse {
  topResult?: Podcast;
  podcasts: Podcast[];
  episodes: Episode[];
  cached?: boolean;
}

export enum LoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

// iTunes API specific types
export interface ITunesResult {
  wrapperType: string;
  kind: string;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  artworkUrl600?: string;
  artworkUrl100?: string;
  artworkUrl60?: string;
  releaseDate?: string;
  trackTimeMillis?: number;
  feedUrl?: string;
}

export interface ITunesResponse {
  resultCount: number;
  results: ITunesResult[];
}

// Component Props
export interface HeaderProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

export interface PodcastCardProps {
  podcast: Podcast;
}

export interface EpisodeRowProps {
  episode: Episode;
}

export interface PodcastSectionProps {
  title: string;
  podcasts: Podcast[];
  topResult?: Podcast;
}

export interface EpisodeSectionProps {
  title: string;
  episodes: Episode[];
}

export interface MenuItem {
  label: string;
  onClick: () => void;
}

export interface ContextMenuPosition {
  top: number;
  left: number;
}

export interface ContextMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  triggerRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

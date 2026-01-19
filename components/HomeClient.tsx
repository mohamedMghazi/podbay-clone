'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { PodcastSection } from '@/components/PodcastSection';
import { EpisodeSection } from '@/components/EpisodeSection';
import { LoadingState, SearchResponse } from '@/types';
import { usePodcastSearch } from '@/hooks/usePodcastSearch';

interface HomeClientProps {
  initialQuery: string;
  initialData: SearchResponse;
}

export const HomeClient: React.FC<HomeClientProps> = ({ initialQuery, initialData }) => {
  const { query, data, status, error, handleSearch, retry } = usePodcastSearch(
    initialQuery,
    initialData
  );

  return (
    <div className="flex min-h-screen bg-podbay-bg font-sans selection:bg-blue-500 selection:text-white">
      <Sidebar />

      <div className="flex-1 md:ml-64 min-w-0 flex flex-col">
        <Header onSearch={handleSearch} initialQuery={query} />

        <main
          className="flex-1 px-6 md:px-8 pb-12 overflow-y-auto overflow-x-hidden custom-scrollbar"
          dir="auto"
        >
          {status === LoadingState.LOADING && (
            <div className="mt-8">
              <LoadingSkeleton />
            </div>
          )}

          {status === LoadingState.ERROR && (
            <div className="mt-12 text-center py-20 bg-podbay-surface rounded-2xl border border-podbay-border">
              <p className="text-red-400 font-medium mb-2">Something went wrong</p>
              <p className="text-gray-500">{error}</p>
              <button onClick={retry} className="mt-4 text-blue-400 hover:text-blue-300">
                Try Again
              </button>
            </div>
          )}

          {status === LoadingState.SUCCESS && data && (
            <div className="space-y-12 animate-fade-in mt-6">
              <PodcastSection
                title={`Top podcasts for ${query}`}
                podcasts={data.podcasts}
                topResult={data.topResult}
              />

              <EpisodeSection title={`Top episodes for ${query}`} episodes={data.episodes} />

              {data.podcasts.length === 0 && data.episodes.length === 0 && !data.topResult && (
                <div className="py-20 text-center text-gray-500">
                  No results found for &ldquo;{query}&rdquo;.
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

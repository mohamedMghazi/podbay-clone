import { useState, useCallback, useRef } from 'react';
import { SearchResponse, LoadingState } from '@/types';
import { podcastApi, PodcastAPIError } from '@/lib/api/podcast-api';

export const usePodcastSearch = (initialQuery: string, initialData?: SearchResponse) => {
  const [query, setQuery] = useState(initialQuery);
  const [data, setData] = useState<SearchResponse | null>(() => initialData || null);
  const [status, setStatus] = useState<LoadingState>(() =>
    initialData ? LoadingState.SUCCESS : LoadingState.IDLE
  );
  const [error, setError] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    // Cancel previous request if exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setStatus(LoadingState.LOADING);
    setError(null);

    try {
      const results = await podcastApi.search(searchQuery);
      setData(results);
      setStatus(LoadingState.SUCCESS);
    } catch (err) {
      if (err instanceof PodcastAPIError) {
        // Handle specific error cases
        if (err.statusCode === 400) {
          setError('Invalid search query. Please check your input.');
        } else if (err.statusCode === 429) {
          setError('Too many requests. Please wait a moment and try again.');
        } else if (err.statusCode === 408) {
          setError('Request timeout. Please try again.');
        } else {
          setError(err.message || 'Failed to fetch results. Please try again.');
        }
      } else {
        setError('Failed to fetch results. Please try again.');
      }
      setStatus(LoadingState.ERROR);
    }
  }, []);

  const handleSearch = useCallback(
    (newQuery: string) => {
      setQuery(newQuery);
      performSearch(newQuery);
    },
    [performSearch]
  );

  const retry = useCallback(() => {
    performSearch(query);
  }, [performSearch, query]);

  return { query, data, status, error, handleSearch, retry };
};

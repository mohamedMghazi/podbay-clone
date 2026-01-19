import { SearchResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class PodcastAPIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public details?: any
  ) {
    super(message);
    this.name = 'PodcastAPIError';
  }
}

export const podcastApi = {
  /**
   * Search for podcasts and episodes via backend
   */
  async search(query: string): Promise<SearchResponse> {
    try {
      const encodedQuery = encodeURIComponent(query.trim());
      const url = `${API_BASE_URL}/api/podcasts/search?query=${encodedQuery}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Disable caching for development, adjust for production
        cache: 'no-store',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new PodcastAPIError(
          errorData.message || 'Failed to search podcasts',
          response.status,
          errorData
        );
      }

      const data: SearchResponse = await response.json();
      return data;
    } catch (error) {
      if (error instanceof PodcastAPIError) {
        throw error;
      }

      // Network or other errors
      throw new PodcastAPIError(
        error instanceof Error ? error.message : 'Network error occurred',
        0
      );
    }
  },
};

export { PodcastAPIError };

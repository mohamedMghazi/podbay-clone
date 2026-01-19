import { HomeClient } from '@/components/HomeClient';
import { podcastApi } from '@/lib/api/podcast-api';

export default async function Home() {
  const initialQuery = 'ثمانية';

  let initialData;

  try {
    initialData = await podcastApi.search(initialQuery);
  } catch (error) {
    console.error('Failed to fetch initial data:', error);
    initialData = {
      podcasts: [],
      episodes: [],
      cached: false,
    };
  }

  return <HomeClient initialQuery={initialQuery} initialData={initialData} />;
}

import getSportsEventData from './api/getSportsEventData';
import MainContent from './components/mainContent';
// import SportsCard from './components/sportsCard';
import { SportsResponse } from './types';

export default async function Home() {
  const data: SportsResponse[] = await getSportsEventData();
  return <MainContent data={data} />;
}

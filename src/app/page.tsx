import getSportsEventData from './api/getSportsEventData';
import MainContent from './components/mainContent';
import CardSelectionProvider from './context/cardSelectionContext';
import { SportsCard } from './types';

export default async function Home() {
  const sportsEventList: SportsCard[] = await getSportsEventData();

  return (
    <CardSelectionProvider>
      <MainContent sportsEventList={sportsEventList} />
    </CardSelectionProvider>
  );
}

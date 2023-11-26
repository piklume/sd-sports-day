import getSportsEventData from "./api/getSportsEventData";
import MainContent from "./components/mainContent";
import CardSelectionProvider from "./context/cardSelectionContext";
import { NotificationProvider } from "./context/notificationContext";
import { SportsCard } from "./types";

export default async function Home() {
  const sportsEventList: SportsCard[] = await getSportsEventData();

  return (
    <NotificationProvider>
      <CardSelectionProvider>
        <MainContent sportsEventList={sportsEventList} />
      </CardSelectionProvider>
    </NotificationProvider>
  );
}

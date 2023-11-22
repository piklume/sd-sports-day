import { SportsResponse } from '../types';
import CardList from './cardList';
// import SportsCard from './sportsCard';

interface Props {
  data: SportsResponse[];
}

const MainContent = ({ data }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardList data={data} />
    </main>
  );
};

export default MainContent;

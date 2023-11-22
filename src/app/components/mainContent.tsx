import { SportsResponse } from '../types';
import CardList from './cardList';

interface Props {
  data: SportsResponse[];
}

const MainContent = ({ data }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full gap-4">
        <div className="basis-1/2 p-4 rounded-lg border border-neutral-800">
          <CardList data={data} />
        </div>
        <div className="basis-1/2 p-4 rounded-lg border border-neutral-800">
          02
        </div>
      </div>
    </main>
  );
};

export default MainContent;

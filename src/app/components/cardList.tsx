import { SportsCard as SportsCardType } from '../types';
import SportsCard from './sportsCard';

interface Props {
  data: SportsCardType[];
  onClick: Function;
  ctaText: string;
}

const CardList = ({ data, onClick, ctaText }: Props) => {
  return (
    <div className="mb-32 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left overflow-y-scroll">
      {data.map((sport) => (
        <SportsCard
          key={sport.id}
          card={sport}
          onClick={onClick}
          ctaText={ctaText}
        />
      ))}
    </div>
  );
};

export default CardList;

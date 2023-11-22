import { SportsResponse } from '../types';
import SportsCard from './sportsCard';

interface Props {
  data: SportsResponse[];
}

const CardList = ({ data }: Props) => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {data.map((sport) => {
        const {
          id,
          event_name: eventName,
          event_category: eventCategory,
          start_time: startTime,
          end_time: endTime,
        } = sport;

        return (
          <SportsCard
            key={id}
            name={eventName}
            category={eventCategory}
            startTime={startTime}
            endTime={endTime}
          />
        );
      })}
    </div>
  );
};

export default CardList;

import SportsCard from "./sportsCard";
import { SportsCard as SportsCardType } from "../types";

interface Props {
  data: SportsCardType[];
  onClick: Function;
  ctaText: string;
  isDisabled?: boolean;
}

const CardList = ({ data, onClick, ctaText, isDisabled = false }: Props) => {
  return (
    <div className="mb-32 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {data.map((sport) => (
        <SportsCard
          key={sport.id}
          card={sport}
          onClick={onClick}
          ctaText={ctaText}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};

export default CardList;

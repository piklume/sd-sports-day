import { useContext } from 'react';
import CardList from './cardList';
import { CardSelectionContext } from '../context/cardSelectionContext';

const AvailableCards = () => {
  const { availableCards, addToSelection } = useContext(CardSelectionContext);

  return (
    <div className="basis-1/2 p-4 rounded-lg border border-neutral-800">
      <CardList
        data={availableCards}
        onClick={addToSelection}
        ctaText="select"
      />
    </div>
  );
};

export default AvailableCards;

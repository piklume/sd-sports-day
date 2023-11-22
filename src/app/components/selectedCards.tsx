import { useContext } from 'react';
import CardList from './cardList';
import { CardSelectionContext } from '../context/cardSelectionContext';

const SelectedCards = () => {
  const { selectedCards, removeFromSelection } =
    useContext(CardSelectionContext);

  return (
    <div className="basis-1/2 p-4 rounded-lg border border-neutral-800">
      <CardList data={selectedCards} onClick={removeFromSelection} ctaText="remove" />
    </div>
  );
};

export default SelectedCards;

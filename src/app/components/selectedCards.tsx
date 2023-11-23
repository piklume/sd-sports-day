import { useContext } from 'react';
import CardList from './cardList';
import { CardSelectionContext } from '../context/cardSelectionContext';
import CardListWrapper from './cardListWrapper';

const SelectedCards = () => {
  const { selectedCards, removeFromSelection } =
    useContext(CardSelectionContext);

  return (
    <CardListWrapper title="Selected Events">
      <CardList
        data={selectedCards}
        onClick={removeFromSelection}
        ctaText="Remove"
      />
    </CardListWrapper>
  );
};

export default SelectedCards;

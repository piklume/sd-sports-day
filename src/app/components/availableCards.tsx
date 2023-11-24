import { useContext } from 'react';
import CardList from './cardList';
import { CardSelectionContext } from '../context/cardSelectionContext';
import CardListWrapper from './cardListWrapper';

const AvailableCards = () => {
  const { availableCards, addToSelectionAndLocalStorage } =
    useContext(CardSelectionContext);

  return (
    <CardListWrapper title="All Events">
      <CardList
        data={availableCards}
        onClick={addToSelectionAndLocalStorage}
        ctaText="Select"
      />
    </CardListWrapper>
  );
};

export default AvailableCards;

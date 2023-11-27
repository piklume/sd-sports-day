import { useContext } from "react";

import CardList from "./cardList";
import CardListWrapper from "./cardListWrapper";

import { CardSelectionContext } from "../context/cardSelectionContext";

const AvailableCards = () => {
  const { availableCards, addToSelection, disableCardSelection } =
    useContext(CardSelectionContext);

  return (
    <CardListWrapper title="All Events">
      <CardList
        data={availableCards}
        onClick={addToSelection}
        ctaText="Select"
        isDisabled={disableCardSelection}
      />
    </CardListWrapper>
  );
};

export default AvailableCards;

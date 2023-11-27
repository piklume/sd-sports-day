import { useContext } from "react";

import CardList from "./cardList";
import CardListWrapper from "./cardListWrapper";

import { CardSelectionContext } from "../context/cardSelectionContext";

const AvailableCards = () => {
  const { getAvailableCards, addToSelection, disableCardSelection } =
    useContext(CardSelectionContext);

  return (
    <CardListWrapper title="All Events">
      <CardList
        data={getAvailableCards}
        onClick={addToSelection}
        ctaText="Select"
        isDisabled={disableCardSelection}
      />
    </CardListWrapper>
  );
};

export default AvailableCards;

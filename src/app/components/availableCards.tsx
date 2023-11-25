import { useContext } from "react";
import CardList from "./cardList";
import { CardSelectionContext } from "../context/cardSelectionContext";
import CardListWrapper from "./cardListWrapper";

const AvailableCards = () => {
  const {
    availableCards,
    addToSelectionAndLocalStorage,
    disableCardSelection,
  } = useContext(CardSelectionContext);

  return (
    <CardListWrapper title="All Events">
      <CardList
        data={availableCards}
        onClick={addToSelectionAndLocalStorage}
        ctaText="Select"
        isDisabled={disableCardSelection}
      />
    </CardListWrapper>
  );
};

export default AvailableCards;

import { useContext } from "react";

import CardList from "./cardList";
import CardListWrapper from "./cardListWrapper";
import { CardSelectionContext } from "../context/cardSelectionContext";

const SelectedCards = () => {
  const { getSelectedCards, removeFromSelection } =
    useContext(CardSelectionContext);

  return (
    <CardListWrapper title="Selected Events">
      <CardList
        data={getSelectedCards}
        onClick={removeFromSelection}
        ctaText="Remove"
      />
    </CardListWrapper>
  );
};

export default SelectedCards;

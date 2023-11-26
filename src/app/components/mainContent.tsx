"use client";

import { useContext, useEffect } from "react";
import { SportsCard } from "../types";
import { CardSelectionContext } from "../context/cardSelectionContext";
import AvailableCards from "./availableCards";
import SelectedCards from "./selectedCards";
import Toast from "./toast";

interface Props {
  sportsEventList: SportsCard[];
}

const MainContent = ({ sportsEventList }: Props) => {
  const {
    selectedCards,
    setAvailableCards,
    setSelectedCards,
    setDisableCardSelection,
  } = useContext(CardSelectionContext);

  // hydrate available cards with events list fetched from API
  useEffect(() => {
    setAvailableCards(sportsEventList);
  }, [sportsEventList, setAvailableCards]);

  // re-hydrate application from localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let selectedCardsLocal = JSON.parse(
        localStorage.getItem("selectedEvents")!
      );

      if (selectedCardsLocal?.length > 0) {
        const filteredAvailableCards = sportsEventList.filter(
          (availableCard: SportsCard) => {
            return !selectedCardsLocal.some(
              (selectedCard: SportsCard) => selectedCard.id === availableCard.id
            );
          }
        );

        setAvailableCards(filteredAvailableCards);
        setSelectedCards(selectedCardsLocal);
      }
    }
  }, [sportsEventList, setAvailableCards, setSelectedCards]);

  // toggle disable card selection flag if 3 cards are selected
  useEffect(() => {
    if (selectedCards.length === 3) {
      setDisableCardSelection(true);
    } else {
      setDisableCardSelection(false);
    }
  }, [selectedCards, setDisableCardSelection]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Toast />
      <div className="flex min-h-[45rem] h-full w-full gap-4">
        <AvailableCards />
        <SelectedCards />
      </div>
    </main>
  );
};

export default MainContent;

"use client";

import { useContext, useEffect } from "react";
import { SportsCard } from "../types";
import { CardSelectionContext } from "../context/cardSelectionContext";
import AvailableCards from "./availableCards";
import SelectedCards from "./selectedCards";

interface Props {
  sportsEventList: SportsCard[];
}

const MainContent = ({ sportsEventList }: Props) => {
  const { availableCards, selectedCards, setAvailableCards, setSelectedCards } =
    useContext(CardSelectionContext);

  // hydrate available cards with events list fetched from API
  useEffect(() => {
    setAvailableCards(sportsEventList);
  }, [sportsEventList, setAvailableCards]);

  // re-hydrate application from localStorage
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage &&
      selectedCards.length === 0 &&
      availableCards.length > 0
    ) {
      let selectedCardsLocal = JSON.parse(
        localStorage.getItem("selectedEvents")!
      );

      const filteredAvailableCards = availableCards.filter(
        (availableCard: SportsCard) => {
          return !selectedCardsLocal.some(
            (selectedCard: SportsCard) => selectedCard.id === availableCard.id
          );
        }
      );

      setAvailableCards(filteredAvailableCards);
      setSelectedCards(selectedCardsLocal);
    }
  }, [availableCards, selectedCards, setAvailableCards, setSelectedCards]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex min-h-[45rem] h-full w-full gap-4">
        <AvailableCards />
        <SelectedCards />
      </div>
    </main>
  );
};

export default MainContent;

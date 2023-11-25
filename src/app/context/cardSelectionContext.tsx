"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { SportsCard } from "../types";
import { setSelectedEventsToLocalStorage } from "../utils";

interface ContextType {
  availableCards: SportsCard[];
  setAvailableCards: Dispatch<SetStateAction<SportsCard[]>>;
  addToAvailable: (card: SportsCard) => void;
  removeFromAvailable: (card: SportsCard) => void;
  selectedCards: SportsCard[];
  setSelectedCards: Dispatch<SetStateAction<SportsCard[]>>;
  addToSelection: (card: SportsCard) => void;
  removeFromSelection: (card: SportsCard) => void;
  addToSelectionAndLocalStorage: (card: SportsCard) => void;
  disableCardSelection: boolean;
  setDisableCardSelection: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: ReactNode;
}

export const CardSelectionContext = createContext<ContextType>({
  availableCards: [],
  setAvailableCards: () => {},
  addToAvailable: () => {},
  removeFromAvailable: () => {},
  selectedCards: [],
  setSelectedCards: () => {},
  addToSelection: () => {},
  removeFromSelection: () => {},
  addToSelectionAndLocalStorage: () => {},
  disableCardSelection: false,
  setDisableCardSelection: () => {},
});

const CardSelectionProvider = ({ children }: Props) => {
  const [selectedCards, setSelectedCards] = useState<SportsCard[]>([]);
  const [availableCards, setAvailableCards] = useState<SportsCard[]>([]);
  const [disableCardSelection, setDisableCardSelection] =
    useState<boolean>(false);

  const addToAvailable = (card: SportsCard) => {
    setAvailableCards((prev) => [...prev, card]);
  };

  const removeFromAvailable = (card: SportsCard) => {
    const filteredCards = availableCards.filter((item) => item.id !== card.id);
    setAvailableCards(filteredCards);
  };

  const addToSelection = (card: SportsCard) => {
    setSelectedCards((prev) => [...prev, card]);
    removeFromAvailable(card);
  };

  const addToSelectionAndLocalStorage = (card: SportsCard) => {
    setSelectedCards((prev) => {
      const newSelectedCards = [...prev, card];
      setSelectedEventsToLocalStorage(newSelectedCards);
      return newSelectedCards;
    });
    removeFromAvailable(card);
  };

  const removeFromSelection = (card: SportsCard) => {
    const filteredCards = selectedCards.filter((item) => item.id !== card.id);
    setSelectedCards(filteredCards);
    setSelectedEventsToLocalStorage(filteredCards);
    addToAvailable(card);
  };

  return (
    <CardSelectionContext.Provider
      value={{
        availableCards,
        setAvailableCards,
        addToAvailable,
        removeFromAvailable,
        selectedCards,
        setSelectedCards,
        addToSelection,
        removeFromSelection,
        addToSelectionAndLocalStorage,
        disableCardSelection,
        setDisableCardSelection,
      }}
    >
      {children}
    </CardSelectionContext.Provider>
  );
};

export default CardSelectionProvider;

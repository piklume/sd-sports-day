'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { SportsCard } from '../types';

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
});

const CardSelectionProvider = ({ children }: Props) => {
  const [selectedCards, setSelectedCards] = useState<SportsCard[]>([]);
  const [availableCards, setAvailableCards] = useState<SportsCard[]>([]);

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
    addToSelection(card);
    localStorage.setItem('selectedEvents', JSON.stringify(selectedCards));
  };

  const removeFromSelection = (card: SportsCard) => {
    const filteredCards = selectedCards.filter((item) => item.id !== card.id);
    setSelectedCards(filteredCards);
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
      }}
    >
      {children}
    </CardSelectionContext.Provider>
  );
};

export default CardSelectionProvider;

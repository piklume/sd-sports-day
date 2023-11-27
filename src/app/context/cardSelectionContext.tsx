"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";

import { NotificationContext } from "./notificationContext";
import { NotificationTypes, SportsCard } from "../types";
import {
  validateIncomingEventSelection,
  setSelectedEventsToLocalStorage,
} from "../utils";

interface ContextType {
  availableCards: SportsCard[];
  setAvailableCards: Dispatch<SetStateAction<SportsCard[]>>;
  addToAvailable: (card: SportsCard) => void;
  removeFromAvailable: (card: SportsCard) => void;
  selectedCards: SportsCard[];
  setSelectedCards: Dispatch<SetStateAction<SportsCard[]>>;
  addToSelection: (card: SportsCard) => void;
  removeFromSelection: (card: SportsCard) => void;
  disableCardSelection: boolean;
  setDisableCardSelection: Dispatch<SetStateAction<boolean>>;
  getAvailableCards: SportsCard[];
  getSelectedCards: SportsCard[];
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
  disableCardSelection: false,
  setDisableCardSelection: () => {},
  getAvailableCards: [],
  getSelectedCards: [],
});

const CardSelectionProvider = ({ children }: Props) => {
  const [selectedCards, setSelectedCards] = useState<SportsCard[]>([]);
  const [availableCards, setAvailableCards] = useState<SportsCard[]>([]);
  const [disableCardSelection, setDisableCardSelection] =
    useState<boolean>(false);

  const { notify } = useContext(NotificationContext);

  const addToAvailable = (card: SportsCard) => {
    setAvailableCards((prev) => [...prev, card]);
  };

  const removeFromAvailable = (card: SportsCard) => {
    const filteredCards = availableCards.filter((item) => item.id !== card.id);
    setAvailableCards(filteredCards);
  };

  const addToSelection = (card: SportsCard) => {
    const { result, message } = validateIncomingEventSelection(
      selectedCards,
      card
    );
    if (result) {
      setSelectedCards((prev) => {
        const newSelectedCards = [...prev, card];
        setSelectedEventsToLocalStorage(newSelectedCards);
        return newSelectedCards;
      });
      removeFromAvailable(card);
    } else {
      notify({
        type: NotificationTypes.TOAST,
        message,
        show: true,
        isDismissable: true,
      });
    }
  };

  const removeFromSelection = (card: SportsCard) => {
    const filteredCards = selectedCards.filter((item) => item.id !== card.id);
    setSelectedCards(filteredCards);
    setSelectedEventsToLocalStorage(filteredCards);
    addToAvailable(card);
  };

  const getAvailableCards = useMemo(() => {
    const cards = [...availableCards];
    const sortedCards = cards.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    return sortedCards;
  }, [availableCards]);

  const getSelectedCards = useMemo(() => {
    const cards = [...selectedCards];
    const sortedCards = cards.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    return sortedCards;
  }, [selectedCards]);

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
        disableCardSelection,
        setDisableCardSelection,
        getAvailableCards,
        getSelectedCards,
      }}
    >
      {children}
    </CardSelectionContext.Provider>
  );
};

export default CardSelectionProvider;

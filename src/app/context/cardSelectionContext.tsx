"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { NotificationTypes, SportsCard } from "../types";
import {
  validateIncomingEventSelection,
  setSelectedEventsToLocalStorage,
} from "../utils";
import { NotificationContext } from "./notificationContext";

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
      }}
    >
      {children}
    </CardSelectionContext.Provider>
  );
};

export default CardSelectionProvider;

import { SportsCard } from "../types";

export const getTimeHourFromDateTime = (dateString: string) =>
  new Intl.DateTimeFormat("en-US", { hour: "numeric" }).format(
    new Date(dateString)
  );

export const setSelectedEventsToLocalStorage = (events: SportsCard[]) =>
  localStorage.setItem("selectedEvents", JSON.stringify(events));

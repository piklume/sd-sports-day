import { SportsCard } from "../types";

export const getTimeHourFromDateTime = (dateString: string) =>
  new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
    new Date(dateString)
  );

export const setSelectedEventsToLocalStorage = (events: SportsCard[]) =>
  localStorage.setItem("selectedEvents", JSON.stringify(events));

export const validateIncomingEventSelection = (
  existingEvents: SportsCard[],
  incomingEvent: SportsCard
): { result: boolean; message: string } => {
  const startTimeIncoming = new Date(incomingEvent.startTime).getTime();
  const endTimeIncoming = new Date(incomingEvent.endTime).getTime();

  // Sort events based on start time
  existingEvents.sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );

  for (let i = 0; i < existingEvents.length; i++) {
    const existingEvent = existingEvents[i];
    const startTimeExisting = new Date(existingEvent.startTime).getTime();
    const endTimeExisting = new Date(existingEvent.endTime).getTime();

    // Check for overlap only with events that occur after the incoming event
    if (startTimeExisting >= endTimeIncoming) {
      break; // No need to check further, as events are sorted by start time
    }

    if (
      (startTimeIncoming >= startTimeExisting &&
        startTimeIncoming < endTimeExisting) ||
      (endTimeIncoming > startTimeExisting &&
        endTimeIncoming <= endTimeExisting)
    ) {
      // Overlapping events found
      const message = `Cannot select ${incomingEvent.name}. Overlap found between existing event ${existingEvent.name}.`;
      console.log(message);
      const result = false;
      return { result, message };
    }
  }

  // No overlapping events found
  const message = `Selected event ${incomingEvent.name}`;
  console.log(message);
  const result = true;

  return { result, message };
};

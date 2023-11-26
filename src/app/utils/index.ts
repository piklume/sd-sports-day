import { SportsCard } from "../types";

export const getTimeHourFromDateTime = (dateString: string) =>
  new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
    new Date(dateString)
  );

export const setSelectedEventsToLocalStorage = (events: SportsCard[]) =>
  localStorage.setItem("selectedEvents", JSON.stringify(events));

export const isIncomingEventValid = (
  existingEvents: SportsCard[],
  incomingEvent: SportsCard
) => {
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
      console.log(
        `Overlap found between incoming event ${incomingEvent.name} and existing event ${existingEvent.name}`
      );
      return false;
    }
  }

  // No overlapping events found
  console.log("No overlapping events found for the incoming event");
  return true;
};

import { SportsCard, SportsResponse } from '../types';

export default async function getSportsEventData() {
  const res = await fetch(
    'https://run.mocky.io/v3/e23b974a-4702-4f64-9d33-91f020096b2c'
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: SportsResponse[] = await res.json();

  // transform data to camel case
  const sportsEventList: SportsCard[] = data.map(
    ({ id, event_name, event_category, start_time, end_time }) => ({
      id,
      name: event_name,
      category: event_category,
      startTime: start_time,
      endTime: end_time,
    })
  );

  return sportsEventList;
}

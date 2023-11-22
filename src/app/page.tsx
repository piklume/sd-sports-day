import SportsCard from './components/sportsCard';

interface SportsResponse {
  id: number;
  event_name: string;
  event_category: string;
  start_time: string;
  end_time: string;
}

async function getData() {
  const res = await fetch(
    'https://run.mocky.io/v3/e23b974a-4702-4f64-9d33-91f020096b2c'
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data: SportsResponse[] = await getData();
  console.log('print data', data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.map((sport) => {
          const {
            id,
            event_name: eventName,
            event_category: eventCategory,
            start_time: startTime,
            end_time: endTime,
          } = sport;

          return (
            <SportsCard
              key={id}
              name={eventName}
              category={eventCategory}
              startTime={startTime}
              endTime={endTime}
            />
          );
        })}
      </div>
    </main>
  );
}

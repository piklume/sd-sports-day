export default async function getSportsEventData() {
  const res = await fetch(
    'https://run.mocky.io/v3/e23b974a-4702-4f64-9d33-91f020096b2c'
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

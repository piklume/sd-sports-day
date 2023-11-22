export const getTimeHourFromDateTime = (dateString: string) =>
  new Intl.DateTimeFormat('en-US', { hour: 'numeric' }).format(
    new Date(dateString)
  );

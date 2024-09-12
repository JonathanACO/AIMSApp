export function dateFormat(date: Date) {
  // timestamp -> date
  date = new Date(date)
  const formattedDate = Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
  return formattedDate;
}

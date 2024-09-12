export function getDaysDifference(timestamp: Date): string {
  const targetDate = new Date(timestamp);
  const currentDate = new Date();
  const targetDayOfYear = targetDate.getDate();
  const currentDayOfYear = currentDate.getDate();
  const dayDifference = currentDayOfYear - targetDayOfYear;
  return `${dayDifference} dias`;
}

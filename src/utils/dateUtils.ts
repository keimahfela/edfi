export function getRandomWeeks(): number {
  // Generate a random number between 1 and 104 (2 years worth of weeks)
  return Math.floor(Math.random() * 104) + 1;
}

export function calculateDateFromWeeks(weeks: number): string {
  const date = new Date();
  date.setDate(date.getDate() - (weeks * 7));
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
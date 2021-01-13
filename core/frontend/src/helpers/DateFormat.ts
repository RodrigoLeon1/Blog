export const DateFormat = (dateToFormat: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const date: Date = new Date(dateToFormat)
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

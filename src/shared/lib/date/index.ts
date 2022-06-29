export const format = (date: string): string => {
  return new Intl.DateTimeFormat("ja-JP").format(new Date(date))
}

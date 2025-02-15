export function formatWords(words: string[] | undefined): string[] | undefined {
  if (!words) {
    return words
  }
  return Array.from(
    new Set(
      words
        .filter((v) => v)
        .map((line) => line.toLocaleLowerCase())
        .sort(),
    ),
  )
}

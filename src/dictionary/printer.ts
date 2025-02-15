import type {Printer} from 'prettier'

export const dictionaryPrinter: Printer<string[]> = {
  print(path) {
    return (
      path.node
        .map((line) => line.toLowerCase())
        .sort()
        .join('\n') + '\n'
    )
  },
}

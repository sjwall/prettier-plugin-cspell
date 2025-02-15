import type {Printer} from 'prettier'

export const dictionaryPrinter: Printer<string[]> = {
  print(path) {
    return path.node.join('\n') + '\n'
  },
}

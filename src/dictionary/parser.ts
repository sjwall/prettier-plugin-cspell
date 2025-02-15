import type {Parser} from 'prettier'

export const AstFormatDictionary = 'cspell-dictionary-ast'

export const dictionaryParser: Parser<string[]> = {
  async parse(text) {
    const sortedLines = text.split('\n').filter((v) => v)
    return sortedLines
  },
  astFormat: AstFormatDictionary,
  locStart() {
    return 0
  },
  locEnd(node) {
    return node.length
  },
}

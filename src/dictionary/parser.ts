import type {Parser} from 'prettier'
import {formatWords} from '../utils/formatWords'

export const AstFormatDictionary = 'cspell-dictionary-ast'

export const dictionaryParser: Parser<string[]> = {
  async parse(text) {
    const sortedLines = formatWords(text.split('\n'))!
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

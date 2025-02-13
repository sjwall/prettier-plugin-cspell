import {Parser, Printer, SupportLanguage} from 'prettier'
import {searchForConfig} from 'cspell-lib'
import {relative} from 'node:path'

const cspellSettings = await searchForConfig(process.cwd())
const dictionaryDefinitions =
  cspellSettings!.dictionaryDefinitions
    ?.map((v) => v.file ?? v.path)
    .filter(Boolean)
    .map((v) => relative(process.cwd(), v!)) ?? []

const txtParser: Parser<string[]> = {
  async parse(text) {
    const sortedLines = text.split('\n').filter((v) => v)

    return sortedLines
  },
  astFormat: 'cspell-dictionary-ast',
  locStart() {
    return 0
  },
  locEnd(node) {
    return node.length
  },
}

const txtPrinter: Printer<string[]> = {
  print(path) {
    return (
      path.node
        .map((line) => line.toLowerCase())
        .sort()
        .join('\n') + '\n'
    )
  },
}

export const languages: Partial<SupportLanguage>[] = [
  {
    name: 'cspell-dictionary',
    parsers: ['cspell-dictionary-parse'],
    filenames: dictionaryDefinitions,
  },
]

export const parsers = {
  'cspell-dictionary-parse': txtParser,
}

export const printers = {
  'cspell-dictionary-ast': txtPrinter,
}

import {searchForConfig} from 'cspell-lib'
import {relative} from 'node:path'
import type {SupportLanguage} from 'prettier'

const cspellSettings = await searchForConfig(process.cwd())
const dictionaryDefinitions =
  cspellSettings!.dictionaryDefinitions
    ?.map((v) => v.file ?? v.path)
    .filter(Boolean)
    .map((v) => relative(process.cwd(), v!)) ?? []

export const DictionaryParserName = 'cspell-dictionary-parse'

export const dictionaryLanguage: SupportLanguage = {
  name: 'cspell-dictionary',
  parsers: [DictionaryParserName],
  filenames: dictionaryDefinitions,
}

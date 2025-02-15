import type {SupportLanguage} from 'prettier'
import {dictionaryLanguage, DictionaryParserName} from './dictionary/language'
import {AstFormatDictionary, dictionaryParser} from './dictionary/parser'
import {dictionaryPrinter} from './dictionary/printer'
import {configJsonParser} from './config-json/parser'
import {configJsonLanguage} from './config-json/language'

export const languages: Partial<SupportLanguage>[] = [
  dictionaryLanguage,
  configJsonLanguage,
]

export const parsers = {
  [DictionaryParserName]: dictionaryParser,
  'json-stringify': configJsonParser,
}

export const printers = {
  [AstFormatDictionary]: dictionaryPrinter,
}

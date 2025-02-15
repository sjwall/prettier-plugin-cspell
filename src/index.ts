import type {SupportLanguage} from 'prettier'
import {dictionaryLanguage, DictionaryParserName} from './dictionary/language'
import {AstFormatDictionary, dictionaryParser} from './dictionary/parser'
import {dictionaryPrinter} from './dictionary/printer'

export const languages: Partial<SupportLanguage>[] = [dictionaryLanguage]

export const parsers = {
  [DictionaryParserName]: dictionaryParser,
}

export const printers = {
  [AstFormatDictionary]: dictionaryPrinter,
}

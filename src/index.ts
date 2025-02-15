import type {SupportLanguage} from 'prettier'
import {dictionaryLanguage, DictionaryParserName} from './dictionary/language'
import {AstFormatDictionary, dictionaryParser} from './dictionary/parser'
import {dictionaryPrinter} from './dictionary/printer'
import {configJsonParser} from './config-json/parser'
import {configJsonLanguage} from './config-json/language'
import {configYamlLanguage} from './config-yaml/language'
import {configYamlParser} from './config-yaml/parser'

export const languages: Partial<SupportLanguage>[] = [
  dictionaryLanguage,
  configJsonLanguage,
  configYamlLanguage,
]

export const parsers = {
  [DictionaryParserName]: dictionaryParser,
  'json-stringify': configJsonParser,
  yaml: configYamlParser,
}

export const printers = {
  [AstFormatDictionary]: dictionaryPrinter,
}

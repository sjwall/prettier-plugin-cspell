import {SupportLanguage} from 'prettier'

export const configJsonLanguage: SupportLanguage = {
  name: 'cspell-config-json',
  parsers: ['json-stringify'],
  filenames: ['package.json', 'cspell.json'],
}

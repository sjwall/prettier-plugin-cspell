import {Parser} from 'prettier'
// @ts-expect-error
import babel from 'prettier/parser-babel'
import {formatConfig} from '../utils/formatConfig'
import {CSpellSettings} from 'cspell-lib'

const parser = babel.parsers['json-stringify']

export const configJsonParser: Parser<string> = {
  ...parser,
  preprocess(text, options) {
    if (parser.preprocess) {
      text = parser.preprocess(text, options)
    }
    if (options.filepath.endsWith('package.json')) {
      const value: {cspell?: CSpellSettings} = JSON.parse(text)
      if (value.cspell) {
        value.cspell = formatConfig(value.cspell)
      }
      return JSON.stringify(value)
    } else if (options.filepath.endsWith('cspell.json')) {
      let value: CSpellSettings = JSON.parse(text)
      value = formatConfig(value)
      return JSON.stringify(value)
    }
    return text
  },
}

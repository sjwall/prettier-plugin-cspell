import {Parser} from 'prettier'
// @ts-expect-error
import yamlParser from 'prettier/parser-yaml'
import {formatConfig} from '../utils/formatConfig'
import {CSpellSettings} from 'cspell-lib'
import {load, dump} from 'js-yaml'

const parser = yamlParser.parsers['yaml']

export const configYamlParser: Parser<string> = {
  ...parser,
  preprocess(text, options) {
    if (parser.preprocess) {
      text = parser.preprocess(text, options)
    }
    if (options.filepath.endsWith('cspell.config.yaml')) {
      let value = load(text) as CSpellSettings
      value = formatConfig(value)
      return dump(value, {
        lineWidth: options.printWidth,
        quotingType: options.singleQuote ? "'" : '"',
      })
    }
    return text
  },
}

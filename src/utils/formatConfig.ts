import {CSpellSettings} from 'cspell-lib'
import {formatWords} from './formatWords'

export function formatConfig(config: CSpellSettings, sortKeys = true) {
  if (config.readonly) {
    return config
  }
  config.dictionaries?.sort()
  config.dictionaryDefinitions?.sort((a, b) => a.name.localeCompare(b.name))
  config.enableFiletypes?.sort()
  config.enabledLanguageIds?.sort()
  config.flagWords = formatWords(config.flagWords)
  config.ignorePaths?.sort()
  config.ignoreRegExpList?.sort()
  config.ignoreWords = formatWords(config.ignoreWords)
  config.noSuggestDictionaries?.sort()
  config.noSuggestDictionaries?.sort()
  config.pnpFiles?.sort()
  config.suggestWords = formatWords(config.suggestWords)
  config.userWords = formatWords(config.userWords)
  config.words = formatWords(config.words)

  return sortKeys ? Object.keys(config)
    .sort()
    .reduce<CSpellSettings>((result, key) => {
      ;(result as Record<string, any>)[key] = (config as Record<string, any>)[
        key
      ]
      return result
    }, {}) : config
}

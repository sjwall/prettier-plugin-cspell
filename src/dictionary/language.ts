import {searchForConfig} from 'cspell-lib'
import {dirname, relative} from 'node:path'
import {fileURLToPath} from 'node:url'
import type {SupportLanguage} from 'prettier'

const searchPaths = [process.cwd(), dirname(fileURLToPath(import.meta.url))]

let cspellSettings: Awaited<ReturnType<typeof searchForConfig>> | undefined
for (const item of searchPaths) {
  cspellSettings = await searchForConfig(item)
  if (cspellSettings) {
    break
  }
}

const dictionaryDefinitions: string[] =
  cspellSettings?.dictionaryDefinitions
    ?.map((v) => v.file ?? v.path)
    .filter(Boolean)
    .map((v) =>
      cspellSettings.source?.filename
        ? relative(dirname(cspellSettings.source!.filename!), v!)
        : v!,
    ) ?? []

export const DictionaryParserName = 'cspell-dictionary-parse'

export const dictionaryLanguage: SupportLanguage = {
  name: 'cspell-dictionary',
  parsers: [DictionaryParserName],
  filenames: dictionaryDefinitions,
}

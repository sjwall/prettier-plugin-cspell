import type {CSpellSettings} from 'cspell-lib'

const defaultOrder: (keyof CSpellSettings)[] = [
  '$schema',
  'version',
  'id',
  'name',
  'description',
  'enabled',
  'import',
  'language',
  'languageSettings',
  'languageId',
  'enabledLanguageIds',
  'allowCompoundWords',
  'caseSensitive',
  'enableFiletypes',
  'failFast',
  'loadDefaultConfiguration',
  'maxDuplicateProblems',
  'maxNumberOfProblems',
  'minRandomLength',
  'minWordLength',
  'numSuggestions',
  'noConfigSearch',
  'parser',
  'patterns',
  'validateDirectives',
  'pnpFiles',
  'usePnP',
  'files',
  'globRoot',
  'enableGlobDot',
  'ignorePaths',
  'ignoreRandomStrings',
  'ignoreRegExpList',
  'ignoreWords',
  'useGitignore',
  'gitignoreRoot',
  'reporters',
  'features',
  'cache',
  'overrides',
  'dictionaryDefinitions',
  'dictionaries',
  'noSuggestDictionaries',
  'userWords',
  'words',
  'flagWords',
]

export function sortConfigKeys(
  a: keyof CSpellSettings,
  b: keyof CSpellSettings,
): number {
  const indexA = defaultOrder.indexOf(a) + 1
  const indexB = defaultOrder.indexOf(b) + 1

  // Sort alphabetically if both are not found
  if (indexA === indexB) {
    return a.localeCompare(b)
  } else if (indexA === 0) {
    return -1
  } else if (indexB === 0) {
    return 1
  }

  // Sort based on the order array
  return indexA - indexB
}

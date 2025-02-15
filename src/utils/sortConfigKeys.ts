const defaultOrder = [
  '$schema',
  'version',
  'import',
  'language',
  'languageSettings',
  'languageId',
  'loadDefaultConfiguration',
  'noConfigSearch',
  'failFast',
  'files',
  'globRoot',
  'enableGlobDot',
  'ignorePaths',
  'useGitignore',
  'gitignoreRoot',
  'reporters',
  'features',
  'cache',
  'overrides',
  'dictionaryDefinitions',
  'dictionaries',
  'userWords',
]

export function sortConfigKeys(a: string, b: string): number {
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

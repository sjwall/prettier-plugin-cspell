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
].reverse()

export function sortConfigKeys(a: string, b: string): number {
  const indexA = defaultOrder.indexOf(a) + 1
  const indexB = defaultOrder.indexOf(b) + 1

  let result = Math.max(Math.min(indexB - indexA, 1), -1)

  // Sort alphabetically if both are not found
  if (indexA === indexB) {
    console.log(indexA, a)
    return a.localeCompare(b)
    // Sort by order if both are found
  } else if (indexA === 0) {
    return 1
  } else if (indexB === 0) {
    return -1
  }

  console.log({a, indexA, b, indexB, result})

  return result // Sort based on the order array
}

import {SupportLanguage} from 'prettier'

export const configYamlLanguage: SupportLanguage = {
  name: 'cspell-config-yaml',
  parsers: ['yaml'],
  filenames: ['cspell.config.yaml'],
}

import { CONFIG } from './config'

export const VALIDGUESSES = [
  'ㄱㅏㅁㅜㄹ'
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}

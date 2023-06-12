import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ㅂ',
  'ㅈ',
  'ㄷ',
  'ㄱ',
  'ㅅ',
  'ㅛ',
  'ㅕ',
  'ㅑ',
  'ㅐ',
  'ㅔ',
  'ㅁ',
  'ㄴ',
  'ㅇ',
  'ㄹ',
  'ㅎ',
  'ㅗ',
  'ㅓ',
  'ㅏ',
  'ㅣ',
  'ㅋ',
  'ㅌ',
  'ㅊ',
  'ㅍ',
  'ㅠ',
  'ㅜ',
  'ㅡ',
  'ㅃ',
  'ㅉ',
  'ㄸ',
  'ㄲ',
  'ㅆ',
  'ㅛ',
  'ㅕ',
  'ㅑ',
  'ㅒ',
  'ㅖ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}

import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect, useState } from 'react'
import { ORTHOGRAPHY } from '../../constants/orthography'
// import { useTranslation } from 'react-i18next'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[][]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  // const { t } = useTranslation()
  const [isShiftPressed, setIsShiftPressed] = useState(false)
  const charStatuses = getStatuses(guesses)

  const onShift = () => {
    setIsShiftPressed(prev => !prev)
  }

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
      setIsShiftPressed(false)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      }
      // Take away key event listener for now
      // else {
      //   const key = e.key.toUpperCase()
      //   if (key.length === 1 && key >= 'A' && key <= 'Z') {
      //     onChar(key)
      //   }
      // }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  const [keySliceStartIdx, keySliceEndIdx] = isShiftPressed ? [26, ORTHOGRAPHY.length] : [0, 10];

  return (
    <div>
      <div className="flex justify-center mb-1">
        {ORTHOGRAPHY.slice(keySliceStartIdx, keySliceEndIdx).map(
          (char) => {
            console.log(char);
            return (
            <Key
              key={char}
              value={char}
              onClick={onClick}
              status={charStatuses[char]}
            />
          )}
        )}
        <Key key="deleteKey" width={65.4} value="DELETE" onClick={onClick}>
          삭제
        </Key>
      </div>

      <div className="flex justify-center mb-1">
        {ORTHOGRAPHY.slice(
          10,
          19
        ).map((char) => (
          <Key
            key={char}
            value={char}
            onClick={onClick}
            status={charStatuses[char]}
          />
        ))}
        <Key key="enterKey" width={65.4} value="ENTER" onClick={onClick}>
          엔터
        </Key>
      </div>

      <div className="flex justify-center">
        <Key key="enterKey" width={65.4} value="ENTER" onClick={onShift}>
          쉬프트
        </Key>
        {ORTHOGRAPHY.slice(
          19,
          26
        ).map((char) => (
          <Key
            key={char}
            value={char}
            onClick={onClick}
            status={charStatuses[char]}
          />
        ))}
        <Key key="enterKey" width={65.4} value="ENTER" onClick={onShift}>
          쉬프트
        </Key>
      </div>
    </div>
  )
}

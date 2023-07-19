import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, LabelContainer, SumBuntton } from './styled'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  const handleDecreaseCounter = () => {
    const value = counter - 1
    if (value >= 0) setCounter(value)
  }

  return (
    <CounterContainer>
      <SumBuntton onClick={handleDecreaseCounter}>
        <Minus className="sumSymbols" size={14} />
      </SumBuntton>
      <LabelContainer>{counter}</LabelContainer>

      <SumBuntton onClick={() => setCounter(counter + 1)}>
        <Plus className="sumSymbols" size={14} />
      </SumBuntton>
    </CounterContainer>
  )
}

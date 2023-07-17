import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styled'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus className="sumSymbols" size={14} />
      </button>
      <span className="number">1</span>
      <button>
        <Plus className="sumSymbols" size={14} />
      </button>
    </CounterContainer>
  )
}

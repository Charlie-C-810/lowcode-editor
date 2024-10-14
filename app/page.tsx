'use client'
import LowcodeEditor from '@/components/LowcodeEditor/LowcodeEditor'
import { CounterStoreProvider, useCounterStore } from '@/stores/counter-store-provider'

export default function Home() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
      </div>
  )
  // return <LowcodeEditor />
}

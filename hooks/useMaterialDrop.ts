import { add } from '@/app/actions'
import componentConfig from '@/componentConfig'
import { useDrop } from 'react-dnd'

export function useMaterailDrop(accept: string[], id: number) {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept,
    drop: (item: { type: string }, monitor) => {
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }

      const props = componentConfig[item.type].defaultProps

      add(
        {
          id: new Date().getTime(),
          name: item.type,
          props,
        },
        id
      )
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }))

  return { canDrop, drop }
}

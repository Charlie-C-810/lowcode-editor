import { useMaterailDrop } from '@/hooks/useMaterialDrop'
import { CommonComponentProps } from '../../interface'

const Container = ({ id, children }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterailDrop(['Button', 'Container'], id)

  return (
    <div
      ref={drop}
      className={`min-h-[100px] p-[20px] ${
        canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'
      }`}
      data-component-id={id}
    >
      {children}
    </div>
  )
}

export default Container

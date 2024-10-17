import { useMaterailDrop } from '@/hooks/useMaterialDrop'
import { CommonComponentProps } from '../../interface'

function Page({ id, name, children }: CommonComponentProps) {
  const { canDrop, drop } = useMaterailDrop(['Button', 'Container'], id)

  return (
    <div
      ref={drop}
      className="p-[20px] h-[100%] box-border"
      style={{ border: canDrop ? '2px solid blue' : 'none' }}
      data-component-id={id}
    >
      {children}
    </div>
  )
}

export default Page

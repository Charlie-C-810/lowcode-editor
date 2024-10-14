import { useEffect } from 'react'
import { useComponetsStore } from '@/stores/components'
import { revalidatePath } from 'next/cache'

export function EditArea() {
  const { components, addComponent, deleteComponent } = useComponetsStore()

  useEffect(() => {
    addComponent(
      {
        id: 222,
        name: 'Container',
        props: {},
        children: [],
      },
      1
    )
    addComponent(
      {
        id: 333,
        name: 'Video',
        props: {},
        children: [],
      },
      222
    )
    revalidatePath('/')
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(components, null, 2)}</pre>
    </div>
  )
}

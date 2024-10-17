import componentConfig from '@/componentConfig'
import { useMemo } from 'react'
import { MaterialItem } from '../MaterialItem'

export function Material() {
  const components = useMemo(() => {
    return Object.values(componentConfig)
  }, [componentConfig])

  return (
    <div>
      {components.map((item, index) => {
        return <MaterialItem name={item.name} key={item.name + index} />
      })}
    </div>
  )
}

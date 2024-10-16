import React, { useEffect, useState } from 'react'
import { add, AllComponent } from '@/app/actions'
import { Component } from '@/lib/prisma'
import componentConfig from '@/componentConfig'

export function EditArea() {
  const [components, setcomponents] = useState([])
  useEffect(() => {
    const fn = async () => {
      // await add()
      const res = await AllComponent()
      setcomponents(res)
    }
    fn()
  }, [])
  function renderComponents(components: Component[]): React.ReactNode {
    const result = components.map((component: Component) => {
      const config = componentConfig?.[component.name]

      if (!config?.component) {
        return null
      }

      return React.createElement(
        config.component,
        {
          key: component.id,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || [])
      )
    })
    // console.log('result', result);
    return result
  }

  return (
    <div className='h-full'>
      <pre>{JSON.stringify( components, null, 2)}</pre>
      {renderComponents(components)}
    </div>
  )
}

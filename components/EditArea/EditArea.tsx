import React, { MouseEventHandler, useEffect, useState } from 'react'
import { add, AllComponent } from '@/app/actions'
import { Component } from '@/lib/prisma'
import componentConfig from '@/componentConfig'

export function EditArea({ components }: any) {
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
          id: component.id,
          name: component.name,
          ...config.defaultProps,
          ...component?.props,
        },
        renderComponents(component.children || [])
      )
    })
    // console.log('result', result);
    return result
  }

  const [hoverComponentId, setHoverComponentId] = useState<number>()

  const handleMouseOver: MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath()

    for (let i = 0; i < path.length; i += 1) {
      const ele = path[i] as HTMLElement

      const componentId = ele.dataset?.componentId
      if (componentId) {
        setHoverComponentId(+componentId)
        return
      }
    }
  }

  return (
    <div className="h-full" onMouseOver={handleMouseOver}>
      {hoverComponentId}
      {renderComponents(components)}
    </div>
  )
}

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export interface Component {
  id: number
  name: string
  props: Record<string, any>
  desc: string
}

export async function getAllComponent() {
  const components = await prisma.component.findMany()
  return components
}

export function getComponentById(
  id: number | null,
  components: any
): Component | null {
  if (!id) return null

  for (const component of components) {
    if (component.id == id) return component
    if (component.children)
      if (component.children && component.children.length > 0) {
        const result = getComponentById(id, component.children)
        if (result !== null) return result
      }
  }
  return null
}

export async function addComponent(component: Component, parentId: number) {
  console.log('addComponent');
  const res = await prisma.component.create({
    data: {
      ...component,
      props: JSON.stringify(component?.props),
      parentId,
    },
  })
  return res
}

export default prisma

'use server'

import { addComponent, getAllComponent } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function add(paprams: any, id: number) {
  const res = await addComponent(paprams, id)
  revalidatePath('/')
  return res
}

export async function AllComponent() {
  const res = await getAllComponent()
  return buildTree(res)
}

function buildTree(components) {
  const map = {}
  const tree = []

  components.forEach((component) => {
    map[component.id] = { ...component, children: [] }
  })

  components.forEach((component) => {
    if (!component.parentId) {
      // 假设1是顶级父节点的标识
      tree.push(map[component.id])
    } else {
      // if (!map[component.parentId].children) {
      //   map[component.parentId].children = []
      // }
      map[component.parentId].children.push(map[component.id])
    }
  })

  return tree
}

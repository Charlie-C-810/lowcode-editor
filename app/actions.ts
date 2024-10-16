'use server'

import { addComponent, getAllComponent } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function add() {
  const res = await addComponent(
    {
      id: 222,
      name: 'Container',
      props: {},
      desc: '',
    },
    1
  )
  await addComponent(
    {
      id: 333,
      name: 'Video',
      props: {},
      desc: '',
    },
    222
  )
  revalidatePath('/')
  return res
}

export async function AllComponent() {
  const res = await getAllComponent()
  
  return buildTree(res)
}

const components = [
  { id: 222, name: "Container", desc: "", props: "{}", parentId: 1 },
  { id: 333, name: "Video", desc: "", props: "{}", parentId: 222 }
];

function buildTree(components) {
  const map = {};
  const tree = [];

  components.forEach(component => {
      map[component.id] = {...component, children: []};
  });

  components.forEach(component => {
      if (!component.parentId) { // 假设1是顶级父节点的标识
          tree.push(map[component.id]);
      } else {
          if (!map[component.parentId].children) {
              map[component.parentId].children = [];
          }
          map[component.parentId].children.push(map[component.id]);
      }
  });

  return tree;
}


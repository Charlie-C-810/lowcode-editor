import { PrismaClient } from '@prisma/client'

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function getAllNotes() {
  // 查找登录用户的笔记
  const notes = await prisma.note.findMany({
    where: {
      authorId: session?.user?.userId
    }
  })
  // 构造返回数据
  const res = {};
  notes.forEach(({title, content, id, updatedAt}) => {
    res[id] = JSON.stringify({
      title,
      content,
      updateTime: updatedAt
    })
  })
  return res
}


export default prisma

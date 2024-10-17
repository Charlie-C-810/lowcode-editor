'use client'

import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import { Header } from '@/components/Header/Header'
import { EditArea } from '@/components/EditArea/EditArea'
import { Setting } from '@/components/Setting/Setting'
import { Material } from '@/components/Material/Material'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function ReactPlayground({ components }: any) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-[100vh] flex flex-col">
        <div className="h-[60px] flex items-center border-b-[1px] border-[#000]">
          <Header />
        </div>
        <Allotment>
          <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
            <Material />
          </Allotment.Pane>
          <Allotment.Pane>
            <EditArea components={components} />
          </Allotment.Pane>
          <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
            <Setting components={components} />
          </Allotment.Pane>
        </Allotment>
      </div>
    </DndProvider>
  )
}

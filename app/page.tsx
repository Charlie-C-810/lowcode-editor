// 'use client'
import LowcodeEditor from '@/components/LowcodeEditor/LowcodeEditor'
import { AllComponent } from './actions'

export default async function Home() {
  const components = await AllComponent()

  return <LowcodeEditor components={components} />
}

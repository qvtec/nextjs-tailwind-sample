import { ReactNode } from 'react'
import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
    <Header />
    <Sidebar />
    <main className="mt-14 sm:ml-52">
      {children}
    </main>
    </>
  )
}

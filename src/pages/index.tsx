import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50">
          <Link href='/tailwind'>tailwind</Link>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50">
          <Link href='/flowbite'>Flowbite</Link>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
        <p className="text-2xl text-gray-400">+</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-50 h-28">
            <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28">
            <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28">
            <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28">
            <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
    </div>
  )
}

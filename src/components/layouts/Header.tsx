import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href='/' className="flex ml-2 h-8 md:mr-24">
              <Image
                src="/logo.png"
                alt="Logo"
                className="h-8 mr-3 w-full h-auto"
                width="0"
                height="0"
                sizes="100vw"
                priority
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Flowbite</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

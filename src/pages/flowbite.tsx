import Accordion from "@/components/pages/Flowbite/Accordion"
import Alerts from "@/components/pages/Flowbite/Alerts"
import Carousel from "@/components/pages/Flowbite/Carousel"

export default function Flowbite() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Flowbite</h1>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="block rounded border border-gray-300 p-6">
          <Accordion />
        </div>
        <div className="block rounded border border-gray-300 p-6">
          <Alerts />
        </div>
        <div className="block rounded border border-gray-300 p-6">
          <Carousel />
        </div>
        <div className="flex h-28 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div className="flex h-24 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex h-24 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex h-24 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
      <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-50">
        <p className="text-2xl text-gray-400">+</p>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div className="flex h-28 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex h-28 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex h-28 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex h-28 items-center justify-center rounded bg-gray-50">
          <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
    </div>
  )
}

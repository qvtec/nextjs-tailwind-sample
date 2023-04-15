import Accordion from "@/components/pages/Flowbite/Accordion"
import Alerts from "@/components/pages/Flowbite/Alerts"

export default function Flowbite() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">+</p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">+</p>
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
      <div className="grid grid-cols-3 gap-2">
        <div className="block p-6 border border-gray-300 rounded-lg">
          <Accordion />
        </div>
        <div className="block p-6 border border-gray-300 rounded-lg">
          <Alerts />
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

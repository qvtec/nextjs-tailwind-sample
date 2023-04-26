import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div className="flex h-24 items-center justify-center rounded bg-gray-50">
          <Link href="/tailwind">tailwind</Link>
        </div>
        <div className="flex h-24 items-center justify-center rounded bg-gray-50">
          <Link href="/flowbite">Flowbite</Link>
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
  );
}

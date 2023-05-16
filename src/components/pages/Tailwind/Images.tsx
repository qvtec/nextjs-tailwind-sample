import Image from "next/image"
import mountains from "../../../../public/images/mountains.jpg"

export default function Images() {
  return (
    <>
      <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Secondary text</h5>
      <div className="mb-4 rounded-lg border border-gray-300 p-6 text-center">
        <h1 className="text-5xl font-extrabold">
          Flowbite<small className="ml-2 font-semibold text-gray-500">This is secondary text</small>
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-gray-300 p-6">
          responsive
          <Image alt="" src={mountains} width={700} height={475} sizes="100vw" style={{ width: "100%", height: "auto" }} />
          objectFit: contain
          <div style={{ position: "relative", width: "300px", height: "400px" }}>
            <Image alt="" src={mountains} fill sizes="100vw" style={{ objectFit: "contain" }} />
          </div>
          objectFit: scale-down
          <div style={{ position: "relative", width: "300px", height: "400px" }}>
            <Image alt="" src={mountains} quality={100} fill sizes="100vw" style={{ objectFit: "scale-down" }} />
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          objectFit: cover
          <div style={{ position: "relative", width: "300px", height: "400px" }} className="border border-gray-600 p-3">
            <Image alt="" src={mountains} fill sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
          height: 150px
          <div style={{ position: "relative", width: "100%", height: "150px" }}>
            <Image alt="" src={mountains} fill sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          objectFit: none
          <div style={{ position: "relative", width: "300px", height: "400px" }}>
            <Image alt="" src={mountains} quality={100} fill sizes="100vw" style={{ objectFit: "none" }} />
          </div>
          height: 150px
          <div style={{ position: "relative", width: "300px", height: "150px" }}>
            <Image alt="" src={mountains} quality={100} fill sizes="100vw" style={{ objectFit: "none" }} />
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Sample</h5>
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="bg-gray-200 text-xs text-gray-700">
                <tr>
                  <th scope="col" className="p-3">
                    Class
                  </th>
                  <th scope="col" className="p-3">
                    Properties
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">aspect-auto</td>
                  <td className="p-3">aspect-ratio: auto;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex h-28 items-center justify-center rounded bg-gray-100">
          <p className="text-2xl text-gray-400">+</p>
        </div>
      </div>
    </>
  )
}

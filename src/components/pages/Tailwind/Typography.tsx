
export default function Typography() {
  return (
    <>
    <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Default heading</h5>
    <div className="mb-3 p-6 border border-gray-300 rounded-lg text-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
        Learn more
        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>

    <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Secondary text</h5>
    <div className="mb-4 p-6 border border-gray-300 rounded-lg text-center">
      <h1 className="text-5xl font-extrabold">Flowbite<small className="ml-2 font-semibold text-gray-500">This is secondary text</small></h1>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="text-lg font-bold tracking-tight text-gray-900">Heading</h5>
        <p className="mb-3 text-sm">text-[size], font-[size]</p>
        <h1 className="text-5xl font-extrabold">Heading 1</h1>
        <h2 className="text-4xl font-bold">Heading 2</h2>
        <h3 className="text-3xl font-bold">Heading 3</h3>
        <h4 className="text-2xl font-bold">Heading 4</h4>
        <h5 className="text-xl font-bold">Heading 5</h5>
        <h6 className="text-lg font-bold">Heading 6</h6>
      </div>

      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="text-lg font-bold tracking-tight text-gray-900">Font size</h5>
        <p className="mb-3 text-sm">text-[size]</p>
        <p className="text-xs text-gray-900">Aa(xs)</p>
        <p className="text-sm text-gray-900">Aa(sm)</p>
        <p className="text-base text-gray-900">Aa(base)</p>
        <p className="text-lg text-gray-900">Aa(lg)</p>
        <p className="text-xl text-gray-900">Aa(xl)</p>
        <p className="text-2xl text-gray-900">Aa(2xl)</p>
        <p className="text-3xl text-gray-900">Aa(3xl)</p>
        <p className="text-4xl text-gray-900">Aa(4xl)</p>
        <p className="text-5xl text-gray-900">Aa(5xl)</p>
        <p className="text-6xl text-gray-900">Aa(6xl)</p>
      </div>

      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="text-lg font-bold tracking-tight text-gray-900">Font weight</h5>
        <p className="mb-3 text-sm">font-[size]</p>
        <p className="text-4xl font-thin text-gray-900">Aa(thin)</p>
        <p className="text-4xl text-gray-900 font-extralight">Aa(extralight)</p>
        <p className="text-4xl text-gray-900">Aa</p>
        <p className="text-4xl font-normal text-gray-900">Aa(normal)</p>
        <p className="text-4xl font-medium text-gray-900">Aa(medium)</p>
        <p className="text-4xl font-semibold text-gray-900">Aa(semibold)</p>
        <p className="text-4xl font-bold text-gray-900">Aa(bold)</p>
        <p className="text-4xl font-extrabold text-gray-900">Aa(extrabold)</p>
        <p className="text-4xl font-black text-gray-900">Aa(black)</p>
      </div>

      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Sample</h5>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-200">
              <tr>
                <th scope="col" className="p-3">Class</th>
                <th scope="col" className="p-3">Properties</th>
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
      <div className="flex items-center justify-center rounded bg-gray-100 h-28">
        <p className="text-2xl text-gray-400">+</p>
      </div>
    </div>
    </>
  )
}

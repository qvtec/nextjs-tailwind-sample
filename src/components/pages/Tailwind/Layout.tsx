
export default function Layout() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Aspect Ratio</h5>
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
              <tr className="border-b">
                <td className="p-3 text-blue-700">aspect-square</td>
                <td className="p-3">aspect-ratio: 1 / 1;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">aspect-video</td>
                <td className="p-3">aspect-ratio: 16 / 9;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Container</h5>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-200">
              <tr>
                <th scope="col" className="p-3">Class</th>
                <th scope="col" className="p-3">Breakpoint</th>
                <th scope="col" className="p-3">Properties</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 text-blue-700">container</td>
                <td className="p-3">None</td>
                <td className="p-3">width: 100%;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">&nbsp;</td>
                <td className="p-3">sm</td>
                <td className="p-3">max-width: 640px;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Columns</h5>
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
                <td className="p-3 text-blue-700">columns-1</td>
                <td className="p-3">columns: 1;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Break</h5>
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
                <td className="p-3 text-blue-700">break-after-auto</td>
                <td className="p-3">break-after: auto;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">break-before-all</td>
                <td className="p-3">break-before: all;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">break-inside-avoid-page</td>
                <td className="p-3">break-inside: avoid-page;</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-3 columns-2">
            <p>1</p>
            <p className="break-before-column">2:break-before</p>
            <p>3</p>
            <p>4</p>
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Display</h5>
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
                <td className="p-3 text-blue-700">block</td>
                <td className="p-3">display: block;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">inline-block</td>
                <td className="p-3">display: inline-block;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">inline</td>
                <td className="p-3">display: inline;</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-3 text-sm">
            When controlling the flow of text, using the CSS property
            <span className="inline bg-blue-100 px-1">display: inline</span>
            will cause the text inside the element to wrap normally.
            While using the property <span className="inline-block bg-blue-100 px-1">display: inline-block</span>
            will wrap the element to prevent the text inside from extending beyond its parent.
            Lastly, using the property <span className="block bg-blue-100 px-1">display: block</span>
            will put the element on its own line and fill its parent.
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Floats</h5>
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
                <td className="p-3 text-blue-700">float-right</td>
                <td className="p-3">float: right;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">float-left</td>
                <td className="p-3">float: left;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">float-none</td>
                <td className="p-3">float: none;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Clear</h5>
        <p>clear-left, right, both, none</p>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Overflow</h5>
        <p>overflow-auto, hidden, clip, visible, scroll</p>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Position</h5>
        <p>static, fixed, absolute, relative, sticky</p>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Top / Right / Bottom / Left</h5>
        <code>[top|right|bottom|left|inset]-[size]</code>
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute left-0 top-0 h-8 w-8 bg-orange-300">01</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute inset-x-0 top-0 h-8 bg-orange-300">02</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute top-0 right-0 h-8 w-8 bg-orange-300">03</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute inset-y-0 left-0 w-8 bg-orange-300">04</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute inset-0 bg-orange-300">05</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute inset-y-0 right-0 w-8 bg-orange-300">06</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute bottom-0 left-0 h-8 w-8 bg-orange-300">07</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute inset-x-0 bottom-0 h-8 bg-orange-300">08</div>
          </div>
          <div className="relative h-16 w-16 bg-gray-200">
            <div className="absolute bottom-0 right-0 h-8 w-8 bg-orange-300">09</div>
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Z-Index</h5>
        <p>z-[index]</p>
        <div className="flex justify-center -space-x-3 font-mono text-sm font-bold leading-6">
          <div className="z-40 w-16 h-16 rounded-full flex items-center justify-center bg-orange-300 shadow-lg ring-2 ring-white">05</div>
          <div className="z-30 w-16 h-16 rounded-full flex items-center justify-center bg-orange-300 shadow-lg ring-2 ring-white">04</div>
          <div className="z-20 w-16 h-16 rounded-full flex items-center justify-center bg-orange-300 shadow-lg ring-2 ring-white">03</div>
          <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center bg-orange-300 shadow-lg ring-2 ring-white">02</div>
          <div className="z-0 w-16 h-16 rounded-full flex items-center justify-center bg-orange-300 shadow-lg ring-2 ring-white">01</div>
        </div>
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
  )
}

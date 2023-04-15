
export default function SpaceSize() {
  return (
    <>
    <h3 className="mb-3 font-bold">Spacing</h3>

    <div className="grid grid-cols-3 gap-2">
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Padding</h5>
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
                <td className="p-3 text-blue-700">p-0</td>
                <td className="p-3">padding: 0px;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Margin</h5>
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
                <td className="p-3 text-blue-700">m-0</td>
                <td className="p-3">margin: 0px;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Space Between</h5>
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
                <td className="p-3 text-blue-700">space-x-0</td>
                <td className="p-3">margin-left: 0px;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <h3 className="mt-10 mb-3 font-bold">Sizing</h3>

    <div className="grid grid-cols-3 gap-2">
      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Width</h5>
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
                <td className="p-3 text-blue-700">w-0</td>
                <td className="p-3">width: 0px;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">min-w-0</td>
                <td className="p-3">min-width: 0px;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">max-w-0</td>
                <td className="p-3">max-width: 0px;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 border border-gray-300 rounded-lg">
        <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900">Height</h5>
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
                <td className="p-3 text-blue-700">h-0</td>
                <td className="p-3">height: 0px;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">min-h-0</td>
                <td className="p-3">min-height: 0px;</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-blue-700">max-h-0</td>
                <td className="p-3">max-height: 0px;</td>
              </tr>
            </tbody>
          </table>
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
    </>
  )
}

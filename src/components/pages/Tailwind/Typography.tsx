
export default function Typography() {
  return (
    <div className="grid grid-cols-3 gap-2">
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

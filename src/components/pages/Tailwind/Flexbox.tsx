export default function Flexbox() {
  return (
    <>
      <h3 className="mb-3 font-bold">よく使う</h3>

      <div className="mb-5 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-red-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Flex Direction</h5>
          <p className="mb-3 text-sm">フレックスアイテムの方向を制御する</p>
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
                  <td className="p-3 text-blue-700">flex-row</td>
                  <td className="p-3">flex-direction: row;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-row-reverse</td>
                  <td className="p-3">flex-direction: row-reverse;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-col</td>
                  <td className="p-3">flex-direction: column;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-col-reverse</td>
                  <td className="p-3">flex-direction: column-reverse;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-row</p>
            <div className="flex flex-row space-x-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">03</div>
            </div>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-row-reverse</p>
            <div className="flex flex-row-reverse space-x-4 space-x-reverse bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">03</div>
            </div>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-col</p>
            <div className="mx-auto flex flex-col space-y-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">03</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-red-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Justify Content</h5>
          <p className="mb-3 text-sm">flexアイテムが並ぶ向き(縦・横)に沿って左寄せ・中央寄せ・右寄せなどの配置を指定する</p>
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
                  <td className="p-3 text-blue-700">justify-normal</td>
                  <td className="p-3">justify-content: normal;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-start</td>
                  <td className="p-3">justify-content: flex-start;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-end</td>
                  <td className="p-3">justify-content: flex-end;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-center</td>
                  <td className="p-3">justify-content: center;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-between</td>
                  <td className="p-3">justify-content: space-between;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-around</td>
                  <td className="p-3">justify-content: space-around;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-evenly</td>
                  <td className="p-3">justify-content: space-evenly;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-stretch</td>
                  <td className="p-3">justify-content: stretch;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">justify-normal</p>
            <div className="flex justify-normal space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
            <p className="font-bold">justify-start</p>
            <div className="flex justify-start space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
            <p className="font-bold">justify-end</p>
            <div className="flex justify-end space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
            <p className="font-bold">justify-center</p>
            <div className="flex justify-center space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
            <p className="font-bold">justify-between</p>
            <div className="flex justify-between space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
            <p className="font-bold">justify-around</p>
            <div className="flex justify-around space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
            <p className="font-bold">justify-evenly</p>
            <div className="flex justify-evenly space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
            <p className="font-bold">justify-stretch</p>
            <div className="grid grid-flow-col justify-stretch gap-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-300">02</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-300">03</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-red-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Align Items</h5>
          <p className="mb-3 text-sm">コンテナーの交差軸に沿ってフレックス アイテムとグリッド アイテムを配置する方法を制御する</p>
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
                  <td className="p-3 text-blue-700">items-start</td>
                  <td className="p-3">align-items: flex-start;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-end</td>
                  <td className="p-3">align-items: flex-end;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-center</td>
                  <td className="p-3">align-items: center;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-baseline</td>
                  <td className="p-3">align-items: baseline;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-stretch</td>
                  <td className="p-3">align-items: stretch;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-auto p-3">
            <div className="bg-gray-300 p-3 text-sm font-bold leading-6">
              <p className="font-bold">items-stretch</p>
              <div className="flex w-full items-stretch gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-2">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-6">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-4">03</div>
              </div>
              <p className="font-bold">items-start</p>
              <div className="flex w-full items-start gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-2">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-6">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-4">03</div>
              </div>
              <p className="font-bold">items-end</p>
              <div className="flex w-full items-end gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-2">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-6">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-4">03</div>
              </div>
              <p className="font-bold">items-center</p>
              <div className="flex w-full items-center gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-4">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-12">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 py-8">03</div>
              </div>
              <p className="font-bold">items-baseline</p>
              <div className="flex w-full items-baseline gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 pb-6 pt-2">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 pb-12 pt-8">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-300 pb-4 pt-12">03</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-red-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">グリッドテンプレートの列</h5>
          <p className="mb-3 text-sm">グリッド レイアウトで列を指定する</p>
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
                  <td className="p-3 text-blue-700">grid-cols-1</td>
                  <td className="p-3">grid-template-columns: repeat(1, minmax(0, 1fr));</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">グリッド内の列の指定</p>
            <p className="text-sm">grid-cols-[n]</p>
            <div className="grid grid-cols-4 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="rounded-lg bg-fuchsia-300 p-2">01</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">02</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">03</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">04</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">05</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">06</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">07</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">08</div>
              <div className="rounded-lg bg-fuchsia-300 p-2">09</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-red-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Gap</h5>
          <p className="mb-3 text-sm">グリッド アイテムとフレックスボックス アイテムの間のガターを制御する</p>
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
                  <td className="p-3 text-blue-700">gap-0</td>
                  <td className="p-3">gap: 0px;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">gap-x-1</td>
                  <td className="p-3">column-gap: 0.25rem; /* 4px */</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">gap-y-2</td>
                  <td className="p-3">row-gap: 0.5rem; /* 8px */</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">要素間のギャップの設定</p>
            <p className="text-sm">gap-[size]</p>
            <p className="text-sm">グリッドおよびフレックスボックス レイアウトの行と列の間のギャップを変更する</p>
            <div className="grid grid-cols-2 gap-8 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="rounded-lg bg-violet-300 p-3">01</div>
              <div className="rounded-lg bg-violet-300 p-3">02</div>
              <div className="rounded-lg bg-violet-300 p-3">03</div>
              <div className="rounded-lg bg-violet-300 p-3">04</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-3 font-bold">Flex</h3>

      <div className="mb-5 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Flex Basis</h5>
          <p className="mb-3 text-sm">フレックスアイテムの初期サイズを制御する</p>
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
                  <td className="p-3 text-blue-700">basis-0</td>
                  <td className="p-3">flex-basis: 0px;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">basis-1</td>
                  <td className="p-3">flex-basis: 0.25rem; /* 4px */</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">basis-auto</td>
                  <td className="p-3">flex-basis: auto;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">basis-px</td>
                  <td className="p-3">flex-basis: 1px;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">basis-0.5</td>
                  <td className="p-3">flex-basis: 0.125rem; /* 2px */</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">basis-1/2</td>
                  <td className="p-3">flex-basis: 50%;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">basis-full</td>
                  <td className="p-3">flex-basis: 100%;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-row space-x-4 bg-gray-200 p-3 text-sm font-bold">
            <div className="flex h-8 basis-1/4 items-center justify-center rounded-lg bg-orange-300">01</div>
            <div className="flex h-8 basis-1/4 items-center justify-center rounded-lg bg-orange-300">02</div>
            <div className="flex h-8 basis-1/2 items-center justify-center rounded-lg bg-orange-300">03</div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Flex Direction</h5>
          <p className="mb-3 text-sm">フレックスアイテムの方向を制御する</p>
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
                  <td className="p-3 text-blue-700">flex-row</td>
                  <td className="p-3">flex-direction: row;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-row-reverse</td>
                  <td className="p-3">flex-direction: row-reverse;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-col</td>
                  <td className="p-3">flex-direction: column;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-col-reverse</td>
                  <td className="p-3">flex-direction: column-reverse;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-row</p>
            <div className="flex flex-row space-x-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">03</div>
            </div>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-row-reverse</p>
            <div className="flex flex-row-reverse space-x-4 space-x-reverse bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">03</div>
            </div>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-col</p>
            <div className="mx-auto flex flex-col space-y-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-orange-300">03</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Flex Wrap</h5>
          <p className="mb-3 text-sm">フレックス アイテムのラップ方法を制御する</p>
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
                  <td className="p-3 text-blue-700">flex-wrap</td>
                  <td className="p-3">flex-wrap: wrap;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-wrap-reverse</td>
                  <td className="p-3">flex-wrap: wrap-reverse;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-nowrap</td>
                  <td className="p-3">flex-wrap: nowrap;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-nowrap</p>
            <div className="flex flex-nowrap space-x-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="h-8 w-2/5 flex-none rounded-lg bg-orange-300">
                <div className="flex h-full w-full items-center justify-center">01</div>
              </div>
              <div className="h-8 w-2/5 flex-none rounded-lg bg-orange-300">
                <div className="flex h-full w-full items-center justify-center">02</div>
              </div>
              <div className="h-8 w-2/5 flex-none rounded-lg bg-orange-300">
                <div className="flex h-full w-full items-center justify-center">03</div>
              </div>
            </div>
          </div>
          <div className="mt-2 overflow-auto">
            <p className="font-bold">flex-wrap</p>
            <div className="flex flex-wrap gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-2/5 items-center justify-center rounded-lg bg-orange-300">01</div>
              <div className="flex h-8 w-2/5 items-center justify-center rounded-lg bg-orange-300">02</div>
              <div className="flex h-8 w-2/5 items-center justify-center rounded-lg bg-orange-300">03</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Flex</h5>
          <p className="mb-3 text-sm">フレックス アイテムの拡大と縮小の両方を制御する</p>
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
                  <td className="p-3 text-blue-700">flex-1</td>
                  <td className="p-3">flex: 1 1 0%;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-auto</td>
                  <td className="p-3">flex: 1 1 auto;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-initial</td>
                  <td className="p-3">flex: 0 1 auto;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">flex-none</td>
                  <td className="p-3">flex: none;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">flex-initial</p>
            <p className="text-sm">初期サイズを考慮し、フレックスアイテムを縮小するが拡大しないようにする</p>
            <div className="mt-2 flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 flex-none items-center justify-center rounded-lg bg-blue-300">01</div>
              <div className="flex w-24 flex-initial items-center justify-center rounded-lg bg-blue-500 sm:w-64">02</div>
              <div className="flex w-14 flex-initial items-center justify-center rounded-lg bg-blue-500 sm:w-32">03</div>
            </div>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">flex-1</p>
            <p className="text-sm">初期サイズを無視して、必要に応じてフレックスアイテムを拡大および縮小できるようにする</p>
            <div className="mt-2 flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 flex-none items-center justify-center rounded-lg bg-pink-300">01</div>
              <div className="flex w-64 flex-1 items-center justify-center rounded-lg bg-pink-500 shadow-lg">02</div>
              <div className="flex w-32 flex-1 items-center justify-center rounded-lg bg-pink-500 shadow-lg">03</div>
            </div>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">flex-auto</p>
            <p className="text-sm">初期サイズを考慮して、フレックスアイテムを拡大および縮小できるようにする</p>
            <div className="mt-2 flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 flex-none items-center justify-center rounded-lg bg-violet-300">01</div>
              <div className="flex w-64 flex-auto items-center justify-center rounded-lg bg-violet-500 shadow-lg">02</div>
              <div className="flex w-32 flex-auto items-center justify-center rounded-lg bg-violet-500 shadow-lg">03</div>
            </div>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">flex-none</p>
            <p className="text-sm">フレックスアイテムが拡大または縮小するのを防ぐ</p>
            <div className="flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex-none">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-indigo-300 p-2">01</div>
              </div>
              <div className="flex-none">
                <div className="flex w-72 items-center justify-center rounded-lg bg-indigo-500 p-2 shadow-lg">02</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center rounded-lg bg-indigo-300 p-2">03</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Flex Grow</h5>
          <p className="mb-3 text-sm">フレックス アイテムがどのように成長するかを制御する</p>
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
                  <td className="p-3 text-blue-700">grow</td>
                  <td className="p-3">flex-grow: 1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">grow-0</td>
                  <td className="p-3">flex-grow: 0;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">grow</p>
            <p className="text-sm">可能なスペースを埋めるためにフレックスアイテムを拡張できるようにする</p>
            <div className="flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 flex-none items-center justify-center rounded-lg bg-indigo-300">01</div>
              <div className="flex grow items-center justify-center rounded-lg bg-indigo-500">02</div>
              <div className="flex h-8 w-14 flex-none items-center justify-center rounded-lg bg-indigo-300">03</div>
            </div>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">grow-0</p>
            <p className="text-sm">フレックス アイテムが大きくなるのを防ぐ</p>
            <div className="flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex grow items-center justify-center rounded-lg bg-pink-300">01</div>
              <div className="flex h-8 w-14 shrink-0 grow-0 items-center justify-center rounded-lg bg-pink-500">02</div>
              <div className="hidden grow items-center justify-center rounded-lg bg-pink-300 md:flex">03</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Flex Shrink</h5>
          <p className="mb-3 text-sm">フレックス アイテムの縮小方法を制御する</p>
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
                  <td className="p-3 text-blue-700">shrink</td>
                  <td className="p-3">flex-shrink: 1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">shrink-0</td>
                  <td className="p-3">flex-shrink: 0;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">shrink</p>
            <p className="text-sm">必要に応じてフレックスアイテムを縮小できるようにする</p>
            <div className="flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex h-8 w-14 flex-none items-center justify-center rounded-lg bg-indigo-300">01</div>
              <div className="flex h-8 w-64 shrink items-center justify-center rounded-lg bg-indigo-500">02</div>
              <div className="flex h-8 w-14 flex-none items-center justify-center rounded-lg bg-indigo-300">03</div>
            </div>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">shrink-0</p>
            <p className="text-sm">フレックスアイテムが縮小するのを防ぐ</p>
            <div className="flex gap-4 bg-gray-200 p-3 text-sm font-bold">
              <div className="flex flex-1 items-center justify-center rounded-lg bg-blue-300 p-2">01</div>
              <div className="flex w-16 shrink-0 items-center justify-center rounded-lg bg-blue-500 p-2 sm:w-64">02</div>
              <div className="hidden flex-1 items-center justify-center rounded-lg bg-blue-300 p-2 sm:flex">03</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-3 mt-10 font-bold">Grid</h3>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">グリッドテンプレートの列</h5>
          <p className="mb-3 text-sm">グリッド レイアウトで列を指定する</p>
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
                  <td className="p-3 text-blue-700">grid-cols-1</td>
                  <td className="p-3">grid-template-columns: repeat(1, minmax(0, 1fr));</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">グリッド内の列の指定</p>
            <p className="text-sm">grid-cols-[n]</p>
            <div className="grid grid-cols-4 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="rounded-lg bg-fuchsia-500 p-2">01</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">02</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">03</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">04</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">05</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">06</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">07</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">08</div>
              <div className="rounded-lg bg-fuchsia-500 p-2">09</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">グリッド列の開始/終了</h5>
          <p className="mb-3 text-sm">要素のサイズ変更とグリッド列全体への配置方法を制御する</p>
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
                  <td className="p-3 text-blue-700">col-auto</td>
                  <td className="p-3">grid-column: auto;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">col-span-1</td>
                  <td className="p-3">grid-column: span 1 / span 1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">col-span-full</td>
                  <td className="p-3">grid-column: 1 / -1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">col-start-1</td>
                  <td className="p-3">grid-column-start: 1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">col-end-1</td>
                  <td className="p-3">grid-column-end: 1;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">スパニングカラム</p>
            <p className="text-sm">col-span-[n]</p>
            <p className="text-sm">要素がn列にまたがるようにします</p>
            <div className="grid grid-cols-3 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="rounded-lg bg-indigo-300 p-2">01</div>
              <div className="rounded-lg bg-indigo-300 p-2">02</div>
              <div className="rounded-lg bg-indigo-300 p-2">03</div>
              <div className="col-span-2 rounded-lg bg-indigo-500 p-2">04</div>
              <div className="rounded-lg bg-indigo-300 p-2">05</div>
              <div className="rounded-lg bg-indigo-300 p-2">06</div>
              <div className="col-span-2 rounded-lg bg-indigo-500 p-2">07</div>
            </div>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">開始行と終了行</p>
            <p className="text-sm">col-start-[n], col-end-[n]</p>
            <p className="text-sm">要素をn 番目のグリッド ラインで開始または終了させます</p>
            <div className="grid grid-cols-6 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="rounded-lg bg-gray-400 p-4"></div>
              <div className="col-span-4 col-start-2 rounded-lg bg-sky-500 p-4 shadow-lg">01</div>
              <div className="rounded-lg bg-gray-400 p-4"></div>
              <div className="col-start-1 col-end-3 rounded-lg bg-sky-500 p-4 shadow-lg">02</div>
              <div className="rounded-lg bg-gray-400 p-4"></div>
              <div className="rounded-lg bg-gray-400 p-4"></div>
              <div className="col-span-2 col-end-7 rounded-lg bg-sky-500 p-4 shadow-lg">03</div>
              <div className="col-start-1 col-end-7 rounded-lg bg-sky-500 p-4 shadow-lg">04</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">グリッド テンプレートの行</h5>
          <p className="mb-3 text-sm">グリッド レイアウトで行を指定する</p>
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
                  <td className="p-3 text-blue-700">grid-rows-1</td>
                  <td className="p-3">grid-template-rows: repeat(1, minmax(0, 1fr));</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">grid-rows-2</td>
                  <td className="p-3">grid-template-rows: repeat(2, minmax(0, 1fr));</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">grid-rows-none</td>
                  <td className="p-3">grid-template-rows: none;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">グリッド内の行の指定</p>
            <p className="text-sm">grid-rows-[n]</p>
            <p className="text-sm">行のグリッドを作成します</p>
            <div className="grid grid-flow-col grid-rows-4 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">01</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">02</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">03</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">04</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">05</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">06</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">07</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">08</div>
              <div className="rounded-lg bg-pink-500 p-2 shadow-lg">09</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">グリッド行の開始/終了</h5>
          <p className="mb-3 text-sm">要素のサイズ変更とグリッド行全体への配置方法を制御する</p>
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
                  <td className="p-3 text-blue-700">row-auto</td>
                  <td className="p-3">grid-row: auto;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">row-span-1</td>
                  <td className="p-3">grid-row: span 1 / span 1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">row-span-full</td>
                  <td className="p-3">grid-row: 1 / -1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">row-start-1</td>
                  <td className="p-3">grid-row-start: 1;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">row-end-1</td>
                  <td className="p-3">grid-row-end: 1;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">スパニング行</p>
            <p className="text-sm">row-span-[n]</p>
            <p className="text-sm">行のグリッドを作成します</p>
            <div className="grid grid-flow-col grid-rows-3 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="row-span-3 grid place-content-center rounded-lg bg-fuchsia-500 p-2">01</div>
              <div className="col-span-2 grid place-content-center rounded-lg bg-fuchsia-300 p-2">02</div>
              <div className="col-span-2 row-span-2 grid place-content-center rounded-lg bg-fuchsia-500 p-2">03</div>
            </div>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">開始行と終了行</p>
            <p className="text-sm">row-start-[n], row-end-[n]</p>
            <p className="text-sm">要素をn 番目のグリッド ラインで開始または終了させます</p>
            <div className="grid grid-flow-col grid-rows-3 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="row-span-2 row-start-2 grid place-content-center rounded-lg bg-blue-500 p-4">01</div>
              <div className="row-span-2 row-end-3 grid place-content-center rounded-lg bg-blue-500 p-4">02</div>
              <div className="row-start-1 row-end-4 grid place-content-center rounded-lg bg-blue-500 p-4">03</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">グリッド オート フロー</h5>
          <p className="mb-3 text-sm">グリッド内の要素を自動配置する方法を制御する</p>
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
                  <td className="p-3 text-blue-700">grid-cols-1</td>
                  <td className="p-3">grid-template-columns: repeat(1, minmax(0, 1fr));</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">グリッド要素の配置の制御</p>
            <p className="text-sm">grid-flow-[keyword]</p>
            <p className="text-sm">グリッド レイアウトに対する自動配置アルゴリズムの動作を制御します</p>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="col-span-2 rounded-lg bg-purple-300 p-2">01</div>
              <div className="col-span-2 rounded-lg bg-purple-300 p-2">02</div>
              <div className="rounded-lg bg-purple-500 p-2">03</div>
              <div className="rounded-lg bg-purple-300 p-2">04</div>
              <div className="rounded-lg bg-purple-300 p-2">05</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="mb-3 text-lg font-bold text-gray-900">Grid Auto Columns/Rows</h5>
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
                  <td className="p-3 text-blue-700">auto-cols-auto</td>
                  <td className="p-3">grid-auto-columns: auto;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">auto-cols-min</td>
                  <td className="p-3">grid-auto-columns: min-content;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">auto-cols-max</td>
                  <td className="p-3">grid-auto-columns: max-content;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">auto-cols-fr</td>
                  <td className="p-3">grid-auto-columns: minmax(0, 1fr);</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  <td className="p-3 text-blue-700">auto-rows-auto</td>
                  <td className="p-3">grid-auto-rows: auto;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">auto-rows-min</td>
                  <td className="p-3">grid-auto-rows: min-content;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">auto-rows-max</td>
                  <td className="p-3">grid-auto-rows: max-content;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">auto-rows-fr</td>
                  <td className="p-3">grid-auto-rows: minmax(0, 1fr);</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Gap</h5>
          <p className="mb-3 text-sm">グリッド アイテムとフレックスボックス アイテムの間のガターを制御する</p>
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
                  <td className="p-3 text-blue-700">gap-0</td>
                  <td className="p-3">gap: 0px;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">gap-x-1</td>
                  <td className="p-3">column-gap: 0.25rem; /* 4px */</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">gap-y-2</td>
                  <td className="p-3">row-gap: 0.5rem; /* 8px */</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">要素間のギャップの設定</p>
            <p className="text-sm">gap-[size]</p>
            <p className="text-sm">グリッドおよびフレックスボックス レイアウトの行と列の間のギャップを変更する</p>
            <div className="grid grid-cols-2 gap-8 bg-gray-200 p-3 text-center text-sm font-bold">
              <div className="rounded-lg bg-violet-500 p-3">01</div>
              <div className="rounded-lg bg-violet-500 p-3">02</div>
              <div className="rounded-lg bg-violet-500 p-3">03</div>
              <div className="rounded-lg bg-violet-500 p-3">04</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Justify Content</h5>
          <p className="mb-3 text-sm">flexアイテムが並ぶ向き(縦・横)に沿って左寄せ・中央寄せ・右寄せなどの配置を指定する</p>
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
                  <td className="p-3 text-blue-700">justify-normal</td>
                  <td className="p-3">justify-content: normal;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-start</td>
                  <td className="p-3">justify-content: flex-start;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-end</td>
                  <td className="p-3">justify-content: flex-end;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-center</td>
                  <td className="p-3">justify-content: center;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-between</td>
                  <td className="p-3">justify-content: space-between;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-around</td>
                  <td className="p-3">justify-content: space-around;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-evenly</td>
                  <td className="p-3">justify-content: space-evenly;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-stretch</td>
                  <td className="p-3">justify-content: stretch;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">justify-normal</p>
            <div className="flex justify-normal space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
            <p className="font-bold">justify-start</p>
            <div className="flex justify-start space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
            <p className="font-bold">justify-end</p>
            <div className="flex justify-end space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
            <p className="font-bold">justify-center</p>
            <div className="flex justify-center space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
            <p className="font-bold">justify-between</p>
            <div className="flex justify-between space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
            <p className="font-bold">justify-around</p>
            <div className="flex justify-around space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
            <p className="font-bold">justify-evenly</p>
            <div className="flex justify-evenly space-x-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
            <p className="font-bold">justify-stretch</p>
            <div className="grid grid-flow-col justify-stretch gap-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500">01</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500">02</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500">03</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Justify Items</h5>
          <p className="mb-3 text-sm">インライン軸に沿ってグリッド アイテムを整列する方法を制御する</p>
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
                  <td className="p-3 text-blue-700">justify-items-start</td>
                  <td className="p-3">justify-items: start;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-items-end</td>
                  <td className="p-3">justify-items: end;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-items-center</td>
                  <td className="p-3">justify-items: center;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">justify-items-stretch</td>
                  <td className="p-3">justify-items: stretch;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 overflow-auto">
            <p className="font-bold">justify-items-start</p>
            <div className="grid grid-cols-3 gap-4 bg-gray-200 text-sm font-bold">
              <div className="grid justify-items-start rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-sky-500">01</div>
              </div>
              <div className="grid justify-items-start rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-sky-500">02</div>
              </div>
              <div className="grid justify-items-start rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-sky-500">03</div>
              </div>
            </div>
            <p className="font-bold">justify-items-center</p>
            <div className="grid grid-cols-3 gap-4 bg-gray-200 text-sm font-bold">
              <div className="grid justify-items-center rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-fuchsia-500 shadow-lg">01</div>
              </div>
              <div className="grid justify-items-center rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-fuchsia-500 shadow-lg">02</div>
              </div>
              <div className="grid justify-items-center rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-fuchsia-500 shadow-lg">03</div>
              </div>
              <div className="grid justify-items-center rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-fuchsia-500 shadow-lg">04</div>
              </div>
              <div className="grid justify-items-center rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-fuchsia-500 shadow-lg">05</div>
              </div>
              <div className="grid justify-items-center rounded-lg bg-gray-300">
                <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-fuchsia-500 shadow-lg">06</div>
              </div>
            </div>
            <p className="font-bold">justify-items-start</p>
            <div className="grid grid-cols-3 justify-items-stretch gap-4 bg-gray-200 text-sm font-bold">
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500 shadow-lg">01</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500 shadow-lg">02</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500 shadow-lg">03</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500 shadow-lg">04</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500 shadow-lg">05</div>
              <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500 shadow-lg">06</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Align Content</h5>
          <p className="mb-3 text-sm">複数行のフレックスおよびグリッド コンテナーでの行の配置方法を制御する</p>
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
                  <td className="p-3 text-blue-700">content-normal</td>
                  <td className="p-3">align-content: normal;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-center</td>
                  <td className="p-3">align-content: center;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-start</td>
                  <td className="p-3">align-content: flex-start;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-end</td>
                  <td className="p-3">align-content: flex-end;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-between</td>
                  <td className="p-3">align-content: space-between;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-around</td>
                  <td className="p-3">align-content: space-around;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-evenly</td>
                  <td className="p-3">align-content: space-evenly;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-baseline</td>
                  <td className="p-3">align-content: baseline;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">content-stretch</td>
                  <td className="p-3">align-content: stretch;</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3 overflow-auto bg-gray-300 p-3">
              <p className="font-bold">content-start</p>
              <div className="text-sm font-bold">
                <div className="grid h-20 w-full grid-cols-3 content-start gap-4 rounded-lg bg-gray-200 text-center">
                  <div className="rounded-lg bg-purple-500 p-2">01</div>
                  <div className="rounded-lg bg-purple-500 p-2">02</div>
                  <div className="rounded-lg bg-purple-500 p-2">03</div>
                </div>
              </div>
              <p className="font-bold">content-center</p>
              <div className="text-sm font-bold">
                <div className="grid h-20 w-full grid-cols-3 content-center gap-4 rounded-lg bg-gray-200 text-center">
                  <div className="rounded-lg bg-purple-500 p-2">01</div>
                  <div className="rounded-lg bg-purple-500 p-2">02</div>
                  <div className="rounded-lg bg-purple-500 p-2">03</div>
                </div>
              </div>
              <p className="font-bold">content-between</p>
              <div className="text-sm font-bold">
                <div className="grid h-32 w-full grid-cols-3 content-between gap-4 rounded-lg bg-gray-200 text-center">
                  <div className="rounded-lg bg-purple-500 p-2">01</div>
                  <div className="rounded-lg bg-purple-500 p-2">02</div>
                  <div className="rounded-lg bg-purple-500 p-2">03</div>
                  <div className="rounded-lg bg-purple-500 p-2">04</div>
                  <div className="rounded-lg bg-purple-500 p-2">05</div>
                </div>
              </div>
              <p className="font-bold">content-around</p>
              <div className="text-sm font-bold">
                <div className="grid h-48 w-full grid-cols-3 content-around gap-4 rounded-lg bg-gray-200 text-center">
                  <div className="rounded-lg bg-purple-500 p-2">01</div>
                  <div className="rounded-lg bg-purple-500 p-2">02</div>
                  <div className="rounded-lg bg-purple-500 p-2">03</div>
                  <div className="rounded-lg bg-purple-500 p-2">04</div>
                  <div className="rounded-lg bg-purple-500 p-2">05</div>
                </div>
              </div>
              <p className="font-bold">content-evenly</p>
              <div className="text-sm font-bold">
                <div className="grid h-48 w-full grid-cols-3 content-evenly gap-4 rounded-lg bg-gray-200 text-center">
                  <div className="rounded-lg bg-purple-500 p-2">01</div>
                  <div className="rounded-lg bg-purple-500 p-2">02</div>
                  <div className="rounded-lg bg-purple-500 p-2">03</div>
                  <div className="rounded-lg bg-purple-500 p-2">04</div>
                  <div className="rounded-lg bg-purple-500 p-2">05</div>
                </div>
              </div>
              <p className="font-bold">content-stretch</p>
              <div className="text-sm font-bold">
                <div className="grid h-48 w-full grid-cols-3 content-stretch gap-4 rounded-lg bg-gray-200 text-center">
                  <div className="rounded-lg bg-purple-500 p-2">01</div>
                  <div className="rounded-lg bg-purple-500 p-2">02</div>
                  <div className="rounded-lg bg-purple-500 p-2">03</div>
                  <div className="rounded-lg bg-purple-500 p-2">04</div>
                  <div className="rounded-lg bg-purple-500 p-2">05</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="text-lg font-bold text-gray-900">Align Items</h5>
          <p className="mb-3 text-sm">コンテナーの交差軸に沿ってフレックス アイテムとグリッド アイテムを配置する方法を制御する</p>
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
                  <td className="p-3 text-blue-700">items-start</td>
                  <td className="p-3">align-items: flex-start;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-end</td>
                  <td className="p-3">align-items: flex-end;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-center</td>
                  <td className="p-3">align-items: center;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-baseline</td>
                  <td className="p-3">align-items: baseline;</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-blue-700">items-stretch</td>
                  <td className="p-3">align-items: stretch;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-auto p-3">
            <div className="bg-gray-300 p-3 text-sm font-bold leading-6">
              <p className="font-bold">items-start</p>
              <div className="flex w-full items-start gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-500 py-2">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-500 py-6">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-pink-500 py-4">03</div>
              </div>
              <p className="font-bold">items-center</p>
              <div className="flex w-full items-center gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-violet-500 py-2">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-violet-500 py-6">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-violet-500 py-4">03</div>
              </div>
              <p className="font-bold">items-baseline</p>
              <div className="flex w-full items-baseline gap-4 rounded-lg bg-gray-200 text-center">
                <div className="flex flex-1 items-center justify-center rounded-lg bg-blue-500 pb-6 pt-2">01</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-blue-500 pb-12 pt-8">02</div>
                <div className="flex flex-1 items-center justify-center rounded-lg bg-blue-500 pb-4 pt-12">03</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h5 className="mb-3 text-lg font-bold text-gray-900">Sample</h5>
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

import Layout from "@/components/pages/Tailwind/Layout"
import Flexbox from "@/components/pages/Tailwind/Flexbox"
import SpaceSize from "@/components/pages/Tailwind/SpaceSize"
import Typography from "@/components/pages/Tailwind/Typography"

import { Tabs } from "flowbite"
import type { TabsOptions, TabsInterface, TabItem } from "flowbite"
import { useEffect } from "react"
import Images from "@/components/pages/Tailwind/Images"

export function useTabs() {
  useEffect(() => {
    const tabElements: TabItem[] = [
      {
        id: "layout",
        triggerEl: document.querySelector("#layout-tab")!,
        targetEl: document.querySelector("#layout")!,
      },
      {
        id: "flexbox",
        triggerEl: document.querySelector("#flexbox-tab")!,
        targetEl: document.querySelector("#flexbox")!,
      },
      {
        id: "space-size",
        triggerEl: document.querySelector("#space-size-tab")!,
        targetEl: document.querySelector("#space-size")!,
      },
      {
        id: "typography",
        triggerEl: document.querySelector("#typography-tab")!,
        targetEl: document.querySelector("#typography")!,
      },
      {
        id: "images",
        triggerEl: document.querySelector("#images-tab")!,
        targetEl: document.querySelector("#images")!,
      },
    ]

    const options: TabsOptions = {
      defaultTabId: "layout",
      activeClasses: "border-b-4 text-orange-400 border-orange-400",
      inactiveClasses: "text-gray-500 hover:text-gray-600 hover:border-gray-300",
    }

    const tabs: TabsInterface = new Tabs(tabElements, options)
    tabs.show("layout")
  }, [])
}

export default function Tailwind() {
  useTabs()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Tailwind</h1>
      <div className="mb-4 border-b border-gray-200">
        <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
          <li role="presentation">
            <button className="inline-block p-4" id="layout-tab" type="button">
              Layout
            </button>
          </li>
          <li className="ml-2" role="presentation">
            <button className="inline-block p-4" id="flexbox-tab" type="button">
              flexbox
            </button>
          </li>
          <li className="ml-2" role="presentation">
            <button className="inline-block p-4" id="space-size-tab" type="button">
              space-size
            </button>
          </li>
          <li className="ml-2" role="presentation">
            <button className="inline-block p-4" id="typography-tab" type="button">
              typography
            </button>
          </li>
          <li className="ml-2" role="presentation">
            <button className="inline-block p-4" id="images-tab" type="button">
              images
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div className="hidden" id="layout">
          <Layout />
        </div>
        <div className="hidden rounded-lg bg-gray-50 p-4" id="flexbox">
          <Flexbox />
        </div>
        <div className="hidden rounded-lg bg-gray-50 p-4" id="space-size">
          <SpaceSize />
        </div>
        <div className="hidden rounded-lg bg-gray-50 p-4" id="typography">
          <Typography />
        </div>
        <div className="hidden rounded-lg bg-gray-50 p-4" id="images">
          <Images />
        </div>
      </div>
    </div>
  )
}

import Layout from "@/components/pages/Tailwind/Layout"
import Flexbox from "@/components/pages/Tailwind/Flexbox"
import SpaceSize from "@/components/pages/Tailwind/SpaceSize"
import Typography from "@/components/pages/Tailwind/Typography"

import { Tabs } from "flowbite"
import type { TabsOptions, TabsInterface, TabItem } from "flowbite"

if (typeof window === 'object') {
// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements: TabItem[] = [
  {
      id: 'layout',
      triggerEl: document.querySelector('#layout-tab')!,
      targetEl: document.querySelector('#layout')!
  },
  {
      id: 'flexbox',
      triggerEl: document.querySelector('#flexbox-tab')!,
      targetEl: document.querySelector('#flexbox')!
  },
  {
      id: 'space-size',
      triggerEl: document.querySelector('#space-size-tab')!,
      targetEl: document.querySelector('#space-size')!
  },
  {
      id: 'typography',
      triggerEl: document.querySelector('#typography-tab')!,
      targetEl: document.querySelector('#typography')!
  }
];

// options with default values
const options: TabsOptions = {
  defaultTabId: 'layout',
  activeClasses: 'text-blue-600 hover:text-blue-600 border-blue-600',
  inactiveClasses: 'text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300',
  onShow: () => {
    console.log('tab is shown');
  }
};

/*
* tabElements: array of tab objects
* options: optional
*/
const tabs: TabsInterface = new Tabs(tabElements, options);

// open tab item based on id
tabs.show('layout');
}

export default function Tailwind() {
  return (
    <div className="p-4">
      <div className="mb-4 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="mr-2" role="presentation">
            <button className="inline-block p-4 border-b-2" id="layout-tab" data-tabs-target="#layout" type="button" role="tab" aria-controls="layout" aria-selected="false">Layout</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className="inline-block p-4 border-b-2" id="flexbox-tab" data-tabs-target="#flexbox" type="button" role="tab" aria-controls="flexbox" aria-selected="false">flexbox</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className="inline-block p-4 border-b-2" id="space-size-tab" data-tabs-target="#space-size" type="button" role="tab" aria-controls="space-size" aria-selected="false">space-size</button>
          </li>
          <li role="presentation">
            <button className="inline-block p-4 border-b-2" id="typography-tab" data-tabs-target="#typography" type="button" role="tab" aria-controls="typography" aria-selected="false">typography</button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div className="hidden" id="layout" role="tabpanel" aria-labelledby="layout-tab">
          <Layout />
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50" id="flexbox" role="tabpanel" aria-labelledby="flexbox-tab">
          <Flexbox />
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50" id="space-size" role="tabpanel" aria-labelledby="space-size-tab">
          <SpaceSize />
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50" id="typography" role="tabpanel" aria-labelledby="typography-tab">
          <Typography />
        </div>
      </div>
    </div>
  )
}

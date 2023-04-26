import { Accordion } from "flowbite"
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite"
import { useEffect } from "react"

function useAccordion() {
  useEffect(() => {
    const accordionItems: AccordionItem[] = [
      {
        id: "accordion-example-heading-1",
        triggerEl: document.querySelector("#accordion-example-heading-1")!,
        targetEl: document.querySelector("#accordion-example-body-1")!,
        active: false,
      },
      {
        id: "accordion-example-heading-2",
        triggerEl: document.querySelector("#accordion-example-heading-2")!,
        targetEl: document.querySelector("#accordion-example-body-2")!,
        active: false,
      },
      {
        id: "accordion-example-heading-3",
        triggerEl: document.querySelector("#accordion-example-heading-3")!,
        targetEl: document.querySelector("#accordion-example-body-3")!,
        active: false,
      },
    ]

    const options: AccordionOptions = {
      alwaysOpen: true,
      activeClasses: "bg-gray-100 text-gray-900",
      inactiveClasses: "text-gray-500",
    }

    const accordion: AccordionInterface = new Accordion(accordionItems, options)

    accordion.open("accordion-example-heading-1")
  }, [])
}

export default function FlowbiteAccordion() {
  useAccordion()

  return (
    <>
      <h5 className="text-lg font-bold tracking-tight text-gray-900">Accordion</h5>
      <p className="mb-2 text-gray-700">子要素の折りたたみと展開</p>
      <div id="accordion-arrow-icon" data-accordion="open">
        <h2 id="accordion-example-heading-1">
          <button type="button" className="flex w-full items-center justify-between border border-b-0 border-gray-200 p-5 text-left font-medium hover:bg-gray-100" data-accordion-target="#accordion-example-body-1">
            <span>Accordion1</span>
            <svg data-accordion-icon className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </h2>
        <div id="accordion-example-body-1" className="hidden">
          <div className="border border-b-0 border-gray-200 p-5">
            <p className="text-gray-500">内容1</p>
          </div>
        </div>
        <h2 id="accordion-example-heading-2">
          <button type="button" className="flex w-full items-center justify-between border border-b-0 border-gray-200 p-5 text-left font-medium hover:bg-gray-100" data-accordion-target="#accordion-example-body-2">
            <span>Accordion2</span>
            <svg data-accordion-icon className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </h2>
        <div id="accordion-example-body-2" className="hidden">
          <div className="border border-b-0 border-gray-200 p-5">
            <p className="text-gray-500">内容2</p>
          </div>
        </div>
        <h2 id="accordion-example-heading-3">
          <button type="button" className="flex w-full items-center justify-between border border-gray-200 p-5 text-left font-medium hover:bg-gray-100" data-accordion-target="#accordion-example-body-3">
            <span>Accordion3</span>
            <svg data-accordion-icon className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </h2>
        <div id="accordion-example-body-3" className="hidden">
          <div className="border border-t-0 border-gray-200 p-5">
            <p className="text-gray-500">内容3</p>
          </div>
        </div>
      </div>
    </>
  )
}

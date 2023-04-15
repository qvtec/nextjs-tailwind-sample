
export default function Accordion() {
  return (
    <>
    <h5 className="text-lg font-bold tracking-tight text-gray-900">Accordion</h5>
    <p className="text-gray-700 mb-2">子要素の折りたたみと展開</p>
    <div id="accordion-collapse" data-accordion="collapse" className="w-full">
      <div id="accordion-collapse-heading-1">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
          <span>Default accordion</span>
          <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 border border-gray-200">
          <p className="mb-2 text-gray-500"><code>data-accordion=&quot;collapse&quot;</code></p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
          <span>Always open</span>
          <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500"><code>data-accordion=&quot;open&quot;</code></p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
          <span>Color options</span>
          <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
        <div className="p-5 border border-t-0 border-gray-200">
          <ul className="pl-5 text-gray-500 list-disc">
            <li>data-active-classes</li>
            <li>data-inactive-classes</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

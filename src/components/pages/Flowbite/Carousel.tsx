import Image from "next/image"
import { Carousel } from "flowbite"
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite"
import { useEffect } from "react"

function useCarousel() {
  useEffect(() => {
    const items: CarouselItem[] = [
      {
        position: 0,
        el: document.getElementById("carousel-item-1")!,
      },
      {
        position: 1,
        el: document.getElementById("carousel-item-2")!,
      },
      {
        position: 2,
        el: document.getElementById("carousel-item-3")!,
      },
    ]

    const options: CarouselOptions = {
      defaultPosition: 1,
      interval: 3000,

      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: [
          {
            position: 0,
            el: document.getElementById("carousel-indicator-1")!,
          },
          {
            position: 1,
            el: document.getElementById("carousel-indicator-2")!,
          },
          {
            position: 2,
            el: document.getElementById("carousel-indicator-3")!,
          },
        ],
      },

      // callback functions
      onNext: () => {
        console.log("next slider item is shown")
      },
      onPrev: () => {
        console.log("previous slider item is shown")
      },
      onChange: () => {
        console.log("new slider item has been shown")
      },
    }

    const carousel: CarouselInterface = new Carousel(items, options)

    carousel.cycle()

    // set event listeners for prev and next buttons
    const $prevButton = document.getElementById("data-carousel-prev")!
    const $nextButton = document.getElementById("data-carousel-next")!

    $prevButton.addEventListener("click", () => {
      carousel.prev()
    })

    $nextButton.addEventListener("click", () => {
      carousel.next()
    })
  }, [])
}

export default function FlowbiteCarousel() {
  useCarousel()
  return (
    <>
      <h5 className="text-lg font-bold tracking-tight text-gray-900">Carousel</h5>
      <p className="mb-2 text-gray-700">カルーセル</p>
      <div className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          <div id="carousel-item-1" className="hidden duration-700 ease-in-out">
            <Image src="/images/carousel-1.svg" className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" width="0" height="0" alt="..." />
          </div>
          <div id="carousel-item-2" className="hidden duration-700 ease-in-out">
            <Image src="/images/carousel-2.svg" className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" width="0" height="0" alt="..." />
          </div>
          <div id="carousel-item-3" className="hidden duration-700 ease-in-out">
            <Image src="/images/carousel-3.svg" className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" width="0" height="0" alt="..." />
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          <button id="carousel-indicator-1" type="button" className="h-3 w-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
          <button id="carousel-indicator-2" type="button" className="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
          <button id="carousel-indicator-3" type="button" className="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
        </div>
        <button id="data-carousel-prev" type="button" className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button id="data-carousel-next" type="button" className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </>
  )
}

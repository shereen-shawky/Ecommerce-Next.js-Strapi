import React from 'react'
import Link from 'next/link'
export default function BreadCrumbs({path}) {
  return (
    <nav aria-label="Breadcrumb">
  <ol
    className="flex overflow-hidden rounded border border-gray-300 bg-white text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
  >
    <li href="/">
      <Link
        href="/"
        className="block h-10 bg-gray-100 px-4 leading-10 transition-colors hover:text-gray-900 dark:bg-gray-700 dark:hover:text-white"
      >
        Home
      </Link>
    </li>

    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-700"
      >
      </span>

      <a
        href="#"
        className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        {path.split('/')[1]}
      </a>
    </li>
    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-700"
      >
      </span>

      <a
        href="#"
        className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        {path.split('/')[2]}
      </a>
    </li>
  </ol>
</nav>
  )
}

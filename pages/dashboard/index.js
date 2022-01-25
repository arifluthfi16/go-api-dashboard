import React, { useState } from 'react'
import Link from "next/link";


export default function index() {
  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const shortedUrl = [
    {
      original_url: 'https://google.com',
      shorted_url: 'https://arfl.com/shorted_url',
      created_at: '16 Aug 2022',
      number_of_calls: 1000,
    },
    {
      original_url: 'https://google.com',
      shorted_url: 'https://arfl.com/shorted_url',
      created_at: '16 Aug 2022',
      number_of_calls: 1000,
    },
    {
      original_url: 'https://google.com',
      shorted_url: 'https://arfl.com/shorted_url',
      created_at: '16 Aug 2022',
      number_of_calls: 1000,
    },
    {
      original_url: 'https://google.com',
      shorted_url: 'https://arfl.com/shorted_url',
      created_at: '16 Aug 2022',
      number_of_calls: 1000,
    },
    {
      original_url: 'https://google.com',
      shorted_url: 'https://arfl.com/shorted_url',
      created_at: '16 Aug 2022',
      number_of_calls: 1000,
    },
    {
      original_url: 'https://google.com',
      shorted_url: 'https://arfl.com/shorted_url',
      created_at: '16 Aug 2022',
      number_of_calls: 1000,
    },
    {
      original_url: 'https://google.com',
      shorted_url: 'https://arfl.com/shorted_url',
      created_at: '16 Aug 2022',
      number_of_calls: 1000,
    }  
  ];

  return (
    <div className={`flex h-screen overflow-y-hidden antialiased text-gray-900 bg-white`}>
      {/* SIDE BARS */}
      <aside
        className={`
        fixed
        inset-y-0
        z-10
        flex flex-col flex-shrink-0
        w-64
        max-h-screen
        overflow-hidden
        transition-all
        transform
        bg-white
        border-r
        shadow-lg
        lg:z-auto lg:static lg:shadow-none 
        ${sidebar ? '-translate-x-full lg:translate-x-0' : ''}`
      }
      >
        {/* Header and Toggle */}
        <div className={`flex items-center justify-between flex-shrink-0 p-2`}>
        <span className={`p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap`}>
        <span>CONTROL BOARD</span>
        </span>
          <button 
            className={`p-2 rounded-md lg:hidden`}
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}

        <div className='flex-1 overflow-hidden hover:overflow-y-auto'>
          <ul className='p-2 overflow-hidden'>
            <li>
            <Link href="/">
              <a
                className='flex p-2 rounded-md space-x-2 hover:bg-gray-100'
              >
                <svg
                    class="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Dashboard</span>
              </a>
            </Link>
            </li>
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className='flex-shrink-0 p-2 border-t max-h-14'>
          <button
            className='
              flex
              items-center
              justify-center
              w-full
              px-4
              py-2
              space-x-2
              font-medium
              tracking-wider
              uppercase
              bg-gray-100
              rounded-md
              focus:outline-none focus:ring
            '
          >
            <span>
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            <span>
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* CONTENTS */}
      <div className='flex flex-col h-full overflow-hidden w-full'>

        {/* HEADER BAR */}
        <header className='flex-shrink-0 border-b'>
          {/* HEADER BAR CONTAINER */}
          <div className='flex items-center justify-between p-2'>
              <div className='flex items-center'>
                {/* MENU BUTTON */}
              <div className='flex items-center space-x-3'>
                <button 
                  className='p-2 rounded-md focus:outline-none focus:ring lg:hidden'
                  onClick={toggleSidebar}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    className="w-6 h-6 text-gray-600"
                    >
                      <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                  </svg>
                </button>
              </div>

              {/* COMPANY TITLE */}
              <span class="p-2 text-xl font-semibold tracking-wider uppercase">( ͡• ͜ʖ ͡•)</span>
              </div>

              {/* RIGHT BUTTONS */}
              <div className='relative flex items-center space-x-3 mr-2'>
                {/* Notification */}
                <div className='relative'>
                  {/* Red Dot */}
                  <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
                  <div className="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
                  <button
                        class="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
                      >
                        <svg
                          class="w-6 h-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </button>
                </div>

                {/* Services */}
                <div className="relative">
                  <button
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                </div>

              </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className='flex-1 max-h-full p-4 overflow-hidden overflow-y-scroll'>
          {/* Main Content Header */}
          <div className='
            flex
            flex-col
            items-start
            justify-between
            pb-6
            space-y-4
            border-b
            lg:items-center lg:space-y-0 lg:flex-row
          '> 
            <h1 class="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
          </div>

          {/* Start Content */}

        <div className='grid mt-6 grid-cols-1 gap-4 md:grid-cols-2'>
          <Link
            href='#'
          >
            <a
              className='p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg'
            >
              <div class="flex items-start">
                <div class="flex flex-col flex-shrink-0 space-y-2">
                  <span class="text-gray-400">Created Short Url</span>
                  <span class="text-lg font-semibold">103</span>
                </div>
                {/* <div class="relative min-w-0 ml-auto h-14">
                  <canvas id="usersChart"></canvas>
                </div> */}
              </div>
              <div>
                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded mr-2">+3</span>
                <span>This Week</span>
              </div>
            </a>
          </Link>
          <Link
            href='#'
          >
            <a
              className='p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg'
            >
              <div class="flex items-start">
                <div class="flex flex-col flex-shrink-0 space-y-2">
                  <span class="text-gray-400">Total Visit</span>
                  <span class="text-lg font-semibold">1242</span>
                </div>
                {/* <div class="relative min-w-0 ml-auto h-14">
                  <canvas id="usersChart"></canvas>
                </div> */}
              </div>
              <div>
                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded mr-2">+20</span>
                <span>Today</span>
              </div>
            </a>
          </Link>
        
        </div>

        {/* SHORT URLS TABLE */}
        <h3 class="mt-6 text-xl">Shorted Urls</h3>
        <div className="flex flex-col mt-6">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Url
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created At
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total Visit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {shortedUrl.map((item,index ) => (
                      <tr key={`${item.created_at}_${index}}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.shorted_url}</div>
                              <div className="text-sm text-gray-500">{item.original_url}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.created_at}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.number_of_calls}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edits
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </main>

         {/* FOOTERS */}
         <footer className='flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14'>
           FOOTERS
         </footer>
                    
        
      </div>

    </div>
  )
}

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{ margin: '25px' }} className="bg-blue-700 rounded">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button"
          onClick={toggleMobileMenu}
           className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu"
           aria-expanded={isMobileMenuOpen}>
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
           
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          {/* <div className="flex flex-shrink-0 items-center">
          //Add logo here
          </div> */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
            <Link href="/Explore" passHref>
                    <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                      Explore
                    </div>
                  </Link>
                  <Link href="/Assigned" passHref>
                    <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                      Assigned
                    </div>
                  </Link>
                  <Link href="/Mytasks" passHref>
                    <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                      MyTasks
                    </div>
                  </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         
  
          <div className="relative ml-3">
            <div>
              <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </button>
            </div>
  
           
           
          </div>
        </div>
      </div>
    </div>
  
    <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
      <Link href="/Explore" passHref>
                    <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                      Explore
                    </div>
                  </Link>
                  <Link href="/Assigned" passHref>
                    <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                      Assigned
                    </div>
                  </Link>
                  <Link href="/Mytasks" passHref>
                    <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                      MyTasks
                    </div>
                  </Link>
      </div>
    </div>
  </nav>
  );
}


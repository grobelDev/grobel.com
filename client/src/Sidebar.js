import React, { Fragment } from 'react';
import MasonryComponent from './MasonryComponent';
import styled from 'styled-components';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

export default function SidebarMain() {
  return (
    <Fragment>
      <SidebarBrowser></SidebarBrowser>
      <SidebarMini></SidebarMini>
    </Fragment>
  );
}

function SidebarMobile() {
  return (
    <Fragment>
      <MobileView>
        <SidebarMobileRegular></SidebarMobileRegular>
        <SidebarMobileMini></SidebarMobileMini>
      </MobileView>
    </Fragment>
  );
}

function SidebarMobileRegular() {
  return (
    <div className='hidden md:block'>
      <Sidebar></Sidebar>
    </div>
  );
}

function SidebarMobileMini() {
  return (
    <div className='block md:hidden'>
      <SidebarMini></SidebarMini>
    </div>
  );
}

function SidebarBrowser() {
  return (
    <Fragment>
      <BrowserView>
        {/* Medium Screens */}
        <SidebarBrowserRegular></SidebarBrowserRegular>
        {/* Small Screens */}
        <SidebarBrowserMini></SidebarBrowserMini>
      </BrowserView>
    </Fragment>
  );
}

function SidebarBrowserRegular() {
  return (
    <div className='hidden md:block'>
      <Sidebar></Sidebar>
    </div>
  );
}

function SidebarBrowserMini() {
  return (
    <div className='block md:hidden'>
      <SidebarMini></SidebarMini>
    </div>
  );
}

function Sidebar() {
  return (
    <div className='flex overflow-visible bg-gray-100'>
      {/* <div className='hidden md:flex md:flex-shrink-0'> */}
      {/* <div className='hidden md:flex flex-col w-64 border-r border-gray-200 pb-4 bg-white'> */}
      <div className='flex flex-col w-64 border-r border-gray-200 pb-4 bg-white'>
        {/* <div className='flex items-center flex-shrink-0 px-4'>
            <img
              className='h-8 w-auto'
              src='https://i.imgur.com/2mdtBD3.png'
              alt='Workflow'
            ></img>
            Grobel
          </div> */}
        <SidebarContainer>
          <div className='h-0 flex-1 flex flex-col'>
            <nav className='flex-1 px-4 bg-white'>
              <ContentContainer className='flex flex-col justify-center'>
                <a
                  href='#'
                  className='flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md  hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150'
                >
                  <img
                    className='mr-3 h-6 w-6 text-gray-500 transition ease-in-out duration-150'
                    src='https://i.imgur.com/2mdtBD3.png'
                  ></img>
                  <span className='hidden sm:block'>Grobel</span>
                </a>
              </ContentContainer>
              <a
                href='#'
                className='group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6'
                  />
                </svg>
                Home
              </a>
              <a
                href='#'
                className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                Team
              </a>
              <a
                href='#'
                className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  />
                </svg>
                Projects
              </a>
              <a
                href='#'
                className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                Calendar
              </a>
              <a
                href='#'
                className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                  />
                </svg>
                Documents
              </a>
              <a
                href='#'
                className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                Reports
              </a>
            </nav>
          </div>
        </SidebarContainer>
      </div>
      <div class='flex flex-col w-0 flex-1'>
        <NavContainer className='z-10 flex-shrink-0 flex bg-white shadow'>
          <div class='flex-1 px-4 flex justify-between'>
            <div class='flex-1 flex'>
              <div class='w-full flex md:ml-0'>
                <div className='flex flex-col justify-center'>
                  <h1 class='text-2xl font-semibold text-gray-900'>Home</h1>
                </div>
              </div>
            </div>
            <div class='ml-4 flex items-center md:ml-6'>
              <button class='p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500'>
                <svg
                  class='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
              <div class='ml-3 relative' x-data='{ open: false }'>
                <div>
                  <button class='max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline'>
                    <img
                      class='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </NavContainer>
        <main
          class='flex-1 relative z-0 overflow-y-auto focus:outline-none'
          tabindex='0'
          x-data
          x-init='$el.focus()'
        >
          <div class='max-w-7xl mx-auto'>
            <MasonryComponent></MasonryComponent>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarMini() {
  return (
    <Fragment>
      <div className='flex overflow-visible bg-gray-100'>
        <div className='md:hidden flex flex-col w-24 border-r border-gray-200 pb-4 bg-white'>
          <SidebarContainer>
            <div className='h-0 flex-1 flex flex-col'>
              <nav className='flex-1 px-4 bg-white'>
                <ContentContainer className='flex flex-col justify-center'>
                  <a
                    href='#'
                    className='flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md  hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150'
                  >
                    <img
                      className='mr-3 h-6 w-6 text-gray-500 transition ease-in-out duration-150'
                      src='https://i.imgur.com/2mdtBD3.png'
                    ></img>
                  </a>
                </ContentContainer>
                <a
                  href='#'
                  className='group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150'
                >
                  <svg
                    className='mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
                >
                  <svg
                    className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
                >
                  <svg
                    className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
                >
                  <svg
                    className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
                >
                  <svg
                    className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150'
                >
                  <svg
                    className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </SidebarContainer>
        </div>
        {/* </div> */}
        <div class='flex flex-col w-0 flex-1'>
          {/* <div class='relative z-10 flex-shrink-0 flex h-16 bg-white shadow'> */}
          <NavContainer className='z-10 flex-shrink-0 flex bg-white shadow'>
            {/* <button class='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden'>
            <svg
              class='h-6 w-6'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </button> */}
            <div class='flex-1 px-4 flex justify-between'>
              <div class='flex-1 flex'>
                <div class='w-full flex md:ml-0'>
                  <div className='flex flex-col justify-center'>
                    <h1 class='text-2xl font-semibold text-gray-900'>Home</h1>
                  </div>
                  {/* <label for='search_field' class='sr-only'>
                  Search
                </label> */}
                  {/* <div class='relative w-full text-gray-400 focus-within:text-gray-600'>
                  <div class='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                    <svg
                      class='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      />
                    </svg>
                  </div>
                  <input
                    id='search_field'
                    class='block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm'
                    placeholder='Search'
                  />
                </div> */}
                </div>
              </div>
              <div class='ml-4 flex items-center md:ml-6'>
                <button class='p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500'>
                  <svg
                    class='h-6 w-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>
                <div class='ml-3 relative' x-data='{ open: false }'>
                  <div>
                    <button class='max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline'>
                      <img
                        class='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </button>
                  </div>
                  {/* <div class='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
                  <div class='py-1 rounded-md bg-white shadow-xs'>
                    <a
                      href='#'
                      class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150'
                    >
                      Your Profile
                    </a>
                    <a
                      href='#'
                      class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150'
                    >
                      Settings
                    </a>
                    <a
                      href='#'
                      class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150'
                    >
                      Sign out
                    </a>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </NavContainer>
          {/* </div> */}
          {/* <ContentContainer> */}
          <main
            class='flex-1 relative z-0 overflow-y-auto focus:outline-none'
            tabindex='0'
            x-data
            x-init='$el.focus()'
          >
            {/* <div class='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              <h1 class='text-2xl font-semibold text-gray-900'>Home</h1>
            </div> */}
            <div class='max-w-7xl mx-auto'>
              {/* <div class='py-4'>
                <div class='border-4 border-dashed border-gray-200 rounded-lg h-96'></div>
              </div> */}
              {/* Content */}
              <MasonryComponent></MasonryComponent>
            </div>
          </main>
          {/* </ContentContainer> */}
        </div>
      </div>
    </Fragment>
  );
}

const NavContainer = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 3.4rem;
  //   background-color: yellow;
`;

const SidebarContainer = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: yellow;
`;

const ContentContainer = styled.div`
  height: 3.4rem;
  //   background-color: yellow;
`;

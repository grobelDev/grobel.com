import React, { Fragment, useState, useContext } from 'react';
import MasonryComponent from './MasonryComponent';
import styled from 'styled-components';
import {
  BrowserView,
  MobileView
  //   isBrowser,
  //   isMobile
} from 'react-device-detect';
import SidebarContext from './SidebarContext';

let sidebarElements = [
  {
    imageUrl: 'https://i.imgur.com/2mdtBD3.png'
  },
  {
    label: 'Home',
    path:
      'M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z'
  },
  {
    label: 'Explore',
    path: 'M7 20L11 4M13 20L17 4M6 9H20M4 15H18'
  },
  {
    label: 'Notifications',
    path:
      'M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9'
  },
  {
    label: 'Messages',
    path:
      'M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z',
    path2:
      'M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z',
    strokeWidth: 1
  },
  {
    label: 'My Page',
    path:
      'M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z',
    path2: 'M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
  },
  {
    label: 'More',
    path:
      'M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
  }
];

export default function SidebarMain() {
  //   const [elements, setElements] = useState(sidebarElements);
  const [selectedElement, setSelectedElement] = useState(null);
  console.log(selectedElement);
  return (
    <Fragment>
      <SidebarContext.Provider
        value={{
          selectedElement: selectedElement,
          setSelectedElement: setSelectedElement
        }}
      >
        <SidebarBrowser></SidebarBrowser>
        <SidebarMobile></SidebarMobile>
      </SidebarContext.Provider>
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

function SidebarElementRegular({
  imageUrl,
  path,
  path2,
  label,
  strokeWidth,
  setSelectedElement
}) {
  return (
    <ContentContainer
      className='flex flex-col justify-center'
      onClick={() => setSelectedElement(label)}
    >
      <a
        href='#'
        className='flex items-center h-full px-4 my-1 text-lg font-medium font-bold text-gray-900 transition duration-100 ease-in-out rounded-full focus:underline focus:text-indigo-600 hover:bg-indigo-200'
      >
        {imageUrl ? (
          <img
            className='w-6 h-6 mr-4 text-gray-500 transition duration-150 ease-in-out'
            src='https://i.imgur.com/2mdtBD3.png'
          ></img>
        ) : null}
        {path ? (
          <svg
            className='w-6 h-6 mr-4 transition duration-150 ease-in-out'
            stroke='currentColor'
            fill='none'
            // fill='#5a67d8'
            viewBox='0 0 24 24'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width={strokeWidth ? strokeWidth : 2}
              d={path}
            />
            {path2 ? (
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width={strokeWidth ? strokeWidth : 2}
                d={path2}
              />
            ) : null}
          </svg>
        ) : null}
        <h1 className='text-xl font-semibold'>{label}</h1>
      </a>
    </ContentContainer>
  );
}

function SidebarElementMini({ imageUrl, path, path2, label }) {
  return (
    <ContentContainer className='flex flex-col justify-center'>
      <a
        href='#'
        className='flex items-center justify-center h-full px-3 my-1 text-lg font-medium font-bold text-center text-gray-900 transition duration-100 ease-in-out rounded-full focus:underline focus:text-indigo-600 hover:bg-indigo-200'
      >
        {imageUrl ? (
          <img
            className='w-6 h-6 text-gray-500 transition duration-150 ease-in-out'
            src='https://i.imgur.com/2mdtBD3.png'
          ></img>
        ) : null}
        {path ? (
          <svg
            className='w-6 h-6 transition duration-150 ease-in-out'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d={path}
            />
            {path2 ? (
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d={path2}
              />
            ) : null}
          </svg>
        ) : null}
        <h1 className='text-xl font-semibold'>{label}</h1>
      </a>
    </ContentContainer>
  );
}

function Sidebar() {
  //   console.log(resource);
  const resource = useContext(SidebarContext);

  return (
    <div className='flex overflow-visible bg-gray-100'>
      <div className='flex flex-col w-64 pb-4 bg-white border-r border-gray-200'>
        <SidebarContainer>
          <div className='flex flex-col flex-1 h-0'>
            <nav className='flex-1 px-4 bg-white'>
              {sidebarElements.map(element => {
                return (
                  <SidebarElementRegular
                    label={element.label}
                    imageUrl={element.imageUrl}
                    path={element.path}
                    path2={element.path2}
                    strokeWidth={element.strokeWidth}
                    setSelectedElement={resource.setSelectedElement}
                  ></SidebarElementRegular>
                );
              })}
              {/* {elements
                ? elements.map(element => {
                    return (
                      <SidebarElementRegular
                        path={element.path}
                      ></SidebarElementRegular>
                    );
                  })
                : null} */}
              {/* <SidebarElementRegular
                imageUrl='https://i.imgur.com/2mdtBD3.png'
                // label='Grobel'
              ></SidebarElementRegular>
              <SidebarElementRegular
                path='M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6'
                label='Home'
              ></SidebarElementRegular>
              <SidebarElementRegular
                path='M7 20L11 4M13 20L17 4M6 9H20M4 15H18'
                label='Explore'
              ></SidebarElementRegular>
              <SidebarElementRegular
                path='M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9'
                label='Notifications'
              ></SidebarElementRegular>
              <SidebarElementRegular
                path='M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z'
                label='Messages'
              ></SidebarElementRegular>
              <SidebarElementRegular
                path='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
                path2='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
                label='My Page'
              ></SidebarElementRegular>
              <SidebarElementRegular
                path='M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
                label='More'
              ></SidebarElementRegular> */}
            </nav>
          </div>
        </SidebarContainer>
      </div>
      <div class='flex flex-col w-0 flex-1'>
        <NavContainer className='z-10 flex flex-shrink-0 bg-white shadow'>
          <div class='flex-1 px-4 flex justify-between'>
            <div class='flex-1 flex'>
              <div class='w-full flex md:ml-0'>
                <div className='flex flex-col justify-center'>
                  <h1 class='text-xl font-semibold text-gray-900'>Home</h1>
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
    <div className='flex overflow-visible bg-gray-100'>
      {/* <div className='hidden md:flex md:flex-shrink-0'> */}
      {/* <div className='flex-col hidden w-64 pb-4 bg-white border-r border-gray-200 md:flex'> */}
      <div className='flex flex-col pb-4 bg-white border-r border-gray-200 w-22'>
        <SidebarContainer>
          <div className='flex flex-col flex-1 h-0'>
            <nav className='flex-1 px-5 bg-white'>
              <SidebarElementMini
                imageUrl='https://i.imgur.com/2mdtBD3.png'
                // label='Grobel'
              ></SidebarElementMini>
              <SidebarElementMini
                path='M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6'
                // label='Home'
              ></SidebarElementMini>
              <SidebarElementMini
                path='M7 20L11 4M13 20L17 4M6 9H20M4 15H18'
                // label='Explore'
              ></SidebarElementMini>
              <SidebarElementMini
                path='M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9'
                // label='Notifications'
              ></SidebarElementMini>
              <SidebarElementMini
                path='M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z'
                // label='Messages'
              ></SidebarElementMini>
              <SidebarElementMini
                path='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
                path2='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
                // label='My Page'
              ></SidebarElementMini>
              <SidebarElementMini
                path='M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
                // label='More'
              ></SidebarElementMini>
            </nav>
          </div>
        </SidebarContainer>
      </div>
      <div class='flex flex-col w-0 flex-1'>
        <NavContainer className='z-10 flex flex-shrink-0 bg-white shadow'>
          <div class='flex-1 px-4 flex justify-between'>
            <div class='flex-1 flex'>
              <div class='w-full flex md:ml-0'>
                <div className='flex flex-col justify-center'>
                  <h1 class='text-xl font-semibold text-gray-900'>Home</h1>
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

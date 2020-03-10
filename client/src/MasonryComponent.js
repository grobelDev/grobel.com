import React, { Fragment } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

let testElements = [
  {
    src:
      'https://cdn.discordapp.com/attachments/623723278879555594/686687261919805480/screenshot.png',
    title: 'Outset Island 10 Hours - Zelda The Wind Waker - YouTube',
    link: 'https://www.youtube.com/watch?v=geWqU2_-gCw'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/623723278879555594/686687236397203549/screenshot.png',
    title: 'Notes from Production Engineering - YouTube',
    link: 'https://www.youtube.com/watch?v=ugkkza3vKbc'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/686688035651321917/screenshot.png',
    title: 'Coronavirus COVID-19 (2019-nCoV)',
    link:
      'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
  },
  {
    src:
      'https://grobel-com-server-zxc6fpw5uq-uc.a.run.app/?url=https://example.com',
    title: 'Example.com from Puppeteer Test',
    link:
      'https://grobel-com-server-zxc6fpw5uq-uc.a.run.app/?url=https://example.com'
  },
  //   {
  //     src:
  //       'https://grobel-com-server-zxc6fpw5uq-uc.a.run.app/?url=https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
  //     title: 'gisanddata - Puppeteer Test',
  //     link:
  //       'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
  //   },
  {
    src:
      'https://grobel-com-server-zxc6fpw5uq-uc.a.run.app/?url=https://dribbble.com/shots/popular',
    title: 'dribble.com/shots/popular - Puppeteer Test',
    link: 'https://dribbble.com/shots/popular'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/682268153799114868/screenshot.png',
    title: 'Coronavirus COVID-19 (2019-nCoV)',
    link:
      'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/684210280728625228/screenshot.png'
  },
  {
    src:
      'https://cdn.dribbble.com/users/758070/screenshots/10496626/media/d4d4835b70fff9c34f803eb6025dc679.png'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/686679237150900329/screenshot.png'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/686679196361031693/screenshot.png'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/684210280728625228/screenshot.png'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/686679160541937734/screenshot.png'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/686679129906872331/screenshot.png'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/686679020150325309/screenshot.png'
  }
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1
};

export default function MasonryComponent() {
  return (
    <div className='bg-gray-200'>
      <div className='px-3'>
        <TestDiv>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {/* {testElements.map(element => {
              return <img className='py-2' src={`${element.src}`}></img>;
            })} */}
            {testElements.map(element => {
              return (
                <MasonryCard
                  //   className='py-2'
                  imgSource={element.src}
                  title={element.title}
                  link={element.link}
                ></MasonryCard>
              );
            })}
          </Masonry>
        </TestDiv>
      </div>
    </div>
  );
}

function MasonryCard({ imgSource, title, link }) {
  if (title) {
    let temporaryTags = title.split(' ');
    console.log(temporaryTags);
  }

  return (
    <div className='py-2'>
      <div class='rounded overflow-hidden shadow-lg bg-white'>
        <img class='w-full' src={imgSource} alt=''></img>
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2'>
            {title ? <div>{title}</div> : 'The Coldest Sunset'}
          </div>
          <p class='text-gray-700 text-base'>
            {link ? (
              //   <div>{link}</div>
              <a href={link} target='_blank'>
                {link}
              </a>
            ) : (
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </div>
            )}
          </p>
        </div>
        {/* <div class='px-6 py-4'>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #photography
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #travel
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #winter
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
            ...
          </span>
        </div> */}
        <div class='px-6 py-4'>
          {title
            ? title.split(' ').map(tag => {
                return (
                  <Fragment>
                    {filterTags(tag) ? (
                      <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                        {tag}
                      </span>
                    ) : null}
                  </Fragment>
                );
              })
            : null}
          {/* <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #photography
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #travel
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #winter
          </span> */}
          {/* <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
            ...
          </span> */}
        </div>
      </div>
    </div>
  );
}

function filterTags(tag) {
  let excludedTags = ['-', 'the', 'from', 'and'];
  if (
    excludedTags.find(
      excludedTag => tag.toLowerCase() === excludedTag.toLowerCase()
    )
  ) {
    return null;
  }
  return tag;
}

const TestDiv = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
  word-wrap: break-word;
`;

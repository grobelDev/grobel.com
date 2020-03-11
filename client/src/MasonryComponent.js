import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import _ from 'lodash';

let testElements = [
  {
    src:
      'https://i.pinimg.com/564x/34/ed/d8/34edd873287c1446bbd81ac807d7f730.jpg',
    title: 'Zelda Example Vertical Picture',
    link: 'https://www.pinterest.com/pin/3237030970809364/'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/623723278879555594/686687261919805480/screenshot.png',
    title: 'Outset Island 10 Hours - Zelda The Wind Waker - YouTube',
    link: 'https://www.youtube.com/watch?v=geWqU2_-gCw'
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/636565266356240394/686765534364303400/screenshot.png',
    title:
      'The Wind Waker HD - Episode 1 - Welcome to Outset Island! - YouTube',
    link: 'https://www.youtube.com/watch?v=2TRE55puZoc'
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
  }
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1
};

export default function MasonryComponent() {
  const [tagArray, setTagArray] = useState([]);
  console.log('tagarray:', tagArray);

  return (
    <div className='bg-gray-200'>
      <div className='px-5 py-4'>
        <TestDiv>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {/* {testElements.map(element => {
              return <img className='py-2' src={`${element.src}`}></img>;
            })} */}
            {testElements
              .filter(element => {
                if (tagArray.length !== 0 && element.title) {
                  //   console.log(element.title);
                  //   if(element.title.split(' '))
                  let titleArray = element.title.split(' ');
                  //   let titleArray2 = titleArray.filter(element => )

                  if (isSubset(tagArray, titleArray)) {
                    return element;
                  }
                } else {
                  return element;
                }
              })
              .map(element => {
                return (
                  <MasonryCard
                    //   className='py-2'
                    imgSource={element.src}
                    title={element.title}
                    link={element.link}
                    setTagArray={setTagArray}
                    tagArray={tagArray}
                  ></MasonryCard>
                );
              })}
          </Masonry>
        </TestDiv>
      </div>
    </div>
  );
}

function isSubset(source, target) {
  return !_.difference(_.flatten(source), _.flatten(target)).length;
}

function filterMasonryCard(element) {
  return (
    <div>
      <div>sdfsd</div>
    </div>
  );
}

function MasonryCard({ imgSource, title, link, setTagArray, tagArray }) {
  if (title) {
    let temporaryTags = title.split(' ');
    // console.log(temporaryTags);
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
                      <span
                        className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                        onClick={() => setTagArray([...tagArray, tag])}
                      >
                        {`${tag}`}
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
  let excludedTags = ['-', 'the', 'from', 'and', 'to'];
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
    // flex-grow: 1;
    margin-left: -20px; /* gutter size offset */
    // width: 100%;
  }
  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }
  word-wrap: break-word;
  flex-basis: 0;
`;

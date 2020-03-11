import React, { Fragment } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import MasonryComponent from './MasonryComponent';

export default function UserPage() {
  return (
    <Fragment>
      {/* <div className='flex'> */}
      <Sidebar></Sidebar>
      {/* <ContainerTest>
          <MasonryComponent></MasonryComponent>
        </ContainerTest>
      </div> */}
    </Fragment>
  );
}

const ContainerTest = styled.div`
  // flex-shrink: 1;
  // flex-basis: 0;
  display: inline-flex;
`;

const Container = styled.div`
  // background-color: #999999;
  // padding: 20
`;

const TestImage = styled.img`
  object-fit: contain;
`;

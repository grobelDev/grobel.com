import React, { Fragment } from 'react';
import styled from 'styled-components';

export default function UserPage() {
  return (
    <Fragment>
      <div>Wireframe /:user</div>
      <Container className='bg-gray-300 p-4'>
        <div className='bg-white border rounded-lg overflow-hidden'>
          <div className='relative p-4'>
            <TestImage src='https://cdn.discordapp.com/attachments/636565266356240394/684210280728625228/screenshot.png'></TestImage>
          </div>
        </div>
        <div className='bg-white border rounded-lg overflow-hidden'>
          <div className='relative p-4'>
            <TestImage src='https://cdn.dribbble.com/users/758070/screenshots/10496626/media/d4d4835b70fff9c34f803eb6025dc679.png'></TestImage>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

const Container = styled.div`
  // background-color: #999999;
  // padding: 20
`;

const TestImage = styled.img`
  object-fit: contain;
`;

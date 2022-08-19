import React from 'react';
import Card from 'components/Card';

export default function PostsGrid() {
  return (
    <div className='grid-cols-1 sm:grid-cols-3'>
      <Card
        imageAlt='Alt'
        imageSrc='/images/cat1.jpeg'
        text='a long card text'
        title='Card1'
        tags={['#tag1', '#tag1', '#tag1']}
      />
      <Card
        imageAlt='Alt'
        imageSrc='/images/cat2.jpeg'
        text='a long card text'
        title='Card1'
        tags={['#tag1', '#tag1', '#tag1']}
      />
      <Card
        imageAlt='Alt'
        imageSrc='/images/cat3.jpeg'
        text='a long card text'
        title='Card1'
        tags={['#tag1', '#tag1', '#tag1', '#tag1', '#tag1']}
      />
    </div>
  );
}

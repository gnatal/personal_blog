import React from 'react';
import SearchBar from './SearchBar';
import PostsGrid from './PostsGrid';

export default function Posts() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <PostsGrid />
      <div>Another Post</div>
    </>
  );
}

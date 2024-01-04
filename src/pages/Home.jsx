import React, { useEffect, useState } from 'react'
import { BlogList } from '../components/BlogList'
import useFetch from '../hooks/useFetch';

export const Home = () => {
    const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      {isPending && <div>Loading ...</div>}
    </div>
  )
}


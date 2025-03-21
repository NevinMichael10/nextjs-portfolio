'use client'

import { SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { posts } from '@/lib/certificates'
import PostCards from './post-cards'
import { Input } from './ui/input'
import { Label } from './ui/label'

const FilteredPosts = () => {
  const [searchValue, setSearchValue] = useState('')

  // Filter posts based on search input
const filteredPosts = posts.filter((post) =>
  post.certificateName.toLowerCase().includes(searchValue.toLowerCase()) ||
  post.description.toLowerCase().includes(searchValue.toLowerCase()) ||
  post.issuer.toLowerCase().includes(searchValue.toLowerCase())
);

  return (
    <>
      <div className='relative mb-8'>
        <Input
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search for a certificate...'
          aria-label='Search for a certificate'
          className='w-full pl-12'
          id='search'
        />
        <Label htmlFor='search'>
          <SearchIcon className='absolute left-4 top-1/2 size-5 -translate-y-1/2' />
        </Label>
      </div>

      {filteredPosts.length === 0 ? (
        <div className='my-24 text-center text-xl'>No certificate found.</div>
      ) : (
        <PostCards posts={filteredPosts} />
      )}
    </>
  )
}

export default FilteredPosts

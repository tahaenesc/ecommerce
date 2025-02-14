import React from 'react'
import { Input } from '../ui/input'

export default function Search() {
    const handleSearch = async (formData: FormData) => {
        "use server"
        const searchQuery = formData.get('search');
        console.log(searchQuery);
    }
  return (
    <form action={handleSearch}>
        <Input 
        type='search'
        name='search'
        placeholder='Search...'
        className='w-[300px]'
        />
    </form>
  )
}
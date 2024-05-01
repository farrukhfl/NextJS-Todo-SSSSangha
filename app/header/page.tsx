import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-blue-500 p-5'>
        <Link href={'/'} className='bg-white text-blue-400 px-2 py-1 rounded-lg'>
            Home
        </Link>
    </header>
  )
}

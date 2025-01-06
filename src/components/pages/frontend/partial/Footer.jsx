import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='bg-secondary'>
      <div className="container">
        <div className='p-8 flex items-center justify-between'>
          <ul className='flex gap-5'>
            <li className='text-white hover:text-light'><Link><Facebook /></Link></li>
            <li className='text-white hover:text-light'><Link><Twitter /></Link></li>
            <li className='text-white hover:text-light'><Link><Instagram /></Link></li>
            <li className='text-white hover:text-light'><Link><Youtube /></Link></li>
            <li className='text-white hover:text-light'><Link><Mail /></Link></li>
          </ul>
          <p className='text-white'>4 National Highway Banay-banay Cabuyao, Laguna 4025</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
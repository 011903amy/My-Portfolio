import { imgPath } from '@/components/helpers/functions-general';
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-400 h-screen flex items-center">
        <div className="container flex items-center">
          <img src={`${imgPath}/hero-image.png`} alt="" />
          <div className="flex-col items-center">
            <h1 className="-mt-[7rem] mb-[5rem]">Amy Valencia</h1>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              dolorum, quasi deserunt praesentium soluta asperiores rerum alias
              maiores sed odit nisi pariatur ducimus eaque dicta quas atque.
              Cumque natus voluptas, dolores nostrum sequi molestias
              voluptatibus, sapiente temporibus consectetur quos dignissimos ab
              possimus ea laboriosam tempora quaerat molestiae praesentium, eius
              cupiditate.
            </p>

            <button className="underline text-3xl hover:text-light">
              View Capstone Project
            </button>
          </div>
        </div>
        
      </div>
      <ul className='flex left-[16rem] absolute top-[53rem] gap-5 text-secondary '>
          <li className='hover:text-light'><Link to="/"><Facebook  /></Link></li>
          <li className='hover:text-light'><Link to="/"><Twitter/></Link></li>
          <li className='hover:text-light'><Link to="/"><Instagram/></Link></li>
          <li className='hover:text-light'><Link to="/"><Mail/></Link></li>
        </ul>
    </>
  );
}

export default HeroBanner
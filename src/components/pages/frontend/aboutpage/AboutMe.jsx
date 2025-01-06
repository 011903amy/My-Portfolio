import { imgPath } from '@/components/helpers/functions-general';
import { Calendar, Mail, MapPin, School } from 'lucide-react';
import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-400 h-screen">
        <div className="container">
          <div className="flex items-center justify-center gap-[10rem] py-[8rem]">
            <img src={`${imgPath}/Profile.png`} alt="" />

            <div className=" flex flex-col gap-5">
              <div className="flex gap-20 items-center">
                <Calendar size={28} />
                <h5 className="">January 19, 2003</h5>
              </div>
              <div className="flex gap-20 items-center">
                <MapPin size={28} />
                <h5 className="">
                  4 National Highway Banay-banay, Cabuyao, Laguna 4025
                </h5>
              </div>
              <div className="flex gap-20 items-center">
                <Mail size={28} />
                <h5 className="">amy77849@gmail.com</h5>
              </div>
              <div className="flex gap-20 items-center">
                <School size={28} />
                <h5 className="">Laguna State Polytechnic University</h5>
              </div>
            </div>
          </div>
          <p className="text-center  border-gray-300 border-b-2 leading-7 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            sed non enim iste quasi autem alias officia error pariatur? Magnam
            quae laudantium reprehenderit natus id eum amet corrupti molestiae
            quaerat adipisci autem ipsa eligendi quod quos dicta dolor
            consequatur rem placeat dolore, corporis obcaecati praesentium?
            Eaque cum veniam, voluptate quod officiis, quam molestiae illum
            perspiciatis esse minima id. In dolorum, qui alias eligendi esse
            quaerat officiis odio impedit et quasi quas minima eos doloremque
            deserunt? Delectus excepturi recusandae a unde ullam quibusdam,
            vero, non sequi voluptate maiores nobis enim quidem obcaecati
            assumenda minima totam facere, veniam natus debitis. Modi, alias!
          </p>

          <div className="px-[8rem]">
            <h5 className='mt-10'>Certificate</h5>
            <div className="flex justify-between">
              <p>
                Unlocking Capstone Projects: Crafting Captions Titles, Agile
                Scrum Methodology and Testing Protocols
              </p>
              <p> [College of Computer Studies - 2024]</p>
            </div>
            <div className="flex justify-between">
              <p>
                Exploring the Frontiers if Information Technology and Computer
                Science
              </p>
              <p> [College of Computer Studies - 2023]</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe
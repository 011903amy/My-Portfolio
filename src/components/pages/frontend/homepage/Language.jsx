import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'

const Language = () => {
  return (
    <>
      <div className="bg-primary h-[40rem]">
        <div className="container">
          <div className="wrapper flex gap-10 w-full p-10">
            <div className="card flex flex-col justify-center items-center">
              <img src={`${imgPath}/three.png`} className="mb-10" alt="" />
              <h3 className="text-secondary">Java</h3>
              <p className="max-w-[50rem] text-justify mb-5 text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                temporibus veritatis expedita, reiciendis dicta est repellat
                aliquid libero delectus? In veritatis minus aspernatur ratione
                perspiciatis laudantium eaque, non quae saepe voluptatibus
                obcaecati odit delectus corrupti sed sequi recusandae nostrum ex
                quidem ullam, cupiditate provident. Ipsum, saepe autem quis quia
                modi officiis eveniet fuga nisi quos laudantium! Magni
                voluptates nemo ea saepe odio quos dolore deleniti dolores
                obcaecati pariatur iusto ducimus iste voluptatum, nihil iure
                optio facilis at adipisci sequi quibusdam accusamus ad quasi
                soluta assumenda? Delectus, laudantium facilis! Quia
                voluptatibus reiciendis a facere optio ad temporibus cupiditate,
                officiis itaque sequi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sed similique velit molestiae, tempore et vero
                veritatis magnam sit, harum quaerat officia aperiam mollitia
                asperiores libero dolore beatae recusandae nemo officiis ipsa.
                Aliquam voluptas incidunt voluptatibus quia architecto optio
                praesentium nisi!
              </p>
              <button className="bg-light p-2 rounded-full hover:bg-secondary hover:text-white">
                Send Message
              </button>
            </div>
            <div className="card flex flex-col justify-center items-center">
              <img src={`${imgPath}/two.png`} className="mb-10" alt="" />
              <h3 className="text-secondary">C#</h3>
              <p className="max-w-[50rem] text-justify mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                temporibus veritatis expedita, reiciendis dicta est repellat
                aliquid libero delectus? In veritatis minus aspernatur ratione
                perspiciatis laudantium eaque, non quae saepe voluptatibus
                obcaecati odit delectus corrupti sed sequi recusandae nostrum ex
                quidem ullam, cupiditate provident. Ipsum, saepe autem quis quia
                modi officiis eveniet fuga nisi quos laudantium! Magni
                voluptates nemo ea saepe odio quos dolore deleniti dolores
                obcaecati pariatur iusto ducimus iste voluptatum, nihil iure
                optio facilis at adipisci sequi quibusdam accusamus ad quasi
                soluta assumenda? Delectus, laudantium facilis! Quia
                voluptatibus reiciendis a facere optio ad temporibus cupiditate,
                officiis itaque sequi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sed similique velit molestiae, tempore et vero
                veritatis magnam sit, harum quaerat officia aperiam mollitia
                asperiores libero dolore beatae recusandae nemo officiis ipsa.
                Aliquam voluptas incidunt voluptatibus quia architecto optio
                praesentium nisi!
              </p>
              <button className="bg-light p-2 rounded-full hover:bg-secondary hover:text-white">
                Send Message
              </button>
            </div>
            <div className="card flex flex-col justify-center items-center">
              <img src={`${imgPath}/one.png`} className="mb-10" alt="" />
              <h3 className="text-secondary">Python</h3>
              <p className="max-w-[50rem] text-justify mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                temporibus veritatis expedita, reiciendis dicta est repellat
                aliquid libero delectus? In veritatis minus aspernatur ratione
                perspiciatis laudantium eaque, non quae saepe voluptatibus
                obcaecati odit delectus corrupti sed sequi recusandae nostrum ex
                quidem ullam, cupiditate provident. Ipsum, saepe autem quis quia
                modi officiis eveniet fuga nisi quos laudantium! Magni
                voluptates nemo ea saepe odio quos dolore deleniti dolores
                obcaecati pariatur iusto ducimus iste voluptatum, nihil iure
                optio facilis at adipisci sequi quibusdam accusamus ad quasi
                soluta assumenda? Delectus, laudantium facilis! Quia
                voluptatibus reiciendis a facere optio ad temporibus cupiditate,
                officiis itaque sequi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sed similique velit molestiae, tempore et vero
                veritatis magnam sit, harum quaerat officia aperiam mollitia
                asperiores libero dolore beatae recusandae nemo officiis ipsa.
                Aliquam voluptas incidunt voluptatibus quia architecto optio
                praesentium nisi!
              </p>
              <button className="bg-light p-2 rounded-full hover:bg-secondary hover:text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Language
import React from 'react'
import Header from '../partial/Header'
import CTA from '../homepage/CTA'
import Footer from '../partial/Footer'
import { imgPath } from '@/components/helpers/functions-general'

const SkillsPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-400 h-screen"></div>
      <div className="bg-secondary h-screen">
        <div className="container">
          <div className="p-10">
            <div className="flex  gap-5">
              <h1 className="text-white">Programming</h1>
              <h1 className="text-primary">Language</h1>
            </div>
          </div>

          <div className="flex gap-10 p-10">
            <div className="w-full max-w-[50rem]">
              <p className="text-justify text-white leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eaque necessitatibus quia iusto officia modi at sed cumque
                possimus ducimus repudiandae fuga, ad nisi neque error. Quisquam
                vitae, obcaecati suscipit cumque molestias adipisci quidem.
                Quasi veniam id consequuntur, est possimus alias molestias
                obcaecati, placeat, et natus facilis cum corporis. Nostrum
                voluptatum magnam provident asperiores sed nulla ullam veniam ab
                soluta cum mollitia rerum ratione atque alias, sequi ex! Ad
                veniam ut totam minima suscipit doloribus corrupti delectus fuga
                inventore vitae repellat laudantium quae recusandae distinctio
                magnam dicta, voluptas ipsam. Nesciunt dolorum aliquid
                reprehenderit quod doloremque quibusdam rem vel ut dicta. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
                nostrum facilis, recusandae quod, illum provident maxime
                deserunt quae eius aperiam eligendi suscipit, quam ipsa? Sed,
                ea. Distinctio sapiente enim officia laboriosam atque, magni aut
                hic cupiditate rerum corrupti, reprehenderit laborum unde
                nesciunt nobis dolor! Maiores exercitationem voluptate libero
                non numquam?
              </p>

              <p className="text-justify text-white leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore saepe necessitatibus, optio, pariatur amet, voluptatibus
                ab illo sunt ducimus quis exercitationem ad eveniet laboriosam
                quia corrupti? Repellat soluta harum et maiores molestias
                ducimus sit fuga porro? Perspiciatis sint amet natus, totam
                illum porro voluptates harum alias numquam consequatur, corrupti
                expedita. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Molestias nobis, commodi dolorem culpa alias eveniet
                pariatur numquam id ad, deleniti sequi, magni voluptate aperiam
                vel. Sit eaque nam, facere, expedita exercitationem cupiditate
                omnis officia laboriosam voluptate quas porro reiciendis
                voluptatem earum ex quaerat? Fuga ipsam quibusdam nemo autem
                maxime debitis.
              </p>

              <p className="text-justify text-white leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                blanditiis dolorum, aliquam voluptas natus suscipit nam ducimus
                nulla iure! Saepe. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Omnis debitis, id molestiae provident sed
                perspiciatis eaque repellat error quos itaque tenetur! Quisquam
                eveniet facilis perferendis, accusamus commodi magnam
                consectetur? Laboriosam esse alias assumenda veniam voluptas
                voluptatem! Perspiciatis fugiat molestiae dolor.
              </p>
            </div>

            <img
              src={`${imgPath}/skills1.png`}
              className="object-contain w-[25rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-primary h-screen">
        <div className="container">
          <div className="p-10">
            <div className="absolute right-[39rem]">
              <h1 className="text-secondary">Web Development</h1>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-10 p-10">
            <div className="w-full max-w-[50rem]">
              <p className="text-justify text-secondary leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eaque necessitatibus quia iusto officia modi at sed cumque
                possimus ducimus repudiandae fuga, ad nisi neque error. Quisquam
                vitae, obcaecati suscipit cumque molestias adipisci quidem.
                Quasi veniam id consequuntur, est possimus alias molestias
                obcaecati, placeat, et natus facilis cum corporis. Nostrum
                voluptatum magnam provident asperiores sed nulla ullam veniam ab
                soluta cum mollitia rerum ratione atque alias, sequi ex! Ad
                veniam ut totam minima suscipit doloribus corrupti delectus fuga
                inventore vitae repellat laudantium quae recusandae distinctio
                magnam dicta, voluptas ipsam. Nesciunt dolorum aliquid
                reprehenderit quod doloremque quibusdam rem vel ut dicta. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
                nostrum facilis, recusandae quod, illum provident maxime
                deserunt quae eius aperiam eligendi suscipit, quam ipsa? Sed,
                ea. Distinctio sapiente enim officia laboriosam atque, magni aut
                hic cupiditate rerum corrupti, reprehenderit laborum unde
                nesciunt nobis dolor! Maiores exercitationem voluptate libero
                non numquam?
              </p>

              <p className="text-justify text-secondary leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore saepe necessitatibus, optio, pariatur amet, voluptatibus
                ab illo sunt ducimus quis exercitationem ad eveniet laboriosam
                quia corrupti? Repellat soluta harum et maiores molestias
                ducimus sit fuga porro? Perspiciatis sint amet natus, totam
                illum porro voluptates harum alias numquam consequatur, corrupti
                expedita. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Molestias nobis, commodi dolorem culpa alias eveniet
                pariatur numquam id ad, deleniti sequi, magni voluptate aperiam
                vel. Sit eaque nam, facere, expedita exercitationem cupiditate
                omnis officia laboriosam voluptate quas porro reiciendis
                voluptatem earum ex quaerat? Fuga ipsam quibusdam nemo autem
                maxime debitis.
              </p>

              <p className="text-justify text-secondary leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                blanditiis dolorum, aliquam voluptas natus suscipit nam ducimus
                nulla iure! Saepe. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Omnis debitis, id molestiae provident sed
                perspiciatis eaque repellat error quos itaque tenetur! Quisquam
                eveniet facilis perferendis, accusamus commodi magnam
                consectetur? Laboriosam esse alias assumenda veniam voluptas
                voluptatem! Perspiciatis fugiat molestiae dolor.
              </p>
            </div>

            <img
              src={`${imgPath}/skills1.png`}
              className="object-contain w-[25rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-400 h-screen">
        <div className="container">
          <div className="p-10">
            <div className="flex  gap-5">
              <h1 className="text-black">Web</h1>
              <h1 className="text-primary">Designing</h1>
            </div>
          </div>

          <div className="flex gap-10 p-10">
            <div className="w-full max-w-[50rem]">
              <p className="text-justify text-black leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eaque necessitatibus quia iusto officia modi at sed cumque
                possimus ducimus repudiandae fuga, ad nisi neque error. Quisquam
                vitae, obcaecati suscipit cumque molestias adipisci quidem.
                Quasi veniam id consequuntur, est possimus alias molestias
                obcaecati, placeat, et natus facilis cum corporis. Nostrum
                voluptatum magnam provident asperiores sed nulla ullam veniam ab
                soluta cum mollitia rerum ratione atque alias, sequi ex! Ad
                veniam ut totam minima suscipit doloribus corrupti delectus fuga
                inventore vitae repellat laudantium quae recusandae distinctio
                magnam dicta, voluptas ipsam. Nesciunt dolorum aliquid
                reprehenderit quod doloremque quibusdam rem vel ut dicta. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
                nostrum facilis, recusandae quod, illum provident maxime
                deserunt quae eius aperiam eligendi suscipit, quam ipsa? Sed,
                ea. Distinctio sapiente enim officia laboriosam atque, magni aut
                hic cupiditate rerum corrupti, reprehenderit laborum unde
                nesciunt nobis dolor! Maiores exercitationem voluptate libero
                non numquam?
              </p>

              <p className="text-justify text-black leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore saepe necessitatibus, optio, pariatur amet, voluptatibus
                ab illo sunt ducimus quis exercitationem ad eveniet laboriosam
                quia corrupti? Repellat soluta harum et maiores molestias
                ducimus sit fuga porro? Perspiciatis sint amet natus, totam
                illum porro voluptates harum alias numquam consequatur, corrupti
                expedita. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Molestias nobis, commodi dolorem culpa alias eveniet
                pariatur numquam id ad, deleniti sequi, magni voluptate aperiam
                vel. Sit eaque nam, facere, expedita exercitationem cupiditate
                omnis officia laboriosam voluptate quas porro reiciendis
                voluptatem earum ex quaerat? Fuga ipsam quibusdam nemo autem
                maxime debitis.
              </p>

              <p className="text-justify text-black leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                blanditiis dolorum, aliquam voluptas natus suscipit nam ducimus
                nulla iure! Saepe. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Omnis debitis, id molestiae provident sed
                perspiciatis eaque repellat error quos itaque tenetur! Quisquam
                eveniet facilis perferendis, accusamus commodi magnam
                consectetur? Laboriosam esse alias assumenda veniam voluptas
                voluptatem! Perspiciatis fugiat molestiae dolor.
              </p>
            </div>

            <img
              src={`${imgPath}/skills1.png`}
              className="object-contain w-[25rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default SkillsPage
import React from 'react'
import ImageCard from '@/components/ImageCard';


function Gallary() {
  return (
    <div className="relative">
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallary
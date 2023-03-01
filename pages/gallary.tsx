import React from 'react'
import ImageCard from '@/components/ImageCard';
import Image from 'next/image';


function Gallary() {
  return (
    <div className="relative">
      <section className="body-font">
        <div className="container mx-auto px-5">
          <div className="flex w-full max-w-screen-xl items-center justify-between">
            {/* Text */}
            <div className="w-1/2">
              <div className="text-5xl font-medium">Gallary</div>
              <div className="my-10 text-lg text-gray-600">
                We have a nice collection of photos of various events organised
                by the ait sports club throughout the year.
              </div>
            </div>
            {/* Image */}
            <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
              <Image
                className=""
                src="/gallarypage.png"
                width={400}
                height={400}
                alt="Team"
              />
            </div>
          </div>
          <div className="-m-4 flex animate-[slide-down-fade_0.9s_ease-in-out] flex-wrap">
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
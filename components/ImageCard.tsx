import React from 'react'

function ImageCard() {
  return (
    <>
      <div className="p-4 sm:w-1/2 lg:w-1/3 rounded">
        <div className="relative flex">
          <img
            alt="gallery"
            className="absolute inset-0 rounded h-full w-full object-cover object-center"
            src="https://dummyimage.com/600x360"
          />
          <div className="invisible relative z-10 w-full px-8  py-10 opacity-0 hover:opacity-100">
            <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-indigo-400">
              THE SUBTITLE
            </h2>
            <h1 className="title-font mb-3 text-lg font-medium text-white">
              Shooting Stars
            </h1>
            <p className="leading-relaxed text-white">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard
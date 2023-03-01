import React from 'react'
import ContactLink from '@/components/ContactLink';
import Image from 'next/image';

function Contact() {
  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center">
        <div className="flex w-full px-5 max-w-screen-xl flex-col items-center justify-between md:flex-row lg:flex-row">
          {/* Text */}
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="text-5xl font-medium">Get In Touch</div>
            <div className="my-10 text-lg text-gray-600">
              We take our commitment to students seriously. We are always here,
              If you have any query feel free to mail us anytime.
            </div>
          </div>
          {/* Image */}
          <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
            <Image
              className=""
              src="/contact.png"
              width={400}
              height={400}
              alt="contact"
            />
          </div>
        </div>

        <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0"></div>
      </div>
    </>
  );
}

export default Contact
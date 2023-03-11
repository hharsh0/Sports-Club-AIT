import React from 'react'
import TeamCard from '@/components/TeamCard';
import Image from 'next/image';
import { RoughNotation } from "react-rough-notation";


function Team() {
  return (
    <div className="relative my-4 flex w-screen flex-col items-center">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between px-5 md:flex-row lg:flex-row">
        {/* Text */}
        <div className="w-full text-center md:w-1/2 md:text-start lg:w-1/2 lg:text-start">
          <div className="text-5xl font-medium">Meet the sports club Crew</div>
          <div className="my-10 text-lg text-gray-600">
            More than a community we all are a family, this bond will last
            forever and we will always be there for you whenever you will need
            our help.
          </div>
        </div>
        {/* Image */}
        <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
          <Image
            className=""
            src="/teampage.png"
            width={400}
            height={400}
            alt="Team"
          />
        </div>
      </div>

      <div>
        <ul className="flex w-full border-b border-gray-100 text-lg">
          <li className="cursor-pointer">
            <div className="relative block p-4">
              <span
                className={`absolute inset-x-0 -bottom-px h-px w-full bg-pink-600`}
              />
              <div className="flex items-center justify-center gap-4">
                <Image src="/group1.png" height={25} width={25} alt="icon" />
                <span className="text-lg font-medium text-gray-900">
                  {" "}
                  Core Team{" "}
                </span>
              </div>
            </div>
          </li>
          <li className="cursor-pointer">
            <div className="relative block p-4">
              <span
                className={`
                absolute inset-x-0 -bottom-px h-px w-full`}
              />
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/individual.png"
                  height={25}
                  width={25}
                  alt="icon"
                />
                <span className="text-lg font-medium text-gray-900">
                  {" "}
                  Event Heads{" "}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image alt="contact" src="/team/core/arajeet.jpeg" width={200} height={200} />
            </>
          }
        />
        <TeamCard
          title="Team member"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </>
          }
        />
        <TeamCard
          title="Team member"
          description="This is the discription of team member"
          large={false}
          demo={
            <>
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </>
          }
        />
        <TeamCard
          title="Team member"
          description="This is the discription of team member"
          large={false}
          demo={
            <>
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </>
          }
        />
        <TeamCard
          title="Team member"
          description="This is the discription of team member"
          large={false}
          demo={
            <>
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </>
          }
        />
        <TeamCard
          title="Team member"
          description="This is the discription of team member"
          large={false}
          demo={
            <>
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </>
          }
        />
      </div>
    </div>
  );
}

export default Team
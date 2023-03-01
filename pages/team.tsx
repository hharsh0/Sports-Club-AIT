import React from 'react'
import TeamCard from '@/components/TeamCard';
import Image from 'next/image';
import { RoughNotation } from "react-rough-notation";


function Team() {
  return (
    <div className="relative my-4 flex w-screen flex-col items-center">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between md:flex-row lg:flex-row px-5">
        {/* Text */}
        <div className="w-full md:w-1/2 lg:w-1/2">
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

      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
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
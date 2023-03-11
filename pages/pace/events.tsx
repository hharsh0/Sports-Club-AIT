import React,{useState} from 'react'
import Image from 'next/image';
import TeamEvents from '@/components/pace/TeamEvents';
import IndividualEvents from '@/components/pace/IndividualEvents';


function Events() {
  const [isTeamEvent, setIsTeamEvent] = useState(true)
  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-between px-5 md:flex-row lg:flex-row">
          {/* Text */}
          <div className="w-full text-center md:w-1/2 md:text-start lg:w-1/2 lg:text-start">
            <div className="text-5xl font-medium">Pace events</div>
            <div className="my-10 text-lg text-gray-600">
              List of all events that is going to be held in PACE 2023.
            </div>
          </div>
          {/* Image */}
          <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
            <Image
              className=""
              src="/pace/events.png"
              width={400}
              height={400}
              alt="contact"
            />
          </div>
        </div>
        {/* Tabs */}
        <div>
          <ul className="flex w-full border-b border-gray-100 text-lg">
            <li onClick={() => setIsTeamEvent(true)} className="cursor-pointer">
              <div className="relative block p-4">
                <span
                  className={`absolute inset-x-0 -bottom-px h-px w-full ${
                    isTeamEvent && "bg-pink-600"
                  }`}
                />
                <div className="flex items-center justify-center gap-4">
                  <Image src="/group1.png" height={25} width={25} alt="icon" />
                  <span className="text-lg font-medium text-gray-900">
                    {" "}
                    Team Events{" "}
                  </span>
                </div>
              </div>
            </li>
            <li onClick={() => setIsTeamEvent(false)} className="cursor-pointer">
              <div className="relative block p-4">
                <span className={`${!isTeamEvent && 'bg-pink-600'} absolute inset-x-0 -bottom-px h-px w-full`} />
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/individual.png"
                    height={25}
                    width={25}
                    alt="icon"
                  />
                  <span className="text-lg font-medium text-gray-900">
                    {" "}
                    Individual Events{" "}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Cards */}
        {isTeamEvent ? <TeamEvents /> : <IndividualEvents />}
      </div>
    </>
  );
}

export default Events
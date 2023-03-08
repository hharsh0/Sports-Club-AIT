import React from 'react'
import Image from 'next/image';
import EventsCard from '@/components/EventCard';

function Events() {
  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-between px-5 md:flex-row lg:flex-row">
          {/* Text */}
          <div className="w-full text-center md:w-1/2 md:text-start lg:w-1/2 lg:text-start">
            <div className="text-5xl font-medium">Pace events</div>
            <div className="my-10 text-lg text-gray-600">
              List of all events that is going to be help in PACE 2023
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

        <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          <EventsCard
            title="Table tennis"
            description="This is the discription of event"
            demo={
              <>
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
              </>
            }
            link="register/table-tennis"
          />
          <EventsCard
            title="Football"
            description="This is the discription of event"
            demo={
              <>
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
              </>
            }
            link="register/football"
          />
          <EventsCard
            title="Basketball"
            description="This is the discription of event"
            demo={
              <>
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
              </>
            }
            link="register/basketball"
          />
          <EventsCard
            title="Badminton"
            description="This is the discription of event"
            demo={
              <>
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
              </>
            }
            link="register/badminton"
          />
          <EventsCard
            title="Lawn tennis"
            description="This is the discription of event"
            demo={
              <>
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
              </>
            }
            link="register/lawn-tennis"
          />
          <EventsCard
            title="Volleyball"
            description="This is the discription of event"
            demo={
              <>
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
              </>
            }
            link="register/volleyball"
          />
        </div>
      </div>
    </>
  );
}

export default Events
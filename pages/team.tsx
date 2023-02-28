import React from 'react'
import TeamCard from '@/components/TeamCard';
import Card from '@/components/home/card';

function Team() {
  return (
    <div className="relative flex w-screen flex-col items-center">
      <div className="flex justify-center text-5xl font-medium">Our Team</div>
      <div className='my-10'>
        More than a community we all are a family, this bond will last forever
        and we will always be there for you whenever you will need our help.
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <Card
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
        <Card
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
        <Card
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
        <Card
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
        <Card
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
        <Card
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
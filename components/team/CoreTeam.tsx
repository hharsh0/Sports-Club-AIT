import React from 'react'
import TeamCard from '../TeamCard';
import Image from 'next/image';

function CoreTeam() {
  return (
    <>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Arajeet Pandey"
          description="Sports Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/core/arajeet.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>
    </>
  );
}

export default CoreTeam
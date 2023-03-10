import React from 'react'
import EventsCard from '@/components/EventCard';
import Image from 'next/image';

function TeamEvents() {
  return (
    <>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <EventsCard
          title="Cricket"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-cricket.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/cricket"
        />
        <EventsCard
          title="Volleyball"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-cricket.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/volleyball"
        />
        <EventsCard
          title="Basketball"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-basketball.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/basketball"
        />
        <EventsCard
          title="Football"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-football.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/football"
        />
        <EventsCard
          title="Kabaddi"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-cricket.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/kabaddi"
        />
        <EventsCard
          title="Badminton"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-badminton.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/badminton-team"
        />
        <EventsCard
          title="Squash (Team)"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-cricket.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/squash-team"
        />
        <EventsCard
          title="Lawn Tennis"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-cricket.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/lawn-tennis"
        />
        <EventsCard
          title="Badminton (mix)"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-badminton.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/badminton-mix"
        />
        <EventsCard
          title="Table Tennis (Team)"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-tabletennis.png"
                width={200}
                height={200}
              />
            </>
          }
          link="register/tabletennis-team"
        />
        <EventsCard
          title="Kho-kho"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-cricket.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/kho-kho"
        />
        <EventsCard
          title="Marathon (Mix)"
          description="This is the discription of event"
          demo={
            <>
              <Image
                alt="pace-registration"
                src="/pace/pace-marathon.png"
                width={300}
                height={300}
              />
            </>
          }
          link="register/marathon-mix"
        />
      </div>
    </>
  );
}

export default TeamEvents
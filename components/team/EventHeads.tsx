import React from "react";
import TeamCard from "../TeamCard";
import Image from "next/image";

function EventHeads() {
  return (
    <div className="flex w-full max-w-screen-xl flex-col items-center justify-center">
      <p className="mt-10 w-full max-w-screen-xl text-2xl">Cricket</p>
      <div className="mt-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Avinash kumar"
          description="Cricket Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/cricket/avinash.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Amita"
          description="Cricket Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/cricket/amita.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Football</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Gajendra singh"
          description="Football Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/football/gajender.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Saloni"
          description="Football Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/football/SALONI.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Table Tennis</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Ujjwal singh"
          description="Table Tennis Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Tabletennis/ujwal.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Muskan"
          description="Table Tennis Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Tabletennis/muskan.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Chess</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Abhinav kumar"
          description="Chess Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/chess/abhinav.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Megha"
          description="Chess Secretary"
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

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Lawn Tennis</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Eshaan kapoor"
          description="Lawn Tennis Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Lawntennis/ESHAAN.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Khushi"
          description="Lawn Tennis Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/Lawntennis/KHUSHI.jpg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Volleyball</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Sachin bhambu"
          description="Volleyball Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/volleyball/sachin.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Neha choudhary"
          description="Volleyball Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/volleyball/neha.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Basketball</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Vikrant kumar"
          description="Basketball Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/basketball/vikrant.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Nisha"
          description="Basketball Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/basketball/nisha2.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      <p className="mt-10 w-full max-w-screen-xl text-2xl">Badminton</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Karri akash"
          description="Badminton Secretary"
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
          title="Kamakshi dixit"
          description="Badminton Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/badminton/kamakshi.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>

      {/* <p className="mt-10 w-full max-w-screen-xl text-2xl">Kho Kho</p>
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
      </div> */}
      <p className="mt-10 w-full max-w-screen-xl text-2xl">Squash</p>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <TeamCard
          title="Uttkarsh singh"
          description="Squash Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/squash/utkarsh.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
        <TeamCard
          title="Amruta patil"
          description="Squash Secretary"
          large={false}
          demo={
            <>
              <Image
                alt="contact"
                src="/team/eventHead/squash/amruta.jpeg"
                width={200}
                height={200}
              />
            </>
          }
        />
      </div>
    </div>
  );
}

export default EventHeads;

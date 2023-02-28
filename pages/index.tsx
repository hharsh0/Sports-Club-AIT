import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <motion.div
        className="max-w-7xl my-10 px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href=""
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 invisible  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">Sports Club</p>
        </motion.a>
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Army institute of technology <br /> Sports club
          </Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="group cursor-pointer flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            // href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Pace Registration</p>
          </a>
          <a
            className="flex cursor-pointer max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            // href="https://github.com/steven-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>Check Events</p>
          </a>
        </motion.div>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Pace Registrations Now Open",
    description:
      "Register for pune's biggest sports event. The registrations are now open for the 2023 edition of PACE.",
    large: true,
    demo: (
      <div>
        <Image alt="contact" src="/paceregister.png" width={200} height={200} />
      </div>
    ),
  },
  {
    title: "Contact Us",
    description:
      "We take our commitment to students seriously. We are always here, If you have any query feel free to mail us anytime.",
    demo: (
      <div>
        <Image alt="contact" src="/contact.png" width={200} height={200} />
      </div>
    ),
  },
  {
    title: "Events",
    description:
      "Every year sports club organizes events for introducing students to the world of sports.",
    demo: (
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image alt="contact" src="/events.png" width={200} height={200} />
      </div>
    ),
  },
  {
    title: "Our Team",
    description:
      "We are a group of students who are passionate about sports and want to make sports a part of every student's life.",
    demo: (
      <div>
        <Image alt="contact" src="/team.png" width={200} height={200} />
      </div>
    ),
  },
  {
    title: "Gallary",
    description:
      "We have a nice collection of photos of our events and sports activities.",
    demo: (
      <div>
        <Image alt="contact" src="/gallary.png" width={200} height={200} />
      </div>
    ),
  },
];

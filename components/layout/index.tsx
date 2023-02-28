import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import Footer from "./Footer";
import DropMenu from "./DropMenu";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Sports club</p>
          </Link>

          <div>
            <AnimatePresence>
              {!session && status !== "loading" ? (
                <div className="flex space-x-2">
                  <div className="flex hidden space-x-2 md:block lg:block">
                    <motion.button
                      className="rounded-full border p-1.5 px-4 text-sm transition-all hover:text-black"
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      <Link href="/">Home</Link>
                    </motion.button>
                    <motion.button
                      className="rounded-full border p-1.5 px-4 text-sm transition-all hover:text-black"
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      <Link href="/gallary">Gallary</Link>
                    </motion.button>
                    <motion.button
                      className="rounded-full border p-1.5 px-4 text-sm transition-all hover:text-black"
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      <Link href="team">Our Team</Link>
                    </motion.button>
                    <motion.button
                      className="rounded-full border border-black bg-black p-1.5 px-4 text-sm transition-all text-white hover:text-black"
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      <Link href="contact">Contact Us</Link>
                    </motion.button>
                    {/* <motion.button
                      className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                      onClick={() => setShowSignInModal(true)}
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      Sign In
                    </motion.button> */}
                  </div>

                  <DropMenu />
                </div>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <main className="flex w-screen flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        {/* <p className="text-gray-500">
          A free template by{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/steventey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steven Tey
          </a>
        </p> */}
        <Footer />
      </div>
    </>
  );
}

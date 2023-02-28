import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Fragment, useState } from "react";


function DropMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIcon = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <div className=''>
        <Menu as="div" className="relative z-10 inline-block text-left ">
          <Menu.Button className=" ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:ring-1">
            <motion.button
              className="flex h-8 w-8 items-center justify-center p-2"
              whileTap={{
                scale: 0.5,
              }}
              transition={{ duration: 0.1, ease: "easeIn" }}
              aria-label="Toggle List Menu"
              type="button"
            >
              {isOpen ? (
                <HamburgerMenuIcon className="h-4 w-4" />
              ) : (
                <HamburgerMenuIcon className="h-4 w-4" />
              )}
            </motion.button>
          </Menu.Button>
        </Menu>
      </div>
    </>
  );
}

export default DropMenu;

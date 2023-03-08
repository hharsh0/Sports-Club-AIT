import { useEffect, useState } from "react";
import Steps from "../../../components/Steps";
import Image from "next/image";

function Register() {
  const [count, setCount] = useState(1);

  const scrollintoView = () => {
    const element = document.getElementById("form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollintoView();
  }, []);

  const handleClick = () => {
    if (count > 3) {
      return;
    } else if (count < 3) {
      setCount(count + 1);
    }
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  const handleClickPrev = () => {
    if (count < 1) {
      return;
    } else if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center">
        <div className="my-10 w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] px-5 xl:px-0">
          <section id="form" className="mt-2">
            <Steps count={count} />
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-900"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  className="block text-sm font-medium text-gray-900"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-900"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              {/* 
          <div className="col-span-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By creating an account, you agree to our 
              <a href="#" className="text-gray-700 underline dark:text-gray-200">
                terms and conditions
              </a>
              and
              <a href="#" className="text-gray-700 underline dark:text-gray-200">
                privacy policy{" "}
              </a>
              .
            </p>
          </div> */}

              <div className="col-span-6 flex w-full justify-between">
                <button
                  onClick={handleClickPrev}
                  className={`${
                    count === 1 && "mr-auto cursor-not-allowed opacity-50"
                  } notched inline-block shrink-0 bg-black px-12 py-3 text-sm font-medium text-white transition duration-500 hover:scale-110 focus:outline-none dark:bg-[#2CF0FE] dark:text-black`}
                >
                  {count >= 1 && "Prev"}
                </button>
                <button
                  onClick={handleClick}
                  className="notched inline-block shrink-0 bg-black px-12 py-3 text-sm font-medium text-white transition duration-500 hover:scale-110 focus:outline-none dark:bg-[#2CF0FE] dark:text-black"
                >
                  {count != 3 && "Next"}
                  {count == 3 && "Submit"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Register;

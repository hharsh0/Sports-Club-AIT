import { useState } from 'react'
import Image from 'next/image';



interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    // fetch("/api/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((res) => {
    //   console.log("Response received");
    //   if (res.status === 200) {
    //     console.log("Response succeeded!");
    //   }
    // });
  };

  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-between px-5 md:flex-row lg:flex-row">
          {/* Text */}
          <div className="w-full text-center md:w-1/2 md:text-start lg:w-1/2 lg:text-start">
            <div className="text-5xl font-medium">Get In Touch</div>
            <div className="my-10 text-lg text-gray-600">
              We take our commitment to students seriously. We are always here,
              If you have any query feel free to mail us anytime.
            </div>
          </div>
          {/* Image */}
          <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
            <Image
              className=""
              src="/contact.png"
              width={400}
              height={400}
              alt="contact"
            />
          </div>
        </div>

        <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          <form className='' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none h-40"
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact
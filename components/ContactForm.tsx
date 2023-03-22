import React from 'react'

function ContactForm() {
    const handleSubmit = (event:any) => {
        event.preventDefault();
    }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        id="form"
        className="needs-validation"
      >
        <input
          type="hidden"
        />
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          name="botcheck"
        />
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-gray-100 placeholder:text-gray-800 focus:border-gray-600 focus:ring-4"
            name="name"
          />
          {/* <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
            Please provide your full name.
          </div> */}
        </div>
        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none  ring-gray-100 placeholder:text-gray-800 focus:border-gray-600 focus:ring-4"
          />
          {/* <div className="empty-feedback mt-1 text-sm text-red-400">
            Please provide your email address.
          </div> */}
          {/* <div className="invalid-feedback mt-1 text-sm text-red-400">
            Please provide a valid email address.
          </div> */}
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className="h-36 w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-gray-100 placeholder:text-gray-800 focus:border-gray-600 focus:ring-4"
            defaultValue={""}
          />
          {/* <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
            Please enter your message.
          </div> */}
        </div>
        <button
          className="w-full rounded border-2 border-transparent bg-black lg:px-6  lg:py-3 text-center text-white ring-gray-200 ring-offset-2 transition hover:bg-slate-900 focus-visible:ring-2 md:px-5 md:py-2.5"
          type="submit"
        >
          Send Message
        </button>
        <div id="result" className="mt-3 text-center" />
      </form>
    </>
  );
}

export default ContactForm
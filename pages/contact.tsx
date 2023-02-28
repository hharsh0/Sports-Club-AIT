import React from 'react'
import ContactLink from '@/components/ContactLink';

function Contact() {
  return (
    <>
      <div className="relative max-w-3xl overflow-hidden">
        <h1 className="md:leading-14 text-3xl font-medium leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl">
          Contacts
        </h1>
        <div className="animate-[slide-down-fade_0.9s_ease-in-out] pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href="mailto:harsh.v7681@gmail.com"
              title="gmail"
              icon="harsh.v7681"
            />
            <ContactLink
              href="https://github.com/hharsh0"
              title="github"
              icon="hharsh0"
            />
            <ContactLink
              href="https://www.linkedin.com/in/harsh-vardhan-222120228/"
              title="linkedin"
              icon="harshvardhan"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact
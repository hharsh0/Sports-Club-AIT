import React from 'react'

function TeamMemberForm() {
  return (
    <>
      <div className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 my-4 text-lg font-medium">
          Team Leader Detail's
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-900">
            Team Name
          </label>
          <input
            type="text"
            id="FirstName"
            name="first_name"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-900">
            Name
          </label>

          <input
            type="text"
            id="LastName"
            name="last_name"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-900">
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
          <label className="block text-sm font-medium text-gray-900">
            Phone Number
          </label>

          <input
            type="number"
            id="Password"
            name="password"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-900">
            Address
          </label>

          <input
            type="text"
            id="PasswordConfirmation"
            name="password_confirmation"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
          />
        </div>
        <div className="col-span-6 mt-4 text-lg font-medium">
          Team Members Detail's
        </div>
      </div>
    </>
  );
}

export default TeamMemberForm
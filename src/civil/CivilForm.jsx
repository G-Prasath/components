import React from 'react'

const CivilForm = () => {
  return (
    <div className="bg-gradient-to-br from-green-600 via-green-400 to-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <form action="/action_page.php" className="bg-gray-50 p-6 rounded-lg shadow-lg">
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="fname" className="block text-lg font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lname" className="block text-lg font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="mail" className="block text-lg font-medium text-gray-700 mb-2">
            E-mail
          </label>
          <input
            type="text"
            id="mail"
            name="mail"
            placeholder="Your e-mail.."
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
            Subject
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500 h-48 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-all duration-300 float-right"
          >
            Submit
          </button>
        </div>
      </form>


    </div>
  )
}

export default CivilForm;

import React from 'react';

function Cards({username="Abdullah", img="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D"  }) {
  return (
    <>
    <div className='h-96 w-80 flex justify-between '>
      <a
        className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#"
      >
        <img
          src={img}
          alt="Example"
          className="shadow rounded-lg overflow-hidden border shadow-amber-600 "
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl">{username}</h4>
          <p className="mt-2 text-gray-600">
            Create Exercises for any subject with the topics you and your students care about.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div>
        </div>
      </a>
      </div>
    </>
  );
}

export default Cards;
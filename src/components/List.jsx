import React from 'react';

function List({ people }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <div
            key={id}
            className="flex items-center bg-white shadow-lg rounded-lg p-4"
          >
            {/* Image Section */}
            <div className="mr-4">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full border-4 border-blue-400 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {name}
              </h3>
              <p className="text-lg text-gray-600">{age} years old</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;

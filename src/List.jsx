import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='bg-gray-200 p-4 m-2 rounded-md shadow-md'>
            <img
              src={image}
              alt={name}
              className='w-32 h-32 object-cover rounded-full mx-auto mb-4'
            />
            <div className='text-center'>
              <h4 className='text-xl font-bold mb-2'>{name}</h4>
              <p className='text-gray-600'>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

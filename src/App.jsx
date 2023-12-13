import React, { useState } from 'react';
import data from './Data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className="bg-gray-200 min-h-screen p-4">
      <section className='container mx-auto max-w-md bg-white p-6 rounded-md shadow-md'>
        <h3 className='text-xl mb-4'>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          className='bg-red-500 text-white py-2 px-4 rounded-md mt-4'
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;

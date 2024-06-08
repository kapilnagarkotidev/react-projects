import React from 'react'
import { useState } from 'react'

const App = () => {

const[color, setColor] = useState('#796EA8');

  return (
    <div className='w-full h-lvh flex justify-center items-end' style={{backgroundColor: color, color:'white'}}>
      <div id="colorTab" className='bg-white w-3/4 h-auto mb-5 rounded-2xl p-3 flex flex-wrap justify-between'>
        <div className="colorBtn bg-red-500 px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('red')}>
          <button >Red</button>
        </div>
        <div className="colorBtn bg-blue-500 px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('blue')}>
          <button > Blue</button>
        </div>
        <div className="colorBtn bg-yellow-500 px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('yellow')}>
          <button>Yellow</button>
        </div>
        <div className="colorBtn bg-green-500 px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('green')}>
          <button>Green</button>
        </div>
        <div className="colorBtn bg-orange-500 px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('orange')}>
          <button>Orange</button>
        </div>
        <div className="colorBtn bg-gray-500 px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('gray')}>
          <button>Gray</button>
        </div>
        <div className="colorBtn bg-black px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('black')}>
          <button>Black</button>
        </div>
        <div className="colorBtn bg-white text-black border-2 border-black px-3 py-1 rounded-2xl transform transition duration-300 ease-in-out hover:scale-110" onClick={() => setColor('white')}>
          <button>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
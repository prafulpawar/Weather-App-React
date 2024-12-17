import React from 'react'
import { useState } from 'react';
const Search = ({setCity}) => {
 
  const [input, setInput] = useState(""); 

  
  function handleSubmit(e) {
    e.preventDefault();
    setCity(input);
    setInput("");
  }

  function handleInputChange(e) {
    setInput(e.target.value); 
  }


  return (
    <div className='flex justify-end items-center mt-10 p-5 gap-3'>

      <form onSubmit={handleSubmit} >


        <input type="text" placeholder='Enter City ' className='p-2 border-2 rounded-md '
         
         value={input}
         onChange={handleInputChange}
        
        />

        <button className='border-2 p-2 pr-5 pl-5 bg-black text-white font-bold'>Search</button>
      </form>

    </div>
  )
}

export default Search
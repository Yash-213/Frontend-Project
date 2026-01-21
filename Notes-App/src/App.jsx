import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const SubmitHandler = (e) =>{
    e.preventDefault();
    console.log(title, details);
    setTitle('');
    setDetails('');
  }

  return (
    <div className="h-screen bg-black lg:flex text-white">
      <form className="flex items-start p-10 gap-4 flex-col lg:w-1/2">
      <h1 className="text-3xl font-bold">Add Notes</h1>

          <input
            type="text"
            className="px-5 py-2 border-2 w-full font-medium outline-none rounded-2xl h-15"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) =>{
              console.log(e)
              setTitle(e.target.value);
            }}
          />

          <textarea
            type="text"
            className="px-5 py-2 h-32 border-2 w-full font-medium outline-none rounded-2xl"
            placeholder="Enter Details"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          <button onClick={(e)=>{
            SubmitHandler(e);
          }} className="bg-white w-full active:scale-95 font-medium outline-none text-black px-5 py-2 rounded-2xl">
            Add Notes
          </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l-2">
      <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex gap-5 mt-5 h-full overflow-auto flex-wrap ">
          <div className="h-52 w-40 rounded-2xl bg-amber-50"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

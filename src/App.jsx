import { useRef } from "react";

function App() {

  const inputRef=useRef("Sujoy Sen");

  const inputHandler=()=>{
    inputRef.current.focus()
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-blue-600">UseRef</h1>
      <input ref={inputRef} type="text" placeholder="Enter User Name" className="border border-gray-300 px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"  />
      <button onClick={inputHandler} className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition duration-300">Focus On Input Field</button>
    </>
  );
}

export default App; 

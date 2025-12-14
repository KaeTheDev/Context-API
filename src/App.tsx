function App() {
  return (
<div className="flex flex-col px-4 py-4 mx-auto bg-black p-4 border rounded max-w-2xl mt-4 items-center">
   <div className="flex flex-row">
   <h1 className="text-2xl text-white">Todo App(Context API)</h1>
   <button className="bg-yellow-300 px-4 py-5 ml-6">☀️ Switch to Light</button>
   </div>
   <div className="flex flex-row mt-4">
   <input className="border px-4 py-4 mr-4 text-white" type="text" placeholder="What needs to be done?" />
   <button className="bg-blue-600 px-3 py-4 hover:bg-blue-400">Add Todo</button>
   </div>

  <div className="flex flex-row mt-4">
    <button className="bg-gray-700 text-white px-4 py-5 mr-4">All</button>
    <button className="bg-gray-700 text-white px-4 py-5 mr-4">Active</button>
    <button className="bg-gray-700 text-white px-4 py-5">Completed</button>
  </div>
</div>
  )
}

export default App

export default function Explore() {
  const list = [{
    title:"Task1",
    description:"Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",
    price:"$100"   
  },
  {
    title:"Task2",
    description:"Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.",
    price:"$100"   
  },
  {
    title:"Task3",
    description:"Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.",
    price:"$100"   
  },
  {
    title:"Task4",
    description:"Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.",
    price:"$100"   
  }
]
    return (
       <div className="bg-gradient-to-b from-blue-200 to-indigo-600">

<nav style={{margin:"25px"}} className="bg-blue-700 rounded-full">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
  
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Explore</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Assigned</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">MyTasks</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       
        <div className="relative ml-3">
          

          
          
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Explore</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Assigned</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">MyTasks</a>
    </div>
  </div>
</nav>

<div className="list">
  {list.map((task, index) => (
<div key={index} style={{margin:"2%"}} className="bg-white p-4 my-4 rounded-md shadow-md">
      


    <div className="w-full px-5 pb-5">
    <h1 className="text-3xl font-semibold text-gray-900 dark:text-white my-2">{task.title}</h1>
        <a href="#">
            <h2 className=" tracking-tight text-gray-900 dark:text-white">{task.description}</h2>
        </a>
        
        <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">$599</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Chat With us</a>
        </div>
    </div>
</div>

    
  ))}
</div>

</div>
       
    )
}

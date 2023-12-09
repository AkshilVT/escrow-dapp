import Navbar from "@/components/pages/Navbar"
import { SetStateAction, useState } from "react";

export default function Mytasks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[title, settitle] = useState('');
    const [description, setdesc] = useState('');
    const [amount, setamount] = useState(0);

const handleChangeAddtitle = (e: { target: { value: SetStateAction<string>; }; }) =>{
    settitle(e.target.value);
    
}
const handleChangeAdddesc = (e: { target: { value: SetStateAction<string>; }; }) =>{
    setdesc(e.target.value);
    
}
const handleChangeAddamount = (e: { target: { value: SetStateAction<string>; }; }) =>{
    setamount(e.target.value);
    
}



  const toggleModal = (modalId: string) => {
    const modal = document.getElementById(modalId);

    if (modal) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleUpload = (title: string,desc: string,amount: number) => {
    const newTask = {
        title: title,
        description: desc,
        amount: amount,
        isAssigned: false, 
        isCompleted: false,
        isRejected: false,
        isSubmitted:false
      };
  
      //API Call
    toggleModal('default-modal');
  };


  const [list,setlist] =useState( [
    {
      title: "Task1",
      description:
        "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",
      price: "$100",
      isAssigned: true,
      isCompleteted: true,
      isSubmitted:true,
      isRejected:true,
    
    },
    {
      title: "Task2",
      description:
      "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",

      price: "$100",
      isAssigned: true,
      isCompleteted: false,
      isSubmitted:true,
      isRejected:true,
    },
    {
      title: "Task3",
      description:
      "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",
      price: "$100",
      isAssigned: false,
      isCompleteted: true,
      isSubmitted:true,
      isRejected:true,
    },
    {
      title: "Task4",
      description:
      "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",
      price: "$100",
      isAssigned: false,
      isCompleteted: false,
      isSubmitted:true,
      isRejected:true,
    },
  ]);

  
  return (
    <>

    <Navbar />


<div
  id="default-modal"
  tabIndex={1}
  aria-hidden="true"
  className={`overflow-y-auto overflow-x-hidden fixed top-0 z-50 flex justify-center items-center w-full ${isModalOpen ? 'block' : 'hidden'}`} // Conditionally apply 'hidden' class
>
  <div className="relative p-4 w-full max-w-2xl max-h-full">
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Fill the details
        </h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => toggleModal('default-modal')} // Use a function to handle modal toggling
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>

      
<form className="max-w-sm mx-auto my-3">
<div className="mb-5">
      <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
      <input onChange={handleChangeAddtitle} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
      <input onChange={handleChangeAdddesc} type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  
  <div>
      <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in USD</label>
      <input onChange={handleChangeAddamount} type="number" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
</form>






     

      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleUpload(title,description,amount)} // Add your upload logic
        >
          Save
        </button>
        <button
          type="button"
          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          onClick={() => toggleModal('default-modal')} // Use a function to handle modal toggling
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>



    <div className="list grid justify-items-end" >
        <div style={{ marginRight: "3%" }}>
        <button
        
  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
  onClick={() => toggleModal('default-modal')} // Use a function to handle modal toggling
>
    Create Work +
    </button>
        </div>
    
      {list.map((task, index) => (
        <div
          key={index}
          style={{ margin: "2%" }}
          className="bg-white p-4 my-4 rounded-md shadow-md"
        >
          <div className="w-full px-5 pb-5">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white my-2">
              {task.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-10 gap-10 my-3">
              <div className="sm:col-span-9">
                <a href="#">
                  <h2 className="tracking-tight text-gray-900 dark:text-white">
                    {task.description}
                  </h2>
                </a>
              </div>
              <div   className="sm:col-span-1">
                <div className=" sm:flex-row items-start sm:items-center">
                  <div className="flex items-center mr-4">
                    <span className="mr-2">
                    {task.isAssigned? <i className="fa-solid fa-check"></i>:<i className="fa-solid fa-rotate-right"></i>}
                     
                    </span>
                    <h3>Assigned</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">
                    {task.isCompleteted? <i className="fa-solid fa-check"></i>:<i className="fa-solid fa-rotate-right"></i>}                    </span>
                    <h3>Completed</h3>
                  </div>
                  <div className="flex items-center mr-4">
                    <span className="mr-2">
                    {task.isSubmitted? <i className="fa-solid fa-check"></i>:<i className="fa-solid fa-rotate-right"></i>}
                     
                    </span>
                    <h3>Submit</h3>
                  </div>
                  <div className="flex items-center mr-4">
                    <span className="mr-2">
                    {task.isRejected? <i className="fa-solid fa-check"></i>:<i className="fa-solid fa-rotate-right"></i>}
                     
                    </span>
                    <h3>Rejected</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                $599
              </span>
              <button  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
 View
</button>

              









            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

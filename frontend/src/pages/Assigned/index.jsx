import Navbar from "@/components/pages/Navbar"
import { useState,useEffect } from "react";
import lighthouse from '@lighthouse-web3/sdk';
import fetch from 'node-fetch';

export default function Assigned() {
  const list = [
    {
      title: "Task1",
      description:
        "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",
      price: "$100",
      isAssigned: true,
      isCompleteted: true,
    },
    {
      title: "Task2",
      description:
      "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",

      price: "$100",
      isAssigned: true,
      isCompleteted: false,
    },
    {
      title: "Task3",
      description:
      "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",
      price: "$100",
      isAssigned: false,
      isCompleteted: true,
    },
    {
      title: "Task4",
      description:
      "Beneath the starry sky, laughter echoed as friends gathered around a flickering bonfire, sharing stories that danced with the flames.In the quietude of the morning, a gentle breeze whispered through the leaves, carrying with it the fragrant scent of dew-kissed flowers. The world awakened with a soft symphony of birdsong, each note harmonizing with the rustle of leaves and the distant murmur of a meandering stream. As the sun painted the sky in hues of pink and gold, a sense of tranquility enveloped the landscape.",
      price: "$100",
      isAssigned: false,
      isCompleteted: false,
    },
  ];

  const [popupIndex, setPopupIndex] = useState(-1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [response, setResponse] = useState(null);



  const handleImageChange = (e) => {
    const file = e.target.files;
    console.log("file", file);
    if (file) {
      setSelectedImage(file);
    }
  };
  
  useEffect(() => {
    console.log("selectedImage:", selectedImage);
  }, [selectedImage]);

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2)
    console.log(percentageDone)
  }

  const handleSubmit = async (e) => {
    setPopupIndex(-1);
    e.preventDefault();

    if (!selectedImage) {
      console.error('Please select an image.');
      return;
    }

    try {
      const reader = new FileReader();

      // Define a callback for when the FileReader finishes reading the image
      reader.onload = async (event) => {
        // Create an HTML image element
        const img = new Image();

        // Set the source of the image to the data URL obtained from the FileReader
        img.src = event.target.result;

      
        img.onload = async () => {
          // Create a canvas element
          const canvas = document.createElement('canvas');
  
          // Set the dimensions of the canvas to match the image
          canvas.width = img.width;
          canvas.height = img.height;
  
          // Get the 2D rendering context of the canvas
          const context = canvas.getContext('2d');
  
          // Draw the image onto the canvas in grayscale
          context.drawImage(img, 0, 0, img.width, img.height);
          context.globalCompositeOperation = 'saturation';
          context.fillStyle = 'gray';
          context.fillRect(0, 0, img.width, img.height);
  
          // Convert the canvas content to a Blob
          canvas.toBlob(async (blob) => {
            // Create a new File object from the Blob
            const grayscaleFile = new File([blob], 'grayscale_image', {
              type: 'image/jpeg/png', // Adjust the type accordingly
            });
  
            // Upload the original image
            const output = await lighthouse.upload(
              selectedImage,
              "faf654b9.744b2d906cde4662a0c33d2535d420ca",
              false,
              null,
              progressCallback
            );
            setResponse(output.data.Hash);
            // Upload the grayscale image
            const grayList = [grayscaleFile];
            console.log(grayList);
            // const grayscaleOutput = await lighthouse.upload(
            //   grayList,
            //   "faf654b9.744b2d906cde4662a0c33d2535d420ca",
            //   false,
            //   null,
            //   progressCallback
            // );
  
            // Set the responses
            //setResponse(response + " " +grayscaleOutput.data.Hash);
            
            
          });
        };
      };
  
      // Read the selected image as a data URL
      reader.readAsDataURL(selectedImage[0]);
    } catch (error) {
      console.error('Error uploading image:', error);
      setResponse('Error uploading image.');
    }
  };

  
  return (
    <>
    <Navbar />

    <div className="list">
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
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                $599
              </span>
              <button onClick={()=>setPopupIndex(index)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Submit
</button>

              






{index === popupIndex && <div id="default-modal" tabIndex={1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 !z-50 flex justify-center items-center w-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Upload the picture
                </h3>
                <button type="button" onClick={()=>setPopupIndex(-1)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <label className="my-3 mx-3" htmlFor="avatar">Upload your work</label>

<input  className="my-3 mx-3" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleImageChange} />

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Upload</button>
                <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={()=>setPopupIndex(-1)}>Close</button>
            </div>
        </div>
    </div>
</div>}


            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

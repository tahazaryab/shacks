import bot_pic from './scotia_bot.png';
import React, { useState } from 'react';

const SubmitReport = (): JSX.Element => {

  const [question_increment, increase_question_increment] = useState(0)
  const [showSpinner, setShowSpinner] = useState(false)
  const times = [1000, 1800, 900]


  const clickResponse = () => {
    console.log(question_increment)
    if(question_increment !== 3){
      setShowSpinner(true)
      console.log(showSpinner)
      setTimeout(() => {increase_question_increment(question_increment + 1) 
        setShowSpinner(false)}
      , times[question_increment])
      console.log(showSpinner)
    }
    console.log(question_increment)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputElement = document.getElementById('default-search') as HTMLInputElement;
    if (inputElement && inputElement.value.trim() !== '' && question_increment !== 3) {
      clickResponse();
      inputElement.value = '';
    }
  };

  const questions = ['What would you like to report today?', 'I\'m so sorry to hear that, for verification purposes, what is your full name and home address?', 'What is the last transaction you made on your card?', 'I have sent an order for your card to be cancelled, a representative should be with you shortly. To check the progress of your report, please visit the My Reports page.']

  const [showElement, setShowElement] = useState(false);

  const listening = () => {

    if(showElement === true){
      setShowElement(false)
      clickResponse()
    }
    else if(showElement === false){
      setShowElement(true)
    }

  }

  return (
    <div className="h-screen flex flex-col items-center border-2 border-red-300">
      <h2 className="font-bold text-4xl text-red-100 mt-10">Submit a Fraud Report</h2>
      <h3 className="m-4">
        Hi! I'm the Scotiabank Chatbot! Please enter responses to my questions either in the text box below, or press the button to talk!
      </h3>
      <div>
        <img src={bot_pic} className="m-7 h-56" alt="Scotiabank Bot" />
      </div>

      <div>
        <p className='mt-7'>{questions[question_increment]}</p>
      </div>

      <div className="flex justify-center items-center my-5">
        {showElement ? (
        <div className="boxContainer">
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
          <div className="box box4"></div>
          <div className="box box5"></div>
        </div>
        ) : (showSpinner ? (
        <div className='boxContainer'>
          <div role="status">
            <svg aria-hidden="true" className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
):<div className='boxContainer'></div>)}
      </div>

      <div>

        
      </div>

      {}
      {/* <div className='mt-8'>
        <button className={`shadow-xl rounded-full p-2 bg-red-100 hover:bg-red-700 ${showElement ? 'bg-red-700':'bg-red-100'}`} onClick={listening}>
          <svg className="w-24 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
          </svg>
        </button>
        
      </div>

      <div className="border-20 border-black w-5/6 mt-10">
        <form className="border-20 border-black" onSubmit={handleSubmit}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900  border border-stone-400 drop-shadow-xl rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter answer here..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-red-100 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}


      {question_increment !== 3 ? (
        <div className='w-full h-full flex flex-col items-center border-2'>
          <div className='mt-10'>
            <button className={`shadow-xl rounded-full p-2 bg-red-100 hover:bg-red-700 ${showElement ? 'bg-red-700':'bg-red-100'}`} onClick={listening}>
              <svg className="w-24 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
              </svg>
            </button>
          </div>

          <div className="border-20 border-black w-5/6 mt-10">
            <form className="border-20 border-black" onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900  border border-stone-400 drop-shadow-xl rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter answer here..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-red-100 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
            </form>
          </div>
        </div>
      ) : 
      <a href='localhost:3000/my-reports'>
        <button className='font-bold shadow-xl rounded-full p-5 bg-red-100 hover:bg-red-700 text-white'>My Reports</button>
      </a>
      }



      <div>
        <p></p>
      </div>
    </div>
  );
};

export default SubmitReport;

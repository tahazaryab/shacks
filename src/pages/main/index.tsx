import Layout from '../../components/layout/Layout';
import { DefaultTimeline } from '../../components/timeline';
import { useNavigate } from 'react-router-dom';
const Main = (): JSX.Element => {
  const navigate = useNavigate()

  return <Layout>
    <div className="bg-white flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-12">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800  mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                    Report With
                    <span className="text-5xl sm:text-7xl">
                    Confidence
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-black">
                Introducing our cutting-edge Automated Ticket Report System - a revolutionary solution designed to streamline and enhance your ticket management process. Say goodbye to manual reporting hassles and hello to efficiency and accuracy.
                </p>
                <div className="flex mt-8">
                    <button className="uppercase py-2 px-4 rounded-lg bg-red-100 border-2 border-red-100 text-white text-md mr-4 hover:border-red-100 hover:bg-white hover:text-red-100" onClick={ () => navigate('/submit-report')}>
                        Submit a Report
                    </button>
                    <button className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-red-100 text-red-100 hover:bg-red-100 hover:text-white text-md">
                        Read more
                    </button>
                </div>
            </div>
            <div className="hidden p-20 sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="assets/scotia_bot.png" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
    
    <div className="bg-white flex items-center flex-col relative z-20 text-center items-center overflow-hidden ">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative py-12">
        <h1 className="font-bebas-neue text-2xl uppercase font-black flex flex-col leading-none text-gray-800">
        Understanding Your Ticket's Journey
                </h1>
                <p className="text-sm sm:text-base text-black py-10 max-w-md">
                From creation to investigation, escalation, resolution, and completion, we're committed to providing you with top-notch service and keeping you informed at every stage
                </p>


                <DefaultTimeline></DefaultTimeline>
        </div>
    </div>
    
    
  </Layout>;
};

export default Main;

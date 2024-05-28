// src/pages/Home.jsx
import React from 'react';
import BackgroundImage from '../assets/homeBg.png'
import WhoWeAre from '../assets/WhoWeAre.png'
import AirportTransfer from '../assets/airportTransfer.png'
import CityToCity from '../assets/cityToCity.png'
import FullDayImage from '../assets/fullDay.png'
import CorporateImage from '../assets/corporateTravel.png'
import HowWorkImage from '../assets/howWork.png'

const Home = () => {
  return (
    <div>
      <section className="bg-cover bg-center text-white h-screen flex items-center justify-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">NOW IT'S EASY FOR YOU</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">HIRE A CHAUFFEUR</h2>
          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regalia. It is a paradisematic country, in which roasted parts.</p>
          <button className="bg-pink-500 px-4 py-2 rounded">EASY STEPS FOR HIRING CHAUFFEURS</button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Quality Chauffeur Services</h2>
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-l">One Way</button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-r">By Hour</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Pick-up Location" className="border p-2 rounded"/>
              <input type="text" placeholder="Drop-off Location" className="border p-2 rounded"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="date" className="border p-2 rounded"/>
              <input type="time" className="border p-2 rounded"/>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Search</button>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-row items-center">
        <div className='flex flex-col  text-left w-[70%] pl-20'>
        <h2 className="text-4xl font-bold  mb-8">Who <span className="text-indigo-600">we are</span></h2>
        <p className=" mb-8 px-12 md:px-0 w-[70%]">
          Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut. Volutpat nullam tellus egestas scelerisque tellus.
        </p>
        <p className=" mb-8 px-4 md:px-0 w-[70%]">
          Id pellentesque eget sollicitudin quis morbi arcu. Id etiam sed dui tellus purus morbi aenean. Quis non non massa ut amet. Nec id sed ullamcorper tincidunt egestas sit. Ac elementum in justo feugiat netus suspendisse molestie. Tortor eget mattis aliquet at nunc elementum ornare aliquet placerat.
        </p>
        <button className=" w-[30%] bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg mb-8">
          Know More
        </button>
        </div>
        <div className="relative w-full h-80 md:h-96 flex justify-center items-center w-[50%]">
        <img src={WhoWeAre} alt='not' width={400} height={400}/>
        </div>
      </div>
    </section>
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow-lg  h-[300px] flex flex-col justify-end "  style={{ backgroundImage: `url(${AirportTransfer})`,backgroundSize:'cover' }}>
              
              <h3 className="text-xl font-semibold text-white">Airport Transfers</h3>
              <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regalia.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg h-[300px]  flex flex-col justify-end "style={{ backgroundImage: `url(${CityToCity})`,backgroundSize:'cover' }}>
            
              <h3 className="text-xl font-semibold text-white ">City to City Rides</h3>
              <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regalia.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg h-[300px]  flex flex-col justify-end "style={{ backgroundImage: `url(${FullDayImage})`,backgroundSize:'cover' }}>
              
              <h3 className="text-xl font-semibold text-white">By Hour And Full Day</h3>
              <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regalia.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg h-[300px]  flex flex-col justify-end "style={{ backgroundImage: `url(${CorporateImage})`,backgroundSize:'cover' }}>
              
              <h3 className="text-xl font-semibold text-white">Corporate Travels</h3>
              <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regalia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 "  style={{ backgroundImage: `url(${HowWorkImage})`,backgroundSize:'cover' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">How It Works</h2>
          <div className="flex justify-center">
            <div className="text-white p-4 rounded shadow-lg m-2">
              <div className="text-pink-500 text-4xl mb-4">1</div>
              <h3 className="text-xl font-semibold">Pick Destination</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regalia.</p>
            </div>
            <div className="text-white p-4 rounded shadow-lg m-2">
              <div className="text-pink-500 text-4xl mb-4">2</div>
              <h3 className="text-xl font-semibold">Select Term</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regalia.</p>
            </div>
            <div className="text-white p-4 rounded shadow-lg m-2">
              <div className="text-pink-500 text-4xl mb-4">3</div>
              <h3 className="text-xl font-semibold">Choose A Car</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regalia.</p>
            </div>
            <div className="text-white p-4 rounded shadow-lg m-2">
              <div className="text-pink-500 text-4xl mb-4">4</div>
              <h3 className="text-xl font-semibold">Enjoy The Ride</h3>
              </div>
              </div>
              </div>
              </section>
              </div>
  );
};

export default Home;

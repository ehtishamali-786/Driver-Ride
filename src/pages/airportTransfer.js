import React from 'react'
import BgairportTransfer from '../assets/bg-airportImage.png'
import DarkSelect from '../assets/Selectdark.png'
import TransferAirport from '../assets/transferAirport.png'
import ShuttleAirport from '../assets/airportShuttle.png'
import FromAirport from '../assets/fromAirport.png'

 const AirportTransfer = () => {
  return (
    <div>
          <section className=" w-[100%] mt-[-4.7rem] pl-10 bg-cover  text-white h-80 flex  justify-center " style={{ backgroundImage: `url(${BgairportTransfer})` }}>
        <div className=" flex  justify-center mt-[6rem]">
          <h1 className="text-white  text-[40px] font-Poppins  font-bold mb-4 ">AIRPORT TRANSFERS</h1>
         </div>
       
      </section>

      <section className=" flex justify-center items-center text-center py-12 z-[111] mt-[-10rem] ">
        <div className=" bg-white p-8 rounded shadow-lg w-[80%] ">
          <h2 className="text-3xl font-bold text-center mb-8">Quality Chauffeur Services</h2>
          <div className="">
            <div className='flex justify-center items-center'>
            <div className="flex justify-center mb-4 border border-[#FF0080] rounded-full p-1 w-[460px]">
              <button className="bg-pink-500 text-white px-20 py-2 rounded-full">One Way</button>
              <button className="bg-white text-black px-20 py-2 rounded-full">By Hour</button>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Pick-up Location" className="border p-2 rounded"/>
              <input type="text" placeholder="Drop-off Location" className="border p-2 rounded"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="date" className="border p-2 rounded"/>
              <input type="time" className="border p-2 rounded"/>
            </div>
            <button className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-white px-4 py-2 rounded mt-4 w-[460px]">Search</button>
          </div>
        </div>
      </section>
      <section className=" ">
      <div className="container mx-auto flex flex-row items-center">
      <div className="relative w-full h-80 md:h-96 flex justify-center items-center w-[50%]">
        <img src={TransferAirport} alt='not' width={400} height={400}/>
        </div>
        <div className='flex flex-col  text-left w-[90%] pl-20'>
        <h2 className="text-[#2E3A59] text-4xl font-bold  mb-8">Airport transfer in the city</h2>
        <p className=" mb-8 px-12 md:px-0 w-[100%]">
        If you’ve just stepped off a plane, tired and aching from a long flight, there can be no better antidote to your ailments than a Blacklane airport transfer direct to your destination. Blacklane transfers are available in hundreds of cities and airports across the world, and for those who don’t look forward to deciphering foreign public transport maps or haggling with local taxi companies, Blacklane offers a service that will take you to your destination directly from the airport. Wherever you go, our professional drivers can track your flight and adjust for any delays outside of your control. They’re hand-picked and locally knowledgeable, so feel free to ask them for tips or advice on what to do during your stay.

        </p>
        </div>
      </div>
    </section>
    <section className="">
      <div className="container mx-auto flex flex-row items-center">
        <div className='flex flex-col  text-left w-[90%] pl-20'>
        <h2 className="text-[#2E3A59] text-4xl font-bold  mb-8">Get to or from the airport</h2>
        <p className=" mb-8 px-12 md:px-0 w-[100%]">
        If you’ve just stepped off a plane, tired and aching from a long flight, there can be no better antidote to your ailments than a Blacklane airport transfer direct to your destination. Blacklane transfers are available in hundreds of cities and airports across the world, and for those who don’t look forward to deciphering foreign public transport maps or haggling with local taxi companies, Blacklane offers a service that will take you to your destination directly from the airport. Wherever you go, our professional drivers can track your flight and adjust for any delays outside of your control. They’re hand-picked and locally knowledgeable, so feel free to ask them for tips or advice on what to do during your stay.

        </p>
        </div>
        <div className="relative w-full h-80 md:h-96 flex justify-center items-center w-[50%]">
        <img src={FromAirport} alt='not' width={400} height={400}/>
        </div>
      </div>
    </section>
    <section className=" ">
      <div className="container mx-auto flex flex-row items-center">
      <div className="relative w-full h-80 md:h-96 flex justify-center items-center w-[50%]">
        <img src={ShuttleAirport} alt='not' width={400} height={400}/>
        </div>
        <div className='flex flex-col  text-left w-[90%] pl-20'>
        <h2 className="text-[#2E3A59] text-4xl font-bold  mb-8">Airport shuttle booking</h2>
        <p className=" mb-8 px-12 md:px-0 w-[100%]">
        If you’ve just stepped off a plane, tired and aching from a long flight, there can be no better antidote to your ailments than a Blacklane airport transfer direct to your destination. Blacklane transfers are available in hundreds of cities and airports across the world, and for those who don’t look forward to deciphering foreign public transport maps or haggling with local taxi companies, Blacklane offers a service that will take you to your destination directly from the airport. Wherever you go, our professional drivers can track your flight and adjust for any delays outside of your control. They’re hand-picked and locally knowledgeable, so feel free to ask them for tips or advice on what to do during your stay.

        </p>
        </div>
       
      </div>
    </section>
    <section className="py-12  bg-[#E4E6EE]"  >
        <div className="container mx-auto text-center">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center gap-2  p-4  m-2">
              <img src={DarkSelect} alt='selectIcon'/>
              <h3 className="text-[#2E3A59] text-xl font-semibold">Competitive Rates</h3>
              <p className='text-black'>Access premium service at distance-based prices that are fair to you and our chauffeurs.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2  p-4 m-2">
            <img src={DarkSelect} alt='selectIcon'/>
              <h3 className="text-[#2E3A59] text-xl font-semibold">Seamless airport travel</h3>
              <p className='text-black'>Access premium service at distance-based prices that are fair to you and our chauffeurs.</p>
            </div>
            <div className= "flex flex-col items-center text-center gap-2  p-4  m-2">
            <img src={DarkSelect} alt='selectIcon'/>
              <h3 className="text-[#2E3A59] text-xl font-semibold">Travel on your terms</h3>
              <p className='text-black'>Access premium service at distance-based prices that are fair to you and our chauffeurs.</p>
            </div>
            <div className= "flex flex-col items-center text-center gap-2  p-4  m-2">
            <img src={DarkSelect} alt='selectIcon'/>
              <h3 className="text-[#2E3A59] text-xl font-semibold">Safety First</h3>
              <p className='text-black'>Access premium service at distance-based prices that are fair to you and our chauffeurs.</p>
            </div>
              </div>
              </div>
              </section>
    </div>
  )
}
export default AirportTransfer

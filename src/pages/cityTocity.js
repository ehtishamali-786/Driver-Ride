import React from 'react'
import CityRideImage from '../assets/cityRideImage.png'
import BgImageSelect from '../assets/bgSelectImage.png'
import SelectIcon from '../assets/SelectIcon.png'
import ABImage from '../assets/AbImage.png'

 const CityToCity = () => {
  return (
    <div>
         <section className=" w-[100%] mt-[-4.7rem] pl-10 bg-cover  text-white h-80 flex  justify-center " style={{ backgroundImage: `url(${CityRideImage})` }}>
        <div className=" flex  justify-center mt-[6rem]">
          <h1 className="text-white  text-[40px] font-Poppins  font-bold mb-4 ">CITY TO CITY RIDES</h1>
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

      <section className="py-12 mb-4 "  style={{ backgroundImage: `url(${BgImageSelect})`,backgroundSize:'cover' }}>
        <div className="container mx-auto text-center">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center gap-2 text-white p-4 rounded shadow-lg m-2">
              <img src={SelectIcon} alt='selectIcon'/>
              <h3 className="text-xl font-semibold">Competitive Rates</h3>
              <p>Access premium service at distance-based prices that are fair to you and our chauffeurs.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 text-white p-4 rounded shadow-lg m-2">
            <img src={SelectIcon} alt='selectIcon'/>
              <h3 className="text-xl font-semibold">Seamless airport travel</h3>
              <p>Access premium service at distance-based prices that are fair to you and our chauffeurs.</p>
            </div>
            <div className= "flex flex-col items-center text-center gap-2 text-white p-4 rounded shadow-lg m-2">
            <img src={SelectIcon} alt='selectIcon'/>
              <h3 className="text-xl font-semibold">Travel on your terms</h3>
              <p>Access premium service at distance-based prices that are fair to you and our chauffeurs.</p>
            </div>
              </div>
              </div>
              </section>

              <section className="py-12 ">
      <div className="container mx-auto flex flex-row items-center">
        <div className='flex flex-col  text-left w-[90%] pl-20'>
        <h2 className="text-4xl font-bold  mb-8">Long distance car service, the better way between cities</h2>
        <p className=" mb-8 px-12 md:px-0 w-[100%]">
        Say goodbye to the stress of mass transit, and hello to the comfort and simplicity of chauffeured rides with our City to City private transportation service.
        </p>
        <ul className='list-disc'>
            <li>
           <span className='text-[#000000] text-[16px] font-[500]'>Save Time: </span> Door-to-door rides mean no waiting in lines or switching between 
            </li>
            <li>
           <span className='text-[#000000] text-[16px] font-[500]'>Set the schedule:  </span> You choose the pickup time, plus you can cancel up until 1 hour before your ride. 
            </li>
            <li>
           <span className='text-[#000000] text-[16px] font-[500]'>Enjoy peace of mind:  </span> Travel in comfort in a premium vehicle, and rest assured every ride is carbon offset. 
            </li>
            <li>
           <span className='text-[#000000] text-[16px] font-[500]'>Fixed fares: </span> Taxes and tolls are included, you pay per car instead of per seat, and the only luggage limit is trunk space
            </li>
            <li>
           <span className='text-[#000000] text-[16px] font-[500]'>Competitive rates: </span> With long distance car service you don’t have to worry about strikes, short-staffing, or crowds.
            </li>
            <li>
           <span className='text-[#000000] text-[16px] font-[500]'>Work en route:  </span> On a business trip? Work comfortably from the back seat, with Wi-Fi available for most locations. 
            </li>
        </ul>
        
        
        </div>
        <div className="relative w-full h-80 md:h-96 flex justify-center items-center w-[50%]">
        <img src={ABImage} alt='not' width={400} height={400}/>
        </div>
      </div>
    </section>
    </div>
  )
}
export default CityToCity
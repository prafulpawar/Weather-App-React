import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from 'react';
const Mid = (props) => {

   
    const [city, setCity] = useState("");
    const [temperatureCelsius, setTemperatureCelsius] = useState(null);
    const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [realFeel, setRealFeel] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [text,setText] = useState(null);
    const [icon,setIcon] = useState(null);



    useEffect(() => {

        if (props.data) {
            const { location, current } = props.data;
            if (location?.name) {
                setCity(location.name);
            }
            if (current) {
                setTemperatureCelsius(current?.temp_c);
                setTemperatureFahrenheit(current?.temp_f);
                setHumidity(current?.humidity);
                setWindSpeed(current?.wind_kph);
                setRealFeel(current?.feelslike_c); 
                setPressure(current?.pressure_mb);
                setText(current?.condition?.text);
                setIcon(current?.condition?.icon);
               
            }
            
           
           
        }

       
    }, [props.data, windSpeed, realFeel, pressure, humidity]);
    
 
    

    return (
        <>

            <div className='flex justify-center items-center mt-10'>

                <sup className='mb-5'>
                    <FaLocationDot />
                </sup>
                <span className='text-6xl' >

                    {
                        city
                    }

                </span>
                <sub className='flex mt-10'>By</sub>
            </div>

            <div className='flex justify-center items-center mt-10'>
                     
                   <span className='text-4xl '>
                       

                    {
                        temperatureCelsius
                    }
                      <sup >
                            <span className='text-xs'>0</span>
                      
                            <span >C</span>
                      
                      </sup>

                   </span>
            </div>

           

                  <div className='flex justify-center items-center mt-5'>
                       
                          
                           <img src={icon} alt="" />

                            <h1>{text}</h1>
                       


                  </div>

           


            <div className='flex justify-center item-center mt-5  p-10 gap-20'>
                 
                   <div >
                          <div className="top flex justify-center item-center">

                               {
                                    realFeel
                               } <sub>oC</sub>

                         </div>  

                         <div className="botto">
                              <h6>Real Feel</h6>
                         </div>


                   </div>

                   <div>
                          <div className="top flex justify-center item-center ">
                               {
                                    windSpeed
                              } <sub>km/h</sub>
                         </div>

                         <div className="botto">
                              <h6>N wind</h6>
                         </div>

                         
                   </div>


                   <div>
                          <div className="top flex justify-center item-center ">
                               {
                                    humidity
                              } <sub>%</sub>
                         </div>

                         <div className="botto">
                              <h6>Humidity</h6>
                         </div>

                         
                   </div>


                   <div>
                          <div className="top flex justify-center item-center ">
                               {
                                   pressure
                              } <sub>hPa</sub>
                         </div>

                         <div className="botto">
                              <h6>Pressure</h6>
                         </div>

                         
                   </div>
                                    
            </div>




        </>
    )
}

export default Mid
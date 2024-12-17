import React from 'react'
import Nav from './Components/Nav'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from'react';
import Search from './Components/Search'
import Mid from './Components/Mid';
const App = () => {

      const [data,setData] = useState({});
      const [time ,setTime] = useState("");
      const [city,setCity] = useState('London')
     
      const getData = async () => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=________________${city}&aqi=no`);
            setData(response.data);  
            setTime(response.data.location.localtime);
        } catch (err) {
            console.log("Error fetching data:", err); 
        }
    };
      useEffect(()=>{
           
          getData(city);
      },[city])


  return (
    <div className='bg-zinc-200 h-screen'>
         <>

                 <Nav data={data}/>
                 <Search setCity={setCity}/>
                 <Mid  data = {data}/>


         
         </>

    </div>
  )
}

export default App
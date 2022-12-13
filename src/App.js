/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
// import options from './Api/covidapi'
import axios from 'axios';
import './App.css'
import Header from './Components/Header';
import CountrySelector from './Components/CountrySelector';
import Cards from './Components/Cards';
import Chart from './Components/Chart';
// import { data } from './Api/covidapi';


const App = () => {
  let [dailyData, setDailyData] = useState({stats:{history:[],totalDeaths:0,totalRecoveredCases:0,totalConfirmedCases:0}});
  let [country,setCountry] =useState('CA')
  
const data = {
  method: 'GET',
  url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/'+country+'/',
  headers: {
    'X-RapidAPI-Key': 'ad87983462msh4cc65d187bc2ca8p13b60djsn85795046d57d',
    'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
  }
};
  useEffect(()=>{
        axios.request(data).then(function (response) {
          dailyData = response.data
          setDailyData(dailyData)
          console.log(dailyData)
        }).catch(function (error) {
          console.error(error);
         });
        },[country])
      return (<div className='container'>
    <Header />
  <Cards data={dailyData} />
    <CountrySelector setCountry={setCountry} country = {country} />
    
   <Chart country={country} dailyData={dailyData}/>
    
  </div>
  )
  }

export default App
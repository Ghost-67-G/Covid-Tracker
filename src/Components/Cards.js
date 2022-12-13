import CountUp from 'react-countup'


export default function Cards({data}) {
let date = new Date().toLocaleDateString()
  return (
    <div className="container-cards">
      <div className="parent-infected layout">
        <div><h3 className='cards-dates'>Infected</h3></div>
        <div><h2>
            <CountUp end={data.stats.totalConfirmedCases} duration={0.5} separator=',' /></h2></div>
        <div><h5 className='cards-dates'>{date}</h5></div>
        <div><p className='text-p'>Number of active cases of COVID-19</p></div>
      </div>
      <div className="recovered-infected layout">
        <div><h3 className='cards-dates'>Recovered</h3></div>
        <div><h2><CountUp end={data.stats.totalRecoveredCases} duration={0.5} separator=',' /></h2></div>
        <div><h5 className='cards-dates'>{date}</h5></div>
        <div><p  className='text-p'>Number of recovered cases of COVID-19</p></div>
      </div>
      <div className="deaths-infected layout">
        <div><h3 className='cards-dates'>Deaths</h3></div>
        <div><h2><CountUp end={data.stats.totalDeaths} duration={0.5} separator=',' /></h2></div>
        <div><h5 className='cards-dates'>{date}</h5></div>
        <div><p className='text-p'>Number of deaths cases of COVID-19</p></div>
      </div>
    </div>
  )
}
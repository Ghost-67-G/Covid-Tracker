const options = {
  method: 'GET',
  url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
  params: {country: ""},
  headers: {
    'X-RapidAPI-Key': 'ad87983462msh4cc65d187bc2ca8p13b60djsn85795046d57d',
    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
  }
};
export default options

const data = {
  method: 'GET',
  url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/PK/',
  headers: {
    'X-RapidAPI-Key': 'ad87983462msh4cc65d187bc2ca8p13b60djsn85795046d57d',
    'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
  }
};
export {data}
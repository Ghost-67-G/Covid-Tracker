const CountrySelector = ({country,setCountry}) => {
  const getValue = (e)=>{
    country = e.target.value
    setCountry(country)
  }
  return (
    <div>
        <select onChange={getValue} className='selectorOptions'>
            <option value={'CA'}>Canada</option>
            <option value={'PK'}>Pakistan</option>
            <option value={"CN"}>China</option>
            <option value={"FR"}>France</option>
        </select>
    </div>
  )
}

export default CountrySelector
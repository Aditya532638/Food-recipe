import React, { useEffect, useState } from 'react'

const MealDbAPI = () => {

  const [mealData, setMealData] = useState([]);
  const [input, setInput] = useState('indian');
  const [search, setSearch] = useState('');


  useEffect(() => {

    const fetchMealDbAPI = async () => {

      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${input}`);

      const data = await api.json();

      console.log(data.meals);

      setMealData(data.meals)

    };
    fetchMealDbAPI();

  }, [input]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

    const data = await api.json();
    console.log(data.meals);
    setMealData(data.meals);

  setSearch(" ");

  }

  return (
    <>
      <div className='my-3' style={{ width: '1000px', margin: 'auto' }}>
        <div className='mx-auto text-center'>
          <button onClick={() => setInput("indian")} type="button" className="btn btn-outline-primary mx-3">Indian</button>
          <button onClick={() => setInput("Canadian")} type="button" className="btn btn-outline-secondary mx-3">Candian</button>
          <button onClick={() => setInput("Thai")} type="button" className="btn btn-outline-success mx-3">Thai</button>
          <button onClick={() => setInput("british")} type="button" className="btn btn-outline-danger mx-3">British</button>
          <button onClick={() => setInput("russian")} type="button" className="btn btn-outline-warning mx-3">Rassian</button>
          <button onClick={() => setInput("italian")} type="button" className="btn btn-outline-info mx-3">Italian</button>

        </div>
      </div>
      <form className='my-3' onSubmit={handlesubmit} style={{ margin: "auto", width: "300px" }}>
        <input  type="text" value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "300px" }} />
      </form>


      <div style={
        {

          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",

        }
      }>
        {mealData.map((data) => <div key={data.idMeal} style={{ maxWidth: "230px" }}>
          <div >
            <img src={data.strMealThumb} alt="" style={{ width: "220px" }} />
          </div>
          <h5>{data.strMeal
          }
          </h5>
        </div>)}
      </div>
    </>
  )
}

export default MealDbAPI

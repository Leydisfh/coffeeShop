import "./App.css";
import "./Styles/Container-cards.css";
import { useState, useEffect } from "react";
import axios from "axios";
import header from "./assets/bg-cafe.jpg";
import Cards from "./Components/Cards";

function App() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);



  const allData = data.map((item) => {
    return(
      <Cards key={item.id}
      img= {item.image}
      alt={item.name}
      title={item.name}
      price={item.price}
      rating={item.rating}
      votes={item.votes}
      available={item.available}
      
      />
      )
})

const availableData = data.filter((item) => item.available === true).map((item) => {
  return(
    <Cards key={item.id}
    img= {item.image}
    alt={item.name}
    title={item.name}
    price={item.price}
    rating={item.rating}
    votes={item.votes}
    available={item.available}
    
    />
    
    )})
    const handleShow = () => {
      setShowAll(!showAll);
      setShowAvailable(false);
  
      
    }
    
    const handleShowAvailable = () => {
      setShowAvailable(!showAvailable);
      setShowAll(false);
    }

  return (
    <>
      <header className="shop__header">
        <img src={header} alt="Imagen de una tienda de café en una terraza" />
      </header>
      <section className="shop__cards__collection">
        <div className="shop__cards__collection__container">
          <h1 className="shop__cards__colletion__title">Our Collection</h1>
          <p className="shop__cards__colletion__text">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="shop__cards__collection__buttons">
            <button className= {showAll ? "shop__cards__collection__button btn-shop" : "shop__cards__collection__button btn-now" }  onClick={handleShow}>
              Shop All
            </button>
            <button className={ showAvailable ?  "shop__cards__collection__button btn-shop" : "shop__cards__collection__button btn-now"  } onClick={handleShowAvailable}>
              Available Now
            </button>
          </div>
        </div>

        <div className="shop__container__cards">
          {showAll ? allData : availableData}
          </div>
      </section>
    </>
  );
}

export default App;

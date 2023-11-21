import "../Styles/Cards.css";
import {BsStar} from "react-icons/bs";



const Cards = ({img, alt, title, price, rating, votes, available}) => {


  return (
   <>
          <article  className="cards">
            <header className="card__header">
              <img src={img} alt={alt} />
            </header>
            <div className="card__container">
              <h2>{title}</h2>
              <p>{price}</p>
            </div>
            <footer className="cards__footer">
              <div className="cards__footer__container">
              <span><BsStar style={{color:"#F6C768"}}/></span>
              <p>{rating}</p>
              <span> ({votes} votes)</span>
              </div>
              <p className="cards__footer-available">{available ? "" : "Sold out"}</p>
            </footer>
          </article>
      </>
  );
};

export default Cards;

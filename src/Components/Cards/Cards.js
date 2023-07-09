import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({movie}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  return (
    <>
      { loading ? 
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
          {console.log("Skeleton here")}
        </div>
       :
       
        <Link to={`/movie/${movie.id}`} className="link">
          <div className="card">
            <img className="card_img"
              src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : "" }`} />
            <div className="card_overlay">
              <div className="card_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card_date">
                {movie ? movie.release_date :""}
                <span className="card_rating">
                  {movie ? movie.vote_average :""}
                  <i className="fas fa-star"/>
                </span>
              </div>
              <div className="card_description"> {movie ? movie.overview.slice(0,118)+"..." : ""} </div>
            </div>
          </div>
        </Link>
      }
    </>
  );
};
export default Cards;

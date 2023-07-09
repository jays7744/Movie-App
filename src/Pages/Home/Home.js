import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import List from "../Movies-List/List";

const Home = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
      
  }, []);
  
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          
        >
          {popular.map(movie => (
            <Link className="link" to={`/movie/${movie.id}`}>
              <div className="poster">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path }`}/>
              </div>
              <div className="poster_overlay">
                <div className="poster_title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="poster_date">
                  {movie ? movie.release_date : ""}
                  <span className="poster_rating">
                    {movie ?movie.vote_average + " " : ""}
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div className="poster_description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <List/>
      </div>
    </>
  );
};
export default Home;

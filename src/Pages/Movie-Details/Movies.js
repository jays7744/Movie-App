import { useEffect, useState } from "react";
import "./Movies.css"
import { useParams } from "react-router-dom";

const Movies = ()=>{
  
    const [moviesDetail, setMoviesDetail] = useState();
   const {id} = useParams()

   useEffect (()=>{
    getData()
   }, [])

  const getData = ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setMoviesDetail(data) )
     }
     {console.log(moviesDetail)}
     

     return(
        <div className="movie">
            <div className="movie_info">
                <img className="movie_backdrop" src={`https://image.tmdb.org/t/p/original${moviesDetail ? moviesDetail.backdrop_path : ""}`}/>
            </div>

            <div className="movie_detail">
                <div className="movie_detailLeft">
                <div className="movie_posterBox">
                    <img className="movie_poster" src={`https://image.tmdb.org/t/p/original${moviesDetail ? moviesDetail.poster_path : ""}`}/>  
              </div>
                </div>
                
              <div className="movie_detailRight">
                <div className="movie_detailRightTop">
                <div className="movie_name">{moviesDetail ? moviesDetail.original_title : ""}</div>
                <div className="movie_tagline">{moviesDetail ? moviesDetail.tagline : ""}</div>
                <div className="movie_rating">
                      {moviesDetail ? moviesDetail.vote_average : ""} <i class="fas fa-star" />
                      <span>{moviesDetail ? "(" + moviesDetail.vote_count + ") votes" : "" }</span>
                      </div>
                    <div >{moviesDetail ? moviesDetail.runtime + " mins" : ""}</div>
                    <div >{moviesDetail ? "Release date: " + moviesDetail.release_date : ""} </div>
                    <div className="movie_genres">
                     {moviesDetail && moviesDetail.genres ? moviesDetail.genres.map(gener => (<>
                     <span className="movie_gener" id={gener.id}>{gener.name}</span></>)
                     ) : ""
                    }                      
                     </div>
                </div>
                <div className="movie_detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{moviesDetail ? moviesDetail.overview : ""}</div>
               </div>                
              </div>

            </div>
            <div className="movie_links"> 
            <div className="movie_heading">Useful Links</div>
            {
                    moviesDetail && moviesDetail.homepage && <a href={moviesDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie_homeButton movie_Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    moviesDetail && moviesDetail.imdb_id && <a href={"https://www.imdb.com/title/" + moviesDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie_imdbButton movie_Button">IMDB<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            

        </div>
        
     )
}
export default Movies;
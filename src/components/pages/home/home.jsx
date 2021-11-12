import "./home.css"
import { NavBar } from "../../nav/nav";
import { FeaturedCard } from "../../featured-card/featured";
import { MovieCard } from "../../movie-card/movie-card";

export const Home = (props) => {
    const {image, name, genre} = props;

    return(
        <div>
            <FeaturedCard/>
            <div style={{display:'flex'}}>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>


        </div>
    )    
};


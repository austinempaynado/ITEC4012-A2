import "./home.css";
import { NavBar } from "../../nav/nav";
import { FeaturedCard } from "../../featured-card/featured";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MovieCarousel } from "../../carousel/carousel";

export const Home = (props) => {
  const { image, name, genre } = props;

  return (
    <div>
      <FeaturedCard />
      <div style={{ overflow: "auto"}}>
        <MovieCarousel label="Austin's Favourites"></MovieCarousel>
        <MovieCarousel label="Anime"></MovieCarousel>
        <MovieCarousel label="Comedy"></MovieCarousel>
        <MovieCarousel label="Sci-fi"></MovieCarousel>
      </div>
    </div>
  );
};

import "./home.css";
import { NavBar } from "../../nav/nav";
import { FeaturedCard } from "../../featured-card/featured";
import { MovieCarousel } from "../../carousel/carousel";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <FeaturedCard />
      <div style={{ overflow: "auto" }}>
        <MovieCarousel label="Austin's Favourites"></MovieCarousel>
        <MovieCarousel label="Anime"></MovieCarousel>
        <MovieCarousel label="Comedy"></MovieCarousel>
        <MovieCarousel label="Sci-fi"></MovieCarousel>
      </div>
    </div>
  );
};

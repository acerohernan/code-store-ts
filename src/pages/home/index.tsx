import { useEffect } from "react";

import Hero from "./hero";
import Banner from "./banner";
import Categories from "./categories";
import LatestProducts from "../../components/latestProducts";
import ExploreSection from "../../components/exploreSection";
import FollowSection from "../../components/followSection";

import home from "../../styles/pages/home/home.module.scss";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={home.container}>
      <Hero />
      <Banner />
      <Categories />
      <LatestProducts />
      <ExploreSection />
      <FollowSection />
    </div>
  );
}

export default Home;

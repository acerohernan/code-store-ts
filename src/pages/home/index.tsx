import { useEffect } from "react";

import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import LatestProducts from "../../components/LatestProducts";
import ExploreSection from "../../components/ExploreSection";
import FollowSection from "../../components/FollowSection";

import home from "./home.module.scss";

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

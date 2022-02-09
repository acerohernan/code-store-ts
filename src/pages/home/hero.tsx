import { Link } from "react-router-dom";

import hero from "../../styles/pages/home/hero.module.scss";

function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.image}></div>
      <div className={hero.textContainer}>
        <h1 className={hero.title}>WE ARE CODERS LIKE YOU</h1>
        <span className={hero.subtitle}>See all the products</span>
        <Link to="/collections" className={hero.button}>
          Shop now
        </Link>
      </div>
    </div>
  );
}

export default Hero;

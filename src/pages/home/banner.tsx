import { Link } from "react-router-dom";
import { BiRightArrowAlt as Arrow } from "react-icons/bi";

import banner from "../../styles/pages/home/banner.module.scss";

function Banner() {
  return (
    <div className={banner.container}>
      <p className={banner.text}>CODING IS LOVE, CODING IS LIFE.</p>
      <Link to="/collections" className={banner.link}>
        Find out more
        <Arrow />
      </Link>
    </div>
  );
}

export default Banner;

import Link from "./linkStyled";

import explore from "../styles/components//explore.module.scss";

import image from "../assets/explore.jpg";

function ExploreSection() {
  return (
    <div className={explore.container}>
      <div className={explore.content}>
        <img src={image} alt="main" className={explore.image} />
        <div className={explore.textContainer}>
          <h4 className={explore.title}>A new shopping experience</h4>
          <Link to="/collections" text="Explore products" />
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;

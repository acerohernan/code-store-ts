import { BiRightArrowAlt as Arrow } from "react-icons/bi";
import image from "../assets/follow.jpg";
import image2 from "../assets/follow2.jpg";

import follow from "../styles/components/follow.module.scss";

function FollowSection() {
  return (
    <div className={follow.container}>
      <h4 className={follow.title}>Follow us on Instagram for more updates</h4>
      <a
        href="https://github.com/acerohernan"
        target="_blank"
        rel="noreferrer"
        className={follow.link}
      >
        Follow us
        <Arrow />
      </a>
      <div className={follow.imageContainer}>
        <img src={image} alt="beauty" className={follow.image} />
        <img src={image2} alt="beauty" className={follow.image} />
      </div>
    </div>
  );
}

export default FollowSection;

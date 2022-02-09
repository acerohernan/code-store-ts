import { BiRightArrowAlt as Arrow } from "react-icons/bi";
import { Link } from "react-router-dom";

import link from "../styles/components/link.module.scss";

interface Props {
  to: string;
  text: string;
}

function LinkStyled({ to, text }: Props) {
  return (
    <Link className={link.container} to={to}>
      <span>{text}</span>
      <Arrow className={link.icon} />
    </Link>
  );
}

export default LinkStyled;

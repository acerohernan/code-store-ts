import { AiOutlinePlus as PlusIcon } from "react-icons/ai";
import extra from "./extra.module.scss";

interface Props {
  title: string;
  text: string;
}

function ExtraInfo({ title, text }: Props) {
  return (
    <div className={extra.container}>
      <div className={extra.titleContainer}>
        <h4 className={extra.title}>{title}</h4>
        <PlusIcon className={extra.icon} />
      </div>
      <p className={extra.text}>{text}</p>
    </div>
  );
}

export default ExtraInfo;

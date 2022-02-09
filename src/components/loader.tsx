import { TailSpin } from "react-loader-spinner";

import loader from "../styles/components/loader.module.scss";

function Loader() {
  return (
    <div className={loader.container}>
      <TailSpin />
    </div>
  );
}

export default Loader;

import copyright from "../styles/components/copyright.module.scss";

function Copyright() {
  return (
    <div className={copyright.container}>
      <div className={copyright.linksContainer}>
        <a
          href="https://github.com/acerohernan/code-store"
          target="_blank"
          rel="noreferrer"
          className={copyright.link}
        >
          View in Github
        </a>
        <a
          href="https://acerohernan.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
          className={copyright.link}
        >
          © 2021 Hernan Acero.
        </a>
      </div>
    </div>
  );
}

export default Copyright;

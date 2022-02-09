import { Link } from "react-router-dom";

import categories from "../../styles/pages/home/categories.module.scss";

import image from "../../assets/categories1.png";
import image2 from "../../assets/categories2.png";
import image3 from "../../assets/categories3.png";

function Categories() {
  return (
    <div className={categories.container}>
      <h2 className={categories.title}>Categories</h2>
      <div className={categories.itemContainer}>
        <div className={categories.item}>
          <Link to="/collections#hoddies" className={categories.linkImage}>
            <img alt="categories" className={categories.image} src={image} />
          </Link>

          <h4 className={categories.itemTitle}>Hoddies</h4>
        </div>
        <div className={categories.item}>
          <Link to="/collections#t-shirts" className={categories.linkImage}>
            <img alt="categories" className={categories.image} src={image2} />
          </Link>
          <h4 className={categories.itemTitle}>T shirts</h4>
        </div>
        <div className={categories.item}>
          <Link to="/collections#tanks" className={categories.linkImage}>
            <img alt="categories" className={categories.image} src={image3} />
          </Link>
          <h4 className={categories.itemTitle}>Tank Tops</h4>
        </div>
      </div>
    </div>
  );
}

export default Categories;

import style from "./reviews.module.scss";

interface IReview {
  stars: string;
  title: string;
  text: string;
  name: string;
}

interface Props {
  reviews: Array<IReview>;
}

function Reviews({ reviews }: Props) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>4.3 stars from 10 reviews</h3>
      <div className={style.cards}>
        {reviews.map((review: IReview, index: number) => (
          <div className={style.card} key={index}>
            <span className={style.cardStars}>{review.stars}</span>
            <h4 className={style.cardTitle}>{review.title}</h4>
            <p className={style.cardText}>{review.text}</p>
            <span className={style.cardName}>{review.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

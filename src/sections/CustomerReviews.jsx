import { reviews } from "../constants";
import CustomerReviewCard from "../components/CustomerReviewCard";

const CustomerReviews = () => {
  return (
    <div>
      {reviews.map((review) => (
        <CustomerReviewCard key={review.customName} {...review} />
      ))}
    </div>
  );
};

export default CustomerReviews;

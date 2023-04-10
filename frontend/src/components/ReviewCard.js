
import { useEffect } from 'react';

export default function ReviewCard({ review }) {

    //get username from api



  return (
    <div className="review-card">
        <div className="user">{review.userId}</div>
        <div className="rating">{review.rating}</div>
        <h2>{review.title}</h2>
        <p>{review.content}</p>
    </div>
  );
}
import { useEffect, useState } from 'react';
import "../styles/ReviewCard.css"

export default function ReviewCard({ review }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/users/ById?id=${review.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
      });
  }, [review.userId]);


  return (
    <div className="review-card">
      <div className='review-header'>
        <h2 className='review-title'>{review.title}</h2>
        <p className="user">{user.name}</p>
        <div className="rating">Rating: {review.rating}</div>
      </div>
      <p>{review.content}</p>
    </div>
  );
}
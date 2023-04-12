
import { useEffect, useState } from 'react';

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
        <h2>{review.title}</h2>
        <p className="user">{user.name}</p>
        <div className="rating">Rating: {review.rating}</div>
        <p>{review.content}</p>
    </div>
  );
}
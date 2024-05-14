import React from 'react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';
import '../styles/ReviewContainer.css';

export default function ReviewContainer({ reviews, screenplayId }) {
  const [newReview, setNewReview] = useState({
    title: "",
    rating: null,
    content: "",
    screenplayId: parseInt(screenplayId),
  });

  const handleTitleChange = (value) => {
    setNewReview({
      ...newReview,
      "title": value,
    });
  };

  const handleRatingChange = (value) => {
    setNewReview({
      ...newReview,
      "rating": parseInt(value),
    });
  };

  const handleContentChange = (value) => {
    setNewReview({
      ...newReview,
      "content": value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify(newReview);

    fetch('http://localhost:3001/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
  };

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      <div className="review-form">
        <h3>Write a review</h3>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={newReview.title} onChange={(e) => handleTitleChange(e.target.value)} />
          <label htmlFor="rating" >Rating</label>
          <input type="number" id="rating" name="rating" min="1" max="5" value={newReview.rating} onChange={(e) => handleRatingChange(e.target.value)} />
          <label htmlFor="content" >Content</label>
          <textarea id="content" name="content" value={newReview.content} onChange={(e) => handleContentChange(e.target.value)} />
          <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
      {reviews.map((review, index) => (
  <ReviewCard key={index} review={review} />
))}
    </div>
  );
}
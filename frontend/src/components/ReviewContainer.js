import React from 'react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';
import '../styles/ReviewContainer.css';



export default function ReviewContainer({ reviews }) {
    const [newReview, setNewReview] = useState({
        title: "",
        rating: null,
        content: "",
    });

    const handleTitleChange = (value) => {
        console.log(newReview);
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

    const handleSubmit = () => {
        console.log(newReview);
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
                    <button type="submit">Submit</button>
                </form>
            </div>
            {reviews.map((review) => (
                <ReviewCard review={review} />
            ))}
        </div>
    );
}
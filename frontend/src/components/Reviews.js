import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Reviews.css";
import profile from '../assets/images/profile1.jpg';

const Review = ({ profilePicture, username, initialRating, initialComment }) => {
  const [rating, setRating] = useState(initialRating);
  const [comment, setComment] = useState(initialComment);
  const [editMode, setEditMode] = useState(false);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Call a function to save the review
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setRating(initialRating);
    setComment(initialComment);
    setEditMode(false);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <label key={i}>
          <input
            type="radio"
            name="rating"
            value={i + 1}
            checked={rating === i + 1}
            onChange={handleRatingChange}
          />
          <FontAwesomeIcon icon={faStar} className="star-icon" />
        </label>
      );
    }
    return stars;
  };

  return (
    <div className="review">
      <div className="review-header">
      <img
            src={profile}
            alt="profile"
          />
        <div className="review-user">
          <h3>{username}</h3>
          <div className="review-rating">{renderStars()}</div>
        </div>
        <div className="review-actions">
          {!editMode && (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </div>
      {editMode ? (
        <div className="review-body">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Leave your review here..."
          />
          <div className="review-buttons">
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="review-body">
          <p>{comment}</p>
        </div>
      )}
    </div>
  );
};

export default Review;
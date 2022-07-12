import React from "react";

export default function Book(props) {
  return (
    <div className="book-wrapper">
      <div className="book-name">
        <h2>{props.bookData.name}</h2>
      </div>
      <div className="book-author">
        <h3>{props.bookData.author}</h3>
      </div>
      <div className="book-description">
        <h4>{props.bookData.description}</h4>
      </div>
      <div className="book-price-header">
        <p>Price</p>
      </div>
      <div className="book-price'">
        <p>{props.bookData.price}</p>
      </div>
    </div>
  );
}

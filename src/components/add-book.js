import React, { useState } from "react";
import axios from "axios";

export default function addBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const postBook = () => {
    axios
      .post("http://127.0.0.1:5000/book/add", {
        name: name,
        author: author,
        price: price,
        description: description,
      })
      .then((response) => console.log("Book Added", response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="add-book">
        <h1 className="add-book-title">Enter book data</h1>
      </div>
      <form onSubmit={postBook}>
        <input
          className="add-book-form-input"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          className="add-book-form-input"
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="author"
        />
        <input
          className="add-book-form-input"
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          placeholder="price"
        />
        <textarea
          className="add-book-form-textarea"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="description"
        />

        <button className="add-book-form-button">Add Book</button>
      </form>
    </div>
  );
}

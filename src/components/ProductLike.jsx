import { useState } from "react";
import "./ProductLike.css";

export default function ProductLike({ title = "not Provided" }) {
  const [likes, setLikes] = useState(0);

  return (
    <section className="like-container">
      <div className="like-heading-container">
        <h2>{title}</h2>
        <button className="like-button" onClick={() => setLikes(likes + 1)}>
          ❤️
        </button>
      </div>
      <div className="like-count">Total Likes : {likes}</div>
    </section>
  );
}

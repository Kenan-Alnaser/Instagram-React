import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = ({ Data }) => {
  console.log(Data);
  const info = Data.map((obj, i) => {
    const { id, title, location, text, likes, comments, img } = obj;
    return (
      <div class="container" key={id}>
        <div class="gallery">
          <div class="gallery-item" tabindex="0">
            <img src={img} class="gallery-image" alt="" />

            <div class="gallery-item-info">
              <ul>
                <li class="gallery-item-likes">
                  <span class="visually-hidden">Likes:</span>
                  <i class="fas fa-heart" aria-hidden="true"></i> {likes}
                </li>
                <li class="gallery-item-comments">
                  <span class="visually-hidden">Comments:</span>
                  <i class="fas fa-comment" aria-hidden="true"></i> {comments}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <React.Fragment>{info}</React.Fragment>;
};
export default Gallery;

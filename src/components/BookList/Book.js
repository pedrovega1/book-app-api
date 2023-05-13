import React from "react";
import { Link } from "react-router-dom";

const Book = ({
  id,
  cover_img,
  title,
  author,
  edition_count,
  first_publish_year,
}) => {
  return (
    <Link to={`/book/${id}`} className="hover:scale-75">
      <div className="book-item flex flex-col justify-between items-center m-5 shadow-lg rounded-lg">
        <div className="book-item-img mb-2">
          <img
            src={cover_img}
            alt="cover"
            className="rounded-lg w-[145px] h-[175px] mt-4 mb-4"
          />
        </div>
        <div className="book-item-info text-center truncate w-full max-w-full">
          <div className="book-item-info-item title overflow-hidden text-overflow-ellipsis whitespace-nowrap">
            <span>Name: {title}</span>
          </div>
          <div className="book-item-info-item author">
            <span className="text-capitalize">Author: </span>
            <span className="text-red-700">{author.join(", ")}</span>
          </div>
          <div className="book-item-info-item edition-count">
            <span className="text-capitalize">Total Editions: </span>
            <span>{edition_count}</span>
          </div>
          <div className="book-item-info-item publish-year">
            <span className="text-capitalize">First Publish Year: </span>
            <span>{first_publish_year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

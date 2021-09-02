import React from "react";

function NewsItem(props) {
  const { title, details } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{details}</p>
    </div>
  );
}

export default NewsItem;

import React from "react";
import NewsItem from "../NewsItem";

function NewsList(props) {
  const { news } = props;
  return (
    <div>
      {news
        .filter((news, id) => id < 5)
        .map((news, index) => {
          return (
            <NewsItem title={news.title} details={news.details} key={index} />
          );
        })}
    </div>
  );
}

export default NewsList;

import React from 'react';
import NewsItem from './NewsItem';

function NewsListSecond(props) {
    const { news } = props;
    return (
        <div>
            {
                news.filter((news, id) => id > 4 && id < 10).map((news, index) => {
                    return <NewsItem
                        title={news.title}
                        details={news.details}
                        key={index}
                    />
                })
            }
        </div>
    );
}

export default NewsListSecond;

import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import { InfoConsumer } from '../context';

export class News extends Component {
    render() {
        return (
            <InfoConsumer>
                {value => {
                    return value.news.map(item => {
                        return <NewsCard key={item.id} item={item} />
                    })
                }}
            </InfoConsumer>
        )
    }
}

export default News

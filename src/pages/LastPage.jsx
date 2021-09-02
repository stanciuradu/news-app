import React, { Component } from 'react';
import news from '../utils/news.json';
import NewsListLast from '../components/NewsListLast';
export class LastPage extends Component {
    constructor() {
        super();
        this.state = {
            news: []
        }
    }
    handleUpdate(){
        window.location.replace("/");
    }
    componentDidMount() {
        this.setState({ news: news });
        setTimeout(() => this.handleUpdate(), 180000);
    }
    render() {
        return (
            <div>
                <NewsListLast news={this.state.news} />
            </div>
        );
    }
}

export default LastPage;


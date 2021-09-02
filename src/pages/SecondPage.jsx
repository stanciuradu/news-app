import React, { Component } from "react";
import news from "../utils/news.json";
import NewsListSecond from "../components/NewsList/NewsListSecond";
export class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  // functia de rdirctionare catre ultima pagina
  handleredirectPage() {
    window.location.replace("/last_page");
  }
  componentDidMount() {
    this.setState({ news: news });
    // pentru redirectionarea catre o alta pagina dupa 15sec ->folosesc setTimeout()
    setTimeout(() => this.handleredirectPage(), 15000);
  }
  render() {
    return (
      <div>
        <NewsListSecond news={this.state.news} />
      </div>
    );
  }
}

export default SecondPage;

import React, { Component } from "react";
import news from "../utils/news.json";
import NewsList from "../components/NewsListFirst";

export class FirstPage extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  //   functia de redirectionare catre pagina a doua din aplicatie
  handleredirectPage() {
    window.location.replace("/second_page");
  }
  componentDidMount() {
    this.setState({ news: news });
    // pentru redirectionarea catre o alta pagina dupa 15sec ->folosesc setTimeout()
    setTimeout(() => this.handleredirectPage(), 15000);
  }
  render() {
    return (
      <div>
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default FirstPage;

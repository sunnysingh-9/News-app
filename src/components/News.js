import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
  };

    static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "New Tsinghua Unigroup chairman promises fresh start for Chinese chip company - Reuters",
      description:
        'The new chairman of embattled Chinese chip conglomerate Tsinghua Unigroup promised a "new start" for the company in an open letter to staff published on Wednesday.',
      url: "https://www.reuters.com/technology/new-tsinghua-unigroup-chairman-promises-fresh-start-chinese-chip-company-2022-07-13/",
      urlToImage:
        "https://www.reuters.com/resizer/Q0bbmfTvMDsB_hYL23WOIUBKWCw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/65NAHMQWRJLCXGE7VWXTJ4EHOQ.jpg",
      publishedAt: "2022-07-13T07:00:00Z",
      content:
        'SHANGHAI, July 13 (Reuters) - The new chairman of embattled Chinese chip conglomerate Tsinghua Unigroup promised a "new start" for the company in an open letter to staff published on Wednesday.\r\nIn h… [+2324 chars]',
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "namerahsaudfatmi@gmail.com (Namerah Saud Fatmi)",
      title: "Hurry! This Galaxy SmartTag Plus deal won't last forever",
      description:
        "Prime Day festivities are almost halfway through, don't miss out on this deal for Samsung Galaxy SmartTag+ trackers.",
      url: "https://www.androidcentral.com/accessories/hurry-this-galaxy-smarttag-plus-deal-wont-last-forever",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/5NJs4QESuskWYDAoU6tTG3-1200-80.jpg",
      publishedAt: "2022-07-13T01:23:16Z",
      content:
        "We're nearing the end of the first day in the Amazon Prime Day sales. A lot of goodies are running low on stock, so you'd better grab what you want quickly. The Samsung Galaxy SmartTag+ Bluetooth tra… [+1624 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "insider@insider.com (Sarah Saril)",
      title:
        "The 5 best Prime Day Apple Watch deals: Save $120 on the Series 7 for an all-time low price",
      description:
        "Amazon Prime Day is offering all-time low savings on the Apple Watch Series 7, discounting the latest models by $120.",
      url: "https://www.businessinsider.com/guides/deals/amazon-prime-day-apple-watch-deals-2022-7-13",
      urlToImage:
        "https://i.insider.com/62bb65d02224c30018141030?width=1200&format=jpeg",
      publishedAt: "2022-07-13T07:03:46Z",
      content:
        "When you buy through our links, Insider may earn an affiliate commission. Learn more.\r\nAmazon Prime Day is one of the best ways to find serious savings on tech deals, especially from Apple. Day one o… [+2266 chars]",
    },

    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Reviewed, Danny Perez, Reviewed",
      title:
        "Everyone is obsessed with the Waterpik—and it's more than half off for Prime Day",
      description:
        "This dentist-favorite Waterpik water flosser is more than half off for Amazon Prime Day.",
      url: "https://www.usatoday.com/story/money/reviewed/2022/07/12/amazon-prime-day-sale-waterpik-2022/7747743001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/07/13/USAT/2c36295a-1702-42b9-a5b7-8ecabd2385ce-waterpik_hero.png?auto=webp&crop=1911,1075,x8,y0&format=pjpg&width=1200",
      publishedAt: "2022-07-13T00:15:52Z",
      content:
        "— Recommendations are independently chosen by Reviewed’s editors. Purchases you make through our links may earn us a commission.\r\nAmazon Prime Day is here with sweeping sales to upgrade every facet o… [+3192 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title: "Looking for a new Mac? The M1 MacBook Air is still a good option",
      description:
        "Apple last month announced two new MacBooks: the M2 MacBook Air and the M2 MacBook Pro. Yes, they bring the latest Apple Silicon chip with performance improvements and when it comes to the new MacBook Air, there’s also the new design. But if you’re looking fo…",
      url: "https://9to5mac.com/2022/07/12/m1-macbook-air-is-still-a-good-option/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/03/M1-MacBook-Air.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-07-13T02:01:05Z",
      content:
        "Apple last month announced two new MacBooks: the M2 MacBook Air and the M2 MacBook Pro. Yes, they bring the latest Apple Silicon chip with performance improvements and when it comes to the new MacBoo… [+3371 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Parth Shah",
      title:
        "iOttie’s universal car mounts are the automotive Prime Day deals you absolutely can't miss",
      description: "Who needs built-in Android Auto, anyway?",
      url: "https://www.androidpolice.com/iotties-universal-car-mount-phone-prime-day-deal/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2019/01/iottieEOT-Connect_city_lifestyle.png",
      publishedAt: "2022-07-13T02:27:49Z",
      content:
        "When you plan an off-roading trip or a long drive on the weekend, a universal car phone mount is a must-have accessory. A car phone mount can come in handy to receive calls, get turn-by-turn directio… [+1979 chars]",
    },
  ];

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
   }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-Newsfox`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eb83f76cd494a59958b664307ff04ba&page=1&pageSize=${this.state.pageSize}`;
    // this.setData({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      // loading:false
    });
  }
  async update(){
     let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7eb83f76cd494a59958b664307ff04ba&page=${
      this.state.page - 1
     }&pageSize=${this.state.pageSize}`;
     this.setData({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({
      page: this.state.page - 1,
       articles: parsedData.articles,
     loading: false
     });

  };
  handleNext = async () => {
    // if (
    //   this.state.page > Math.ceil(this.state.totalResults / this.state.pageSize)
    // ) {
      
    // } 
    // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=7eb83f76cd494a59958b664307ff04ba&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.state.pageSize}`;
    //   // this.setData({loading:true});
    //   console.log("next");
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     // loading:false
      });
    // }
    this.update();
  };
  handlePrevious = async () => {
    console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=7eb83f76cd494a59958b664307ff04ba&page=${
    //   this.state.page - 1
    // }&pageSize=${this.state.pageSize}`;
    // // this.setData({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   // loading: false
    });
    this.update();
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">NEWSFOX TOP HEADLINES</h1>
          {/* <h2>NEWSFOX TOP HEADLINES</h2> */}
          <div className="row md-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-4 my-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url} author={element.author} date = {element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page >
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

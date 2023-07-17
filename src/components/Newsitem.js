import React, { Component } from 'react'


export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,date} = this.props;
    return (
      <div>
       <div className="card" style={{width:"25rem"}}>
  <img src={!imageurl?"https://static1.anpoimages.com/wordpress/wp-content/uploads/2019/01/iottieEOT-Connect_city_lifestyle.png": imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a  rel="noreferrer" href={newsurl} target= "_blank" className="btn btn-sm btn-primary">Read more</a>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {date}</small> </p>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem;

import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://media.istockphoto.com/photos/news-television-studio-picture-id1064110466?k=20&m=1064110466&s=612x612&w=0&h=k9xcIkdXoLk9f84JghhWq7jqMziSa1te8UqWZkmrwKo=":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"><strong>By, {author?author:"Unknown Source"} on {new Date(date).toTimeString()} </strong></small></p>
            <span className="badge rounded-pill bg-success m-1 text-center" style={{height: "25px"}}>{source}</span>
            <a rel="noreferrer" href={newsUrl} target={'_blank'} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
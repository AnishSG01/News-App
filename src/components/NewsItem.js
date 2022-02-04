import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, url, author, date, source } = this.props;
        let d = new Date(date);
        return (
            <div>
                <div className="card mb-5">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-danger" >
                            {source}
                        </span>
                    </div>


                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {d.toGMTString()}</small></p>
                        <a rel='noreferrer' href={url} target="_blank" className="btn btn-sm btn-primary">View more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

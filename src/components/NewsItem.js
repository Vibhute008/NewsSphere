import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl,newsUrl, author, date } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={!imageUrl? 'https://bitsofco.de/img/Qo5mfYDE5v-350.avif' : imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text my-1">{description}...</p>
                        <p className="card-text my-0 d-flex flex-row"><small className="text-muted"><b>Author</b> : {!author ? <i>Unkown</i>: author}</small></p>
                        <p className="card-text my-0 d-flex flex-row"><small className="text-muted"><b>Published At : </b> {!new Date(date).toGMTString()? <i>Unknown</i> : new Date(date).toGMTString() }</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

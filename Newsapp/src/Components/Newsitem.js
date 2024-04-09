import React from 'react'

const Newsitem = (props) => {
    let { title, description, imgurl, newsurl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{ display: "flex", justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                    <span className=" badge rounded-pill bg-danger" >{source}
                    </span>
                </div>
                <img src={imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">READ MORE</a>
                </div>
            </div>
        </div>
    )
}
export default Newsitem

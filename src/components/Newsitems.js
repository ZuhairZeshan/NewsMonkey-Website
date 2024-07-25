import React from 'react'

const Newsitems = (props) => {

    let {title,description,imageurl,newsurl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageurl} className="card-img-top" alt="News"/>
            <div className="card-body" >
                <h5 className="card-title">{title}...<span class="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:"50%",zIndex:'1'}}>{source}</span></h5>
                <p className="card-text">{description}...</p>
                <p class="card-text"><small class="text-body-secondary">By {author? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}


export default Newsitems;

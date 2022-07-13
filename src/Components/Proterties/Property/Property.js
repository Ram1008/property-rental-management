import React from 'react';
import {Link} from 'react-router-dom';
const Property = (props) => {
    return (
        <div className="card" style={{ width: " 18rem" }}>
            <img src={props.src} className="card-img-top" alt = "image" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-title text-muted">size {props.size}</h6>
                <h6 className="card-title text-muted">{props.noOfFlats} Flats</h6>
                <h6 className="card-title text-muted">Flats Occupied {props.noOfTenents}</h6>
                <Link to={"/details/" + props.name} className="btn btn-info">View Details</Link>
            </div>
        </div>
    )
}

export default Property
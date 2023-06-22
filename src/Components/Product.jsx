import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function Product(props) {

    return (    
            <div className="col p-3">
                <div className="card h-100">
                    <img src={props.imgUrl} className="card-img-top p-2" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title fw-bold">{props.name}</h5>
                    <p className="card-text text-muted">{props.description}</p>
                    <Link to={`/productdetails/${props.id}`}>
                        <Button className="btn" style={{backgroundColor: "#001066"}} size="lg">Place Order</Button>
                    </Link>
                    <span className="ms-5">{props.price}</span>
                    </div>
                </div>
            </div>
    )
}
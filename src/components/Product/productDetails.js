import React from "react";
import { useLocation } from "react-router-dom";
import "./_productdetail.scss"

const ProductDetails = (props) => {
    const location = useLocation()
    const item  = location.state
    console.log("Props Location ",item);
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={item.imageSrc} />
                </div>
                <div className="col-lg-6">

                    <div className="product_details_text">
                        <h3>{item.name}</h3>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="product_details_price">
                            {`$ ${parseFloat(item.price).toFixed(2)}`}
                        </div>
                        <p>
                            Description goes here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
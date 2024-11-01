import React from 'react';
import '../styles/Card.css';

const Card = ({ product, category, defaultImages, onAddToCart }) => {
    // Determine the image source
    const imageSrc = product.image ? `http://path-to-your-image-server/${product.image}` : defaultImages[category];

    return (
        <div className="card">
            <img src={imageSrc} alt={product.productname} className="card-image" />
            <h3 className="card-title">{product.productname}</h3>
            <p className="card-price">${product.price.toFixed(2)}</p>
            <p className="card-quantity">Quantity: {product.quantity}</p>
            <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default Card;

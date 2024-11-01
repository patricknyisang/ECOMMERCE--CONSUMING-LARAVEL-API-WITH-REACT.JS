import React from 'react';
import '../styles/payment.css'; // Ensure you have your styles for the modal

const PaymentModal = ({ isOpen, onClose, product, onProceedToPayment }) => {
    if (!isOpen) return null; // If modal is not open, return nothing

    const quantity = 1; // Set default quantity to 1

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{product.productname}</h2>
                <label htmlFor="price">Amount To Pay $:</label>
                <input
                    type="text"
                    id="price"
                    value={`${product.price.toFixed(2)}`} // Display the price
                    readOnly // Make the input read-only
                    className="readonly-input" // Optional: Add a class for styling
                />
                <p>Quantity: {quantity}</p> {/* Display fixed quantity */}
                <button className="payment-button" onClick={() => onProceedToPayment({ ...product, quantity })}>
                    Proceed to Payment
                </button>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default PaymentModal;

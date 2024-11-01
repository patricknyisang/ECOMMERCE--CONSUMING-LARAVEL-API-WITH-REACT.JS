import React, { useEffect, useState } from 'react';
import Header from '../components/MainHeader';
import '../styles/Homepage.css';
import Card from './Card';
import Modal from './PaymentModal'; // Import the Modal component

const categories = [
    {
        name: "E-Books",
        url: "http://127.0.0.1:8000/api/getebookproducts"
    },
    {
        name: "Musics",
        url: "http://127.0.0.1:8000/api/getmusicproducts"
    },
    {
        name: "Videos",
        url: "http://127.0.0.1:8000/api/getvideoproducts"
    },
    {
        name: "Print-on-Demand",
        url: "http://127.0.0.1:8000/api/getondemanproducts"
    }
];

const defaultImages = {
    "E-Books": "https://via.placeholder.com/200x200.png?text=E-Book",
    "Musics": "https://via.placeholder.com/200x200.png?text=Music",
    "Videos": "https://via.placeholder.com/200x200.png?text=Video",
    "Print-on-Demand": "https://via.placeholder.com/200x200.png?text=Print-On-Demand"
};

const Dashboard = () => {
    const [products, setProducts] = useState({});
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
    const [selectedProduct, setSelectedProduct] = useState(null); // Product to display in modal

    useEffect(() => {
        const fetchData = async () => {
            const allProducts = {};

            for (const category of categories) {
                try {
                    const response = await fetch(category.url);
                    const data = await response.json();
                    allProducts[category.name] = data;
                } catch (error) {
                    console.error(`Error fetching ${category.name}:`, error);
                }
            }

            setProducts(allProducts);
        };

        fetchData();
    }, []);

    const onAddToCart = (product) => {
        setSelectedProduct(product); // Set the selected product
        setIsModalOpen(true); // Open the modal
    };

    const onCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedProduct(null); // Clear the selected product
    };

    const onProceedToPayment = (product) => {
        // Handle payment logic here
        console.log(`Proceeding to payment for: ${product.productname}`);
        // You can navigate to a payment page or perform other actions
        onCloseModal(); // Close the modal after proceeding
    };

    return (
        <div className="dashboard">
            <div className="content">
                <Header />
                <div className="dashboard-content">
                    <div className="table-container">
                        {categories.map((category) => (
                            <div key={category.name}>
                                <h2>{category.name}</h2>
                                <div className="card-container">
                                    {products[category.name] && products[category.name].map((product) => (
                                        <Card 
                                            key={product.id} 
                                            product={product} 
                                            category={category.name} 
                                            defaultImages={defaultImages} 
                                            onAddToCart={onAddToCart} // Pass the function as a prop
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Render the Modal */}
                    <Modal 
                        isOpen={isModalOpen} 
                        onClose={onCloseModal} 
                        product={selectedProduct} 
                        onProceedToPayment={onProceedToPayment} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

const Products = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [productlist, setProducts] = useState([]);
  
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [categorieslist, setCategories] = useState([]);
    const [category2, setCategory] = useState('');
      const [productname, setProducts2] = useState('');
      const [price, setPrice] = useState('');
      const [quantity, setQuantity] = useState('');
      const [image, setImage] = useState('');
    useEffect(() => {
        // Fetch gender options
        axios.get(`http://127.0.0.1:8000/api/getcategories`)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching gender:', error);
            });
    }, []);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/getproducts`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };



    const openCreateModal = () => {
        setCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setCreateModalOpen(false);
      
    };




    const handleCreateProduct = (e) => {
        e.preventDefault();
    
        // Log the data being sent
        const productData = {
             "CategoryId": category2,
            "ProductName": productname,
            "ProductPrice": price,
            "ProductImage": '',
            "ProductStock": quantity,
        };
        
        console.log('Data to be posted:', productData); // Log the data
    
        axios.post('http://127.0.0.1:8000/api/storeproduct', productData)
            .then(response => {
                console.log('Created successfully:', response.data);
                // Clear form fields after successful registration if needed
                setCategory('');
                setProducts2('');
                setPrice('');
                setQuantity('');
                setImage(''); // Clear the image field as well
            })
            .catch(error => {
                console.error('Error registering product:', error);
            });
    };
    
    return (
        <div className={`layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            {/* Sidebar */}
            <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
                <h2>My Sidebar</h2>
                <ul>
                
                <li><Link to="/Products" className="sidebar-link">Home</Link></li>
<li><Link to="/categories" className="sidebar-link">Categories</Link></li>
<li><Link to="/Products" className="sidebar-link">Users</Link></li>
<li><Link to="/" className="sidebar-link">Logout</Link></li>


                </ul>
            </div>

            {/* Topbar */}
            <div className="topbar">
                <button className="menu-button" onClick={toggleSidebar}>
                    ☰
                </button>
                <h2>Responsive Dashboard</h2>
                <div className="user-info">
                    <span>Welcome, User!</span>
                    <button className="logout-button">Logout</button>
                </div>
            </div>

            {/* Main content */}
            <div className="main-content">
                <h3>Main Content</h3>
                <p>Products</p>

                {/* Create Product Button */}
                <button onClick={openCreateModal} className="btn btn-primary">Create New Product</button>

                {/* Responsive Table */}
                <div className="table-responsive">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productlist.length > 0 ? (
                                productlist.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td><img src={product.image} alt={product.productname} style={{ width: '50px' }} /></td>
                                        <td>{product.catid}</td>
                                        <td>{product.productname}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                         
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No Data found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Create Product Modal */}
            <Modal
                isOpen={isCreateModalOpen}
                onRequestClose={closeCreateModal}
                contentLabel="Create New Product"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <h2>Create New Product</h2>
                <form onSubmit={handleCreateProduct}>
                    <div className="form-group">
                        <label htmlFor="category2">Category</label>
                        <select id="category2" name="category2" value={category2} onChange={(e) => setCategory(e.target.value)}>
                            <option value="category2">-- Select Category --</option>
                            {categorieslist.map(categorieslist2=> (
                                <option key={categorieslist2.id} value={categorieslist2.id}>
                                    {categorieslist2.category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            name="productname"
                            value={productname}
                            onChange={(e) => setProducts2(e.target.value)}
                            required
                        />
                    </div>
                    <div>
    <label>Product Image:</label>
    <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])} // Set the first file
        required
    />
</div>

                    <div>
                        <label>Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                
                    <button type="submit">Create Product</button>
                    <button type="button" onClick={closeCreateModal}>Cancel</button>
                </form>
            </Modal>
        </div>
    );
};

export default Products;

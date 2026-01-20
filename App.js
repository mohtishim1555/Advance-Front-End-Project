import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, Package, Search, Star, Trash2, Plus, Minus } from 'lucide-react';

// Inline Styles
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.nav-logo p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu li:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-menu li.active {
  background-color: rgba(255, 255, 255, 0.3);
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff4757;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.home-page {
  animation: fadeIn 0.5s ease-in;
}

.hero-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: slideDown 0.8s ease-out;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-button {
  background-color: white;
  color: #667eea;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.categories-section {
  margin-bottom: 3rem;
}

.categories-section h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #333;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.category-card {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.category-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #667eea;
}

.category-card p {
  color: #666;
  font-size: 1rem;
}

.featured-section h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #333;
}

.products-page h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.products-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 250px;
}

.search-bar input {
  border: none;
  outline: none;
  font-size: 1rem;
  margin-left: 0.5rem;
  width: 100%;
}

.filter-buttons {
  display: flex;
  gap: 1rem;
}

.filter-buttons button {
  padding: 0.8rem 1.5rem;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.filter-buttons button:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.filter-buttons button.active {
  background: #667eea;
  color: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.product-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.category-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.8rem;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.4rem;
  font-weight: 700;
  color: #667eea;
}

.add-to-cart-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background: #5568d3;
  transform: scale(1.05);
}

.add-to-cart-btn.added {
  background: #2ecc71;
}

.no-products {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.2rem;
}

.cart-page h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.empty-cart {
  text-align: center;
  padding: 4rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.empty-cart svg {
  color: #ccc;
  margin-bottom: 1rem;
}

.empty-cart h2 {
  color: #666;
  margin-bottom: 0.5rem;
}

.empty-cart p {
  color: #999;
}

.cart-items {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  transition: background 0.3s ease;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item:hover {
  background: #f9f9f9;
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  color: #333;
}

.cart-item-category {
  font-size: 0.9rem;
  color: #999;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
}

.cart-item-price {
  font-size: 1.2rem;
  font-weight: 600;
  color: #667eea;
}

.cart-item-controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 50px;
}

.quantity-controls button {
  background: #667eea;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.quantity-controls button:hover {
  background: #5568d3;
  transform: scale(1.1);
}

.quantity-controls span {
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.item-total {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  min-width: 120px;
}

.remove-btn {
  background: #ff4757;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: #ee5a6f;
  transform: scale(1.1);
}

.cart-summary {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
}

.summary-row.total {
  border-top: 2px solid #667eea;
  border-bottom: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-top: 1rem;
}

.checkout-btn {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
}

.checkout-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.footer {
  background: #2c3e50;
  color: white;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #667eea;
}

.footer-section p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.footer-section ul li:hover {
  opacity: 1;
  transform: translateX(5px);
  color: #667eea;
}

.footer-bottom {
  background: #1a252f;
  padding: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  opacity: 0.8;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-menu {
    gap: 1rem;
  }

  .nav-menu li span {
    display: none;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .products-controls {
    flex-direction: column;
  }

  .filter-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .cart-item {
    flex-direction: column;
    text-align: center;
  }

  .cart-item-controls {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }
}
`;

// Dummy Product Data
const productsData = [
  // Garments
  { id: 1, name: 'Premium Cotton T-Shirt', category: 'garments', price: 1299, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', rating: 4.5, description: 'Comfortable cotton t-shirt for everyday wear' },
  { id: 2, name: 'Denim Jeans - Slim Fit', category: 'garments', price: 2499, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', rating: 4.8, description: 'Classic slim-fit denim jeans' },
  { id: 3, name: 'Casual Shirt - Checkered', category: 'garments', price: 1799, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', rating: 4.3, description: 'Stylish checkered casual shirt' },
  { id: 4, name: 'Formal Blazer - Black', category: 'garments', price: 4999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', rating: 4.7, description: 'Elegant black blazer for formal occasions' },
  { id: 5, name: 'Summer Dress - Floral', category: 'garments', price: 2299, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', rating: 4.6, description: 'Beautiful floral summer dress' },
  { id: 6, name: 'Sports Jacket - Blue', category: 'garments', price: 3499, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', rating: 4.4, description: 'Lightweight sports jacket' },
  
  // Cosmetics
  { id: 7, name: 'Hydrating Face Cream', category: 'cosmetics', price: 899, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400', rating: 4.9, description: 'Moisturizing face cream for all skin types' },
  { id: 8, name: 'Matte Lipstick Set', category: 'cosmetics', price: 1499, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', rating: 4.7, description: 'Set of 5 matte lipsticks in trendy shades' },
  { id: 9, name: 'Anti-Aging Serum', category: 'cosmetics', price: 1999, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400', rating: 4.8, description: 'Powerful anti-aging serum with vitamins' },
  { id: 10, name: 'Eye Shadow Palette', category: 'cosmetics', price: 1299, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400', rating: 4.6, description: '12-color eye shadow palette' },
  { id: 11, name: 'Perfume - Floral Essence', category: 'cosmetics', price: 2499, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', rating: 4.5, description: 'Long-lasting floral fragrance' },
  { id: 12, name: 'Sunscreen SPF 50+', category: 'cosmetics', price: 799, image: 'https://images.unsplash.com/photo-1556228852-80c3b5732fe9?w=400', rating: 4.9, description: 'Broad spectrum sun protection' },
];

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Saad Amjad</h1>
          <p>Garments & Cosmetics</p>
        </div>
        
        <ul className="nav-menu">
          <li onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>
            <Home size={20} />
            <span>Home</span>
          </li>
          <li onClick={() => setCurrentPage('products')} className={currentPage === 'products' ? 'active' : ''}>
            <Package size={20} />
            <span>Products</span>
          </li>
          <li onClick={() => setCurrentPage('cart')} className={currentPage === 'cart' ? 'active' : ''}>
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Product Card Component
const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="category-badge">{product.category}</span>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          <Star size={16} fill="#ffd700" color="#ffd700" />
          <span>{product.rating}</span>
        </div>
        <div className="product-footer">
          <span className="product-price">Rs. {product.price.toLocaleString()}</span>
          <button 
            className={`add-to-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = ({ addToCart, setCurrentPage }) => {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Saad Amjad Store</h1>
          <p>Your one-stop destination for premium garments and cosmetics</p>
          <button className="cta-button" onClick={() => setCurrentPage('products')}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card" onClick={() => setCurrentPage('products')}>
            <div className="category-icon">👔</div>
            <h3>Garments</h3>
            <p>Trendy clothing for every occasion</p>
          </div>
          <div className="category-card" onClick={() => setCurrentPage('products')}>
            <div className="category-icon">💄</div>
            <h3>Cosmetics</h3>
            <p>Premium beauty products</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {productsData.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Products Page Component
const ProductsPage = ({ addToCart }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      
      {/* Search and Filter */}
      <div className="products-controls">
        <div className="search-bar">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Products
          </button>
          <button 
            className={filter === 'garments' ? 'active' : ''}
            onClick={() => setFilter('garments')}
          >
            Garments
          </button>
          <button 
            className={filter === 'cosmetics' ? 'active' : ''}
            onClick={() => setFilter('cosmetics')}
          >
            Cosmetics
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

// Cart Page Component
const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <ShoppingCart size={64} />
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-price">Rs. {item.price.toLocaleString()}</p>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="item-total">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Rs. 200</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>Rs. {(totalPrice + 200).toLocaleString()}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Saad Amjad</h3>
          <p>Garments & Cosmetics</p>
          <p>Your trusted shopping destination</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@saadamjad.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Saad Amjad Garments & Cosmetics. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  // State Management using React Hooks
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);

  // Load cart from memory on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    setCart(savedCart);
  }, []);

  // Save cart to memory whenever it changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update Quantity Function
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove from Cart Function
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Calculate total cart items
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <style>{styles}</style>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} cartCount={cartCount} />
      
      <main className="main-content">
        {currentPage === 'home' && <HomePage addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && <ProductsPage addToCart={addToCart} />}
        {currentPage === 'cart' && <CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
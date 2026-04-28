import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        id: 1,
        name: 'Spider Plant',
        price: 12.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.JPG/320px-Chlorophytum_comosum_0001.JPG',
        description: 'Excellent air purifier, easy to grow.',
      },
      {
        id: 2,
        name: 'Peace Lily',
        price: 14.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/320px-Spathiphyllum_cochlearispathum_RTBG.jpg',
        description: 'Removes toxins and blooms beautifully.',
      },
      {
        id: 3,
        name: 'Snake Plant',
        price: 10.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/320px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg',
        description: 'Low maintenance, great air purifier.',
      },
      {
        id: 4,
        name: 'Aloe Vera',
        price: 9.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/320px-Aloe_vera_flower_inset.png',
        description: 'Purifies air and soothes skin.',
      },
      {
        id: 5,
        name: 'Bamboo Palm',
        price: 18.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dypsis_lutescens1.jpg/320px-Dypsis_lutescens1.jpg',
        description: 'Natural air humidifier and cleanser.',
      },
      {
        id: 6,
        name: 'Rubber Plant',
        price: 15.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_26022012.jpg/320px-Ficus_elastica_26022012.jpg',
        description: 'Bold leaves, cleans indoor air.',
      },
    ],
  },
  {
    category: 'Low Light Plants',
    plants: [
      {
        id: 7,
        name: 'Pothos',
        price: 7.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Epipremnum_aureum_31082012.jpg/320px-Epipremnum_aureum_31082012.jpg',
        description: 'Thrives in low light conditions.',
      },
      {
        id: 8,
        name: 'ZZ Plant',
        price: 13.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Zamioculcas_zamiifolia.jpg/320px-Zamioculcas_zamiifolia.jpg',
        description: 'Nearly indestructible, glossy leaves.',
      },
      {
        id: 9,
        name: 'Cast Iron Plant',
        price: 16.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Aspidistra_elatior1.jpg/320px-Aspidistra_elatior1.jpg',
        description: 'Tolerates deep shade perfectly.',
      },
      {
        id: 10,
        name: 'Dracaena',
        price: 11.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Dracaena_marginata_2.jpg/320px-Dracaena_marginata_2.jpg',
        description: 'Decorative and easy in low light.',
      },
      {
        id: 11,
        name: 'Chinese Evergreen',
        price: 14.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Aglaonema_commutatum.jpg/320px-Aglaonema_commutatum.jpg',
        description: 'Colorful, versatile and adaptable.',
      },
      {
        id: 12,
        name: 'Philodendron',
        price: 9.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Philodendron_hederaceum_-_Wikidata.jpg/320px-Philodendron_hederaceum_-_Wikidata.jpg',
        description: 'Fast-growing and low maintenance.',
      },
    ],
  },
  {
    category: 'Succulents and Cacti',
    plants: [
      {
        id: 13,
        name: 'Echeveria',
        price: 6.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Echeveria_pulidonis.jpg/320px-Echeveria_pulidonis.jpg',
        description: 'Beautiful rosette-shaped succulent.',
      },
      {
        id: 14,
        name: 'Jade Plant',
        price: 11.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jade_plant.jpg/320px-Jade_plant.jpg',
        description: 'Lucky money plant, easy to grow.',
      },
      {
        id: 15,
        name: 'Barrel Cactus',
        price: 13.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ferocactus_wislizeni.jpg/320px-Ferocactus_wislizeni.jpg',
        description: 'Classic desert cactus, low water.',
      },
      {
        id: 16,
        name: 'Haworthia',
        price: 8.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Haworthia_attenuata_1.jpg/320px-Haworthia_attenuata_1.jpg',
        description: 'Small, elegant, perfect for desks.',
      },
      {
        id: 17,
        name: 'Prickly Pear',
        price: 10.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Opuntia_sp._%28Cactaceae%29.jpg/320px-Opuntia_sp._%28Cactaceae%29.jpg',
        description: 'Colorful paddle cactus, drought hardy.',
      },
      {
        id: 18,
        name: 'Sedum',
        price: 7.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sedum_spurium_Sch%C3%B6nbrunner_Freude_2.jpg/320px-Sedum_spurium_Sch%C3%B6nbrunner_Freude_2.jpg',
        description: 'Hardy groundcover succulent.',
      },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedIds, setAddedIds] = useState([]);

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedIds((prev) => [...prev, plant.id]);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Paradise Nursery</h2>
        </div>
        <ul className="navbar-links">
          <li>
            
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}
            >
              Home
            </a>
          </li>
          <li>
            
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate('products'); }}
            >
              Plants
            </a>
          </li>
          <li>
            
              href="#"
              className="cart-icon"
              onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}
            >
              <span role="img" aria-label="cart">🛒</span>
              {totalCartCount > 0 && (
                <span className="cart-count">{totalCartCount}</span>
              )}
            </a>
          </li>
        </ul>
      </nav>

      <div className="product-list">
        <h1>Our Plant Collection</h1>

        {plantsData.map((categoryData) => (
          <div key={categoryData.category} className="category-section">
            <h2>{categoryData.category}</h2>
            <div className="plants-grid">
              {categoryData.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />
                  <h3>{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedIds.includes(plant.id)}
                  >
                    {addedIds.includes(plant.id) ? 'Added to Cart ✓' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

export default ProductList;

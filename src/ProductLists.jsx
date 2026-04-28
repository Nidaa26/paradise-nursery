import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Spider Plant', price: 12.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.JPG/320px-Chlorophytum_comosum_0001.JPG' },
      { id: 2, name: 'Peace Lily', price: 14.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/320px-Spathiphyllum_cochlearispathum_RTBG.jpg' },
      { id: 3, name: 'Snake Plant', price: 10.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/320px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
      { id: 4, name: 'Aloe Vera', price: 9.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/320px-Aloe_vera_flower_inset.png' },
      { id: 5, name: 'Bamboo Palm', price: 18.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dypsis_lutescens1.jpg/320px-Dypsis_lutescens1.jpg' },
      { id: 6, name: 'Rubber Plant', price: 15.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_26022012.jpg/320px-Ficus_elastica_26022012.jpg' },
    ],
  },
  {
    category: 'Low Light Plants',
    plants: [
      { id: 7, name: 'Pothos', price: 7.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Epipremnum_aureum_31082012.jpg/320px-Epipremnum_aureum_31082012.jpg' },
      { id: 8, name: 'ZZ Plant', price: 13.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Zamioculcas_zamiifolia.jpg/320px-Zamioculcas_zamiifolia.jpg' },
      { id: 9, name: 'Cast Iron Plant', price: 16.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Aspidistra_elatior1.jpg/320px-Aspidistra_elatior1.jpg' },
      { id: 10, name: 'Dracaena', price: 11.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Dracaena_marginata_2.jpg/320px-Dracaena_marginata_2.jpg' },
      { id: 11, name: 'Chinese Evergreen', price: 14.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Aglaonema_commutatum.jpg/320px-Aglaonema_commutatum.jpg' },
      { id: 12, name: 'Philodendron', price: 9.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Philodendron_hederaceum_-_Wikidata.jpg/320px-Philodendron_hederaceum_-_Wikidata.jpg' },
    ],
  },
  {
    category: 'Succulents and Cacti',
    plants: [
      { id: 13, name: 'Echeveria', price: 6.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Echeveria_pulidonis.jpg/320px-Echeveria_pulidonis.jpg' },
      { id: 14, name: 'Jade Plant', price: 11.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jade_plant.jpg/320px-Jade_plant.jpg' },
      { id: 15, name: 'Barrel Cactus', price: 13.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ferocactus_wislizeni.jpg/320px-Ferocactus_wislizeni.jpg' },
      { id: 16, name: 'Haworthia', price: 8.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Haworthia_attenuata_1.jpg/320px-Haworthia_attenuata_1.jpg' },
      { id: 17, name: 'Prickly Pear', price: 10.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Opuntia_sp._%28Cactaceae%29.jpg/320px-Opuntia_sp._%28Cactaceae%29.jpg' },
      { id: 18, name: 'Sedum', price: 7.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sedum_spurium_Sch%C3%B6nbrunner_Freude_2.jpg/320px-Sedum_spurium_Sch%C3%B6nbrunner_Freude_2.jpg' },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedIds, setAddedIds] = useState([]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedIds(prev => [...prev, plant.id]);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <ul className="navbar-links">
          <li><a href="#" onClick={() => onNavigate('landing')}>Home</a></li>
          <li><a href="#" onClick={() => onNavigate('products')}>Plants</a></li>
          <li>
            <a href="#" onClick={() => onNavigate('cart')} className="cart-icon">
              🛒
              {totalCartCount > 0 && (
                <span className="cart-count">{totalCartCount}</span>
              )}
            </a>
          </li>
        </ul>
      </nav>

      <div className="product-list">
        <h1>Our Plants</h1>
        {plantsData.map(category => (
          <div key={category.category} className="category-section">
            <h2>{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map(plant => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedIds.includes(plant.id)}
                  >
                    {addedIds.includes(plant.id) ? 'Added ✓' : 'Add to Cart'}
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

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from './asyncMock';
import Detalles from './ItemDetail';

function ItemListContainer() {
  const { categories } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (!categories || categories === 'Inicio') { 
          const allProducts = await getProducts();
          setProducts(allProducts);
        } else {
          const categoriesArray = categories.split(',');
          const productsByCategory = [];

          for (const cat of categoriesArray) {
            const response = await getProductsByCategory(cat.trim());
            productsByCategory.push(...response);
          }

          setProducts(productsByCategory);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [categories]);

  if (loading) {
    return <p className="mt-4">Cargando productos...</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Productos en la categoría {categories || 'Inicio'}</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Detalles product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

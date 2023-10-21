import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './asyncMock'; // Asegúrate de importar getProductById desde el módulo correcto
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  useEffect(() => {
    getProductById(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
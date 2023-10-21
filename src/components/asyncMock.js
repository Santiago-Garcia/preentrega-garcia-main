import auricular from './assets/auriculares.jpg';
import reloj from './assets/reloj.jpg';
import prox_articulos from './assets/prox_articulos.png'

const products = [
  {
    id: 'auricular',
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    image: auricular,
  },
  {
    id: 'reloj', // Debes usar cadenas para los IDs en todo el objeto.
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    image: reloj
  },
  {
    id: 'Proximamente',
    name: 'Producto 3',
    description: 'Descripción del Producto 3',
    image: prox_articulos
  },
  {
    id: 'proximamente',
    name: 'Proximamente',
    description: 'Descripción del Producto 4',
    image: prox_articulos
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(products);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const filteredProducts = products.filter((product) => product.category === category);
    resolve(filteredProducts);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const product = products.find((product) => product.id === id);
    resolve(product);
  });
};

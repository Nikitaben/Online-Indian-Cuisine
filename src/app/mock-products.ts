import { Product } from './models/product';
import { Size } from './models/size';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Tandoori Desi Pizza',
    price: 14.99,
    description: 'Freshly baked pizza with Paneer Tikka cubes, onions, green peppers and mozzarella cheese. Garnished with cilantro. Sure to be a hit with veggie lovers',
    imageUrl: '../assets/Tandoori Paneer Naan Pizza.jpg',
    toppings: [],
    sizes: [Size.LARGE, Size.MEDIUM, Size.SMALL]
  },
 {
   id: 2,
  name: 'Masala Fries',
  price: 5.99,
  description: 'Signature Seasoned Fries. A little on a tingled side',
  imageUrl: '../assets/Masala Fries.jpg',
  toppings: [],
  sizes: [Size.SMALL, Size.LARGE]
 },

];

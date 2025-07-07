import shoe1 from '../assets/images/shoeList/shoe_detail_1.avif'

export const PRODUCTS = [
  {
    image: new URL('../assets/images/shoeList/shoe_detail_1.avif', import.meta.url).href, // use new URL(..., import.meta.url) to import images src in vue3
    title: 'Nike Air Max Dn',
    category: "Men's Shoes",
    color: '1 color',
    price: '$99.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_2.avif', import.meta.url).href,
    title: 'Nike Air VaporMax Plus',
    category: 'Unisex Shoes',
    color: '2 color',
    price: '$199.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_3.avif', import.meta.url).href,
    title: 'Nike Dunk Low Retro',
    category: "Men's Shoes",
    color: '1 color',
    price: '$79.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_4.avif', import.meta.url).href,
    title: 'Nike Field General "Blue Suede"',
    category: "Women's Shoes",
    color: '3 color',
    price: '$99.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_5.avif', import.meta.url).href,
    title: 'Nike Field General Suede',
    category: 'Unisex Shoes',
    color: '2 color',
    price: '$299.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_6.avif', import.meta.url).href,
    title: 'Nike Shox TL',
    category: "Men's Shoes",
    color: '2 color',
    price: '$149.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_7.avif', import.meta.url).href,
    title: 'Air Jordan 3 Retro "Lucky Shorts"',
    category: "Men's Shoes",
    color: '2 color',
    price: '$199.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_8.avif', import.meta.url).href,
    title: 'Air Jordan 4 RM',
    category: "Women's Shoes",
    color: '3 color',
    price: '$129.99',
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_9.avif', import.meta.url).href,
    title: "Nike Air Max Uptempo '95",
    category: "Men's Shoes",
    color: '1 color',
    price: '$79.99',
  },
]

export const CATEGORIES = [
  { name: 'Running', count: 100 },
  { name: 'Baseketball', count: 50 },
  { name: 'Football', count: 30 },
  { name: 'Skateboarding', count: 20 },
  { name: 'Golf', count: 20 },
  { name: 'Tennis', count: 20 },
  { name: 'Athletics', count: 20 },
  { name: 'Walking', count: 20 },
  { name: 'Boots', count: 20 },
  { name: 'Casual', count: 20 },
  { name: 'Lifestyle', count: 20 },
  { name: 'Sandals', count: 20 },
  { name: 'Accessories', count: 20 },
]

export const COLORSLIST = [
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Green', hex: '#00FF00' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Brown', hex: '#8B4513' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Cyan', hex: '#00FFFF' },
]

export const SORTOPTIONS = [
  { label: 'Price: Low to High', value: 'price_low_high' },
  { label: 'Price: High to Low', value: 'price_high_low' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Selling', value: 'best_selling' },
]

export const SIZELIST = [
  1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
  12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
]

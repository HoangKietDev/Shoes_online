

export const PRODUCTS = [
  {
    image: new URL('../assets/images/shoeList/shoe_detail_1.avif', import.meta.url).href, // use new URL(..., import.meta.url) to import images src in vue3
    title: 'Nike Air Max Dn',
    category: "Men's Shoes",
    description: 'The Nike Air Max 97 keeps a sneaker icon going strong with the same design details that made it famous: water-ripple lines, reflective piping and full-length Max Air cushioning.',
    color: '1 color',
    price: '$99.99',
    images: [
        new URL('../assets/images/shoeDetail/shoeDetail_1_image1.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_1_image2.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_1_image3.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_1_image4.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_1_image5.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_1_image6.avif', import.meta.url).href,
    ],
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 1
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_2.avif', import.meta.url).href,
    title: 'Nike Air VaporMax Plus',
    category: 'Unisex Shoes',
    description: 'The Nike Air VaporMax Plus combines the classic Air Max Plus upper with the revolutionary VaporMax sole for a unique look and feel.',
    color: '2 color',
    images: [
        new URL('../assets/images/shoeDetail/shoeDetail_2_image1.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image2.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image3.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image4.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image5.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image6.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image7.avif', import.meta.url).href,
    ],
    price: '$199.99',
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 2
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_3.avif', import.meta.url).href,
    title: 'Nike Dunk Low Retro',
    category: "Men's Shoes",
    description: 'The Nike Dunk Low Retro brings back the classic silhouette with premium materials and a timeless design that never goes out of style.',
    color: '1 color',
    images: [
        new URL('../assets/images/shoeDetail/shoeDetail_3_image1.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_3_image2.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_3_image3.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_3_image4.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_3_image5.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_3_image6.avif', import.meta.url).href,

    ],
    price: '$79.99',
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 3
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_4.avif', import.meta.url).href,
    title: 'Nike Field General "Blue Suede"',
    category: "Women's Shoes",
    description: 'The Nike Field General "Blue Suede" offers a stylish and comfortable option for athletes and casual wearers alike.',
    color: '3 color',
    price: '$99.99',
     noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 4
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_5.avif', import.meta.url).href,
    title: 'Nike Field General Suede',
    category: 'Unisex Shoes',
    description: 'The Nike Field General Suede combines style and comfort for a versatile footwear option.',
    color: '2 color',
    price: '$299.99',
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 5
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_6.avif', import.meta.url).href,
    title: 'Nike Shox TL',
    category: "Men's Shoes",
    description: 'The Nike Shox TL features a unique design with responsive cushioning for a comfortable ride.',
    color: '2 color',
    price: '$149.99',
    
    id: 6
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_7.avif', import.meta.url).href,
    title: 'Air Jordan 3 Retro "Lucky Shorts"',
    category: "Men's Shoes",
    description: 'The Air Jordan 3 Retro "Lucky Shorts" combines classic style with modern comfort.',
    color: '2 color',
    price: '$199.99',
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 7
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_8.avif', import.meta.url).href,
    title: 'Air Jordan 4 RM',
    category: "Women's Shoes",
    description: 'The Air Jordan 4 RM offers a sleek and stylish option for sneaker enthusiasts.',
    color: '3 color',
    price: '$129.99',
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 8
  },
  {
    image: new URL('../assets/images/shoeList/shoe_detail_9.avif', import.meta.url).href,
    title: "Nike Air Max Uptempo '95",
    category: "Men's Shoes",
    description: 'The Nike Air Max Uptempo \'95 is a classic basketball shoe that offers both style and performance.',
    color: '1 color',
    price: '$79.99',
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 9
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

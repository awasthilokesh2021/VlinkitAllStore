const dairyItems = [
  {
    id: 1,
    name: "Harwest Gold Sandwich",
    image: "https://images.pexels.com/photos/4778093/pexels-photo-4778093.jpeg", // Sandwich image
    qunt: "500g",
    quantity: 1,
    cost: 52,
  },
  {
    id: 2,
    name: "Amul Butter",
    image: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Butter image
    qunt: "100g",
    quantity: 1,
    cost: 47,
  },
  {
    id: 3,
    name: "Mother Dairy Full Cream Milk",
    image: "https://images.pexels.com/photos/5488003/pexels-photo-5488003.jpeg", // Milk image
    qunt: "1l",
    quantity: 1,
    qunt: 1,
  },
  {
    id: 4,
    name: "Britannia Cheese Slices",
    image: "https://images.pexels.com/photos/6650807/pexels-photo-6650807.jpeg", // Cheese slices image
    qunt: "400g",
    quantity: 1,
    cost: 120,
  },
  {
    id: 5,
    name: "Nestle Yogurt",
    image: "https://images.pexels.com/photos/2988851/pexels-photo-2988851.jpeg", // Yogurt image
    qunt: "500g",
    quantity: 1,
    cost: 80,
  },
  {
    id: 6,
    name: "Amul Fresh Cream",
    image: "https://images.pexels.com/photos/3542650/pexels-photo-3542650.jpeg", // Cream image
    cost: 64,
    qunt: "500g",
    quantity: 1,
  },
  {
    id: 7,
    name: "Epigamia Greek Yogurt",
    image: "https://images.pexels.com/photos/2988851/pexels-photo-2988851.jpeg", // Greek Yogurt image
    qunt: "500g",
    quantity: 1,
    cost: 45,
  },
  {
    id: 8,
    name: "Mother Dairy Paneer",
    image: "https://images.pexels.com/photos/2992882/pexels-photo-2992882.jpeg", // Paneer image
    qunt: "500g",
    quantity: 1,
    cost: 70,
  },
  {
    id: 9,
    name: "Amul Kool Flavored Milk",
    image: "https://images.pexels.com/photos/5488003/pexels-photo-5488003.jpeg", // Milk image
    qunt: "540g",
    quantity: 1,
    cost: 25,
  },
  {
    id: 10,
    name: "Nestle Slim Milk",
    image: "https://images.pexels.com/photos/3059721/pexels-photo-3059721.jpeg", // Milk image
    qunt: "1l",
    quantity: 1,
    cost: 65,
  },
  {
    id: 11,
    name: "Britannia Butter",
    image: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Butter image
    qunt: "500g",
    quantity: 1,
    cost: 50,
  },
  {
    id: 12,
    name: "Amul Cheese Spread",
    image: "https://images.pexels.com/photos/3162414/pexels-photo-3162414.jpeg", // Cheese spread image
    qunt: "500g",
    quantity: 1,
    cost: 80,
  },
  {
    id: 13,
    name: "Milky Mist Curd",
    image: "https://images.pexels.com/photos/3590632/pexels-photo-3590632.jpeg", // Curd image
    qunt: "500g",
    quantity: 1,
    cost: 65,
  },
  {
    id: 14,
    name: "Nandini Ghee",
    image: "https://images.pexels.com/photos/3696404/pexels-photo-3696404.jpeg", // Ghee image
    qunt: "500g",
    quantity: 1,
    cost: 250,
  },
  {
    id: 15,
    name: "Amul Lassi",
    image: "https://images.pexels.com/photos/4055176/pexels-photo-4055176.jpeg", // Lassi image
    qunt: "500g",
    quantity: 1,
    cost: 20,
  },
  {
    id: 16,
    name: "Govardhan Ghee",
    image: "https://images.pexels.com/photos/3696404/pexels-photo-3696404.jpeg", // Ghee image
    qunt: "500g",
    quantity: 1,
    cost: 260,
  },
];

// const pannitems = [
//   {
//     id: 1,
//     name: "Banarasi Paan",
//     img: "https://images.pexels.com/photos/5726762/pexels-photo-5726762.jpeg", // Banarasi Paan image
//     quantity: "1 piece",
//     cost: 20,
//   },
//   {
//     id: 2,
//     name: "Meetha Paan",
//     img: "https://images.pexels.com/photos/6322965/pexels-photo-6322965.jpeg", // Meetha Paan image
//     quantity: "1 piece",
//     cost: 15,
//   },
//   {
//     id: 3,
//     name: "Sada Paan",
//     img: "https://images.pexels.com/photos/6476983/pexels-photo-6476983.jpeg", // Sada Paan image
//     quantity: "1 piece",
//     cost: 10,
//   },
//   {
//     id: 4,
//     name: "Chocolate Paan",
//     img: "https://images.pexels.com/photos/6970344/pexels-photo-6970344.jpeg", // Chocolate Paan image
//     quantity: "1 piece",
//     cost: 30,
//   },
//   {
//     id: 5,
//     name: "Silver Coated Paan",
//     img: "https://images.pexels.com/photos/5726741/pexels-photo-5726741.jpeg", // Silver Coated Paan image
//     quantity: "1 piece",
//     cost: 50,
//   },
//   {
//     id: 6,
//     name: "Chuna Supari",
//     img: "https://images.pexels.com/photos/4555331/pexels-photo-4555331.jpeg", // Chuna Supari image
//     quantity: "100g",
//     cost: 35,
//   },
//   {
//     id: 7,
//     name: "Mishri & Saunf Mix",
//     img: "https://images.pexels.com/photos/6476991/pexels-photo-6476991.jpeg", // Mishri Saunf Mix image
//     quantity: "100g",
//     cost: 25,
//   },
//   {
//     id: 8,
//     name: "Paan Supari",
//     img: "https://images.pexels.com/photos/4555333/pexels-photo-4555333.jpeg", // Paan Supari image
//     quantity: "100g",
//     cost: 40,
//   },
//   {
//     id: 9,
//     name: "Kesar Paan",
//     img: "https://images.pexels.com/photos/6970344/pexels-photo-6970344.jpeg", // Kesar Paan image
//     quantity: "1 piece",
//     cost: 60,
//   },
//   {
//     id: 10,
//     name: "Mint Paan",
//     img: "https://images.pexels.com/photos/5726762/pexels-photo-5726762.jpeg", // Mint Paan image
//     quantity: "1 piece",
//     cost: 25,
//   }
// ];

export default dairyItems;

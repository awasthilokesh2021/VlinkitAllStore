const dairyItems = [ 
    {
      id: 1,
      name: "Harwest Gold Sandwich",
      img: "https://images.pexels.com/photos/4778093/pexels-photo-4778093.jpeg", // Sandwich image
      quantity: "500g",
      cost: 52,
    },
    {
      id: 2,
      name: "Amul Butter",
      img: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Butter image
      quantity: "100g",
      cost: 47,
    },
    {
      id: 3,
      name: "Mother Dairy Full Cream Milk",
      img: "https://images.pexels.com/photos/5488003/pexels-photo-5488003.jpeg", // Milk image
      quantity: "1L",
      cost: 60,
    },
    {
      id: 4,
      name: "Britannia Cheese Slices",
      img: "https://images.pexels.com/photos/6650807/pexels-photo-6650807.jpeg", // Cheese slices image
      quantity: "200g",
      cost: 120,
    },
    {
      id: 5,
      name: "Nestle Yogurt",
      img: "https://images.pexels.com/photos/2988851/pexels-photo-2988851.jpeg", // Yogurt image
      quantity: "400g",
      cost: 80,
    },
    {
      id: 6,
      name: "Amul Fresh Cream",
      img: "https://images.pexels.com/photos/3542650/pexels-photo-3542650.jpeg", // Cream image
      quantity: "250ml",
      cost: 64,
    },
    {
      id: 7,
      name: "Epigamia Greek Yogurt",
      img: "https://images.pexels.com/photos/2988851/pexels-photo-2988851.jpeg", // Greek Yogurt image
      quantity: "90g",
      cost: 45,
    },
    {
      id: 8,
      name: "Mother Dairy Paneer",
      img: "https://images.pexels.com/photos/2992882/pexels-photo-2992882.jpeg", // Paneer image
      quantity: "200g",
      cost: 70,
    },
    {
      id: 9,
      name: "Amul Kool Flavored Milk",
      img: "https://images.pexels.com/photos/5488003/pexels-photo-5488003.jpeg", // Milk image
      quantity: "200ml",
      cost: 25,
    },
    {
      id: 10,
      name: "Nestle Slim Milk",
      img: "https://images.pexels.com/photos/3059721/pexels-photo-3059721.jpeg", // Milk image
      quantity: "1L",
      cost: 65,
    },
    {
      id: 11,
      name: "Britannia Butter",
      img: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Butter image
      quantity: "100g",
      cost: 50,
    },
    {
      id: 12,
      name: "Amul Cheese Spread",
      img: "https://images.pexels.com/photos/3162414/pexels-photo-3162414.jpeg", // Cheese spread image
      quantity: "200g",
      cost: 80,
    },
    {
      id: 13,
      name: "Milky Mist Curd",
      img: "https://images.pexels.com/photos/3590632/pexels-photo-3590632.jpeg", // Curd image
      quantity: "500g",
      cost: 65,
    },
    {
      id: 14,
      name: "Nandini Ghee",
      img: "https://images.pexels.com/photos/3696404/pexels-photo-3696404.jpeg", // Ghee image
      quantity: "500ml",
      cost: 250,
    },
    {
      id: 15,
      name: "Amul Lassi",
      img: "https://images.pexels.com/photos/4055176/pexels-photo-4055176.jpeg", // Lassi image
      quantity: "200ml",
      cost: 20,
    },
    {
      id: 16,
      name: "Govardhan Ghee",
      img: "https://images.pexels.com/photos/3696404/pexels-photo-3696404.jpeg", // Ghee image
      quantity: "500ml",
      cost: 260,
    },
    {
      id: 17,
      name: "Amul Gold Milk",
      img: "https://images.pexels.com/photos/5488003/pexels-photo-5488003.jpeg", // Milk image
      quantity: "1L",
      cost: 60,
    },
    {
      id: 18,
      name: "Nestle Everyday Dairy Whitener",
      img: "https://images.pexels.com/photos/3059721/pexels-photo-3059721.jpeg", // Milk image
      quantity: "400g",
      cost: 200,
    },
    {
      id: 19,
      name: "Danone Greek Yogurt",
      img: "https://images.pexels.com/photos/2988851/pexels-photo-2988851.jpeg", // Greek Yogurt image
      quantity: "80g",
      cost: 45,
    },
    {
      id: 20,
      name: "Amul Shrikhand",
      img: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Shrikhand image
      quantity: "500g",
      cost: 150,
    },
    {
      id: 21,
      name: "Patanjali Cow Ghee",
      img: "https://images.pexels.com/photos/3696404/pexels-photo-3696404.jpeg", // Ghee image
      quantity: "1L",
      cost: 350,
    },
    {
      id: 22,
      name: "Epigamia Mishti Doi",
      img: "https://images.pexels.com/photos/3696404/pexels-photo-3696404.jpeg", // Mishti Doi image
      quantity: "90g",
      cost: 40,
    },
    {
      id: 23,
      name: "Amul Ice Cream",
      img: "https://images.pexels.com/photos/4006860/pexels-photo-4006860.jpeg", // Ice Cream image
      quantity: "1L",
      cost: 180,
    },
    {
      id: 24,
      name: "Gowardhan Paneer",
      img: "https://images.pexels.com/photos/2992882/pexels-photo-2992882.jpeg", // Paneer image
      quantity: "200g",
      cost: 70,
    },
    {
      id: 25,
      name: "Nestle A+ Slim Milk",
      img: "https://images.pexels.com/photos/3059721/pexels-photo-3059721.jpeg", // Milk image
      quantity: "1L",
      cost: 65,
    },
    {
      id: 26,
      name: "Britannia Cheese Cubes",
      img: "https://images.pexels.com/photos/6650807/pexels-photo-6650807.jpeg", // Cheese cubes image
      quantity: "200g",
      cost: 120,
    },
    {
      id: 27,
      name: "Milky Mist Butter",
      img: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Butter image
      quantity: "500g",
      cost: 245,
    },
    {
      id: 28,
      name: "Nandini Toned Milk",
      img: "https://images.pexels.com/photos/5488003/pexels-photo-5488003.jpeg", // Milk image
      quantity: "1L",
      cost: 50,
    },
    {
      id: 29,
      name: "Mother Dairy Butter",
      img: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Butter image
      quantity: "500g",
      cost: 235,
    },
    {
      id: 30,
      name: "Amul Cheese Cubes",
      img: "https://images.pexels.com/photos/6650807/pexels-photo-6650807.jpeg", // Cheese cubes image
      quantity: "200g",
      cost: 120,
    },
    {
      id: 31,
      name: "Amul Kesar Shrikhand",
      img: "https://images.pexels.com/photos/5635905/pexels-photo-5635905.jpeg", // Shrikhand image
      quantity: "500g",
      cost: 155,
    },
    {
      id: 32,
      name: "Nestle A+ Milk",
      img: "https://images.pexels.com/photos/3059721/pexels-photo-3059721.jpeg", // Milk image
      quantity: "1L",
      cost: 60,
    },
    {
      id: 33,
      name: "Amul Dahi",
      img: "https://images.pexels.com/photos/3590632/pexels-photo-3590632.jpeg", // Dahi image
      quantity: "500g",
      cost: 60,
    },
    {
      id: 34,
      name: "Nandini Butter Milk",
      img: "https://images.pexels.com/photos/4055176/pexels-photo-4055176.jpeg", // Butter Milk image
      quantity: "200ml",
      cost: 20,
    },
    {
      id: 35,
      name: "Britannia Cheese Block",
      img: "https://images.pexels.com/photos/6650807/pexels-photo-6650807.jpeg", // Cheese block image
      quantity: "400g",
      cost: 235,
    },
    {
      id: 36,
      name: "Epigamia Natural Greek Yogurt",
      img: "https://images.pexels.com/photos/2988851/pexels-photo-2988851.jpeg", // Greek Yogurt image
      quantity: "90g",
      cost: 45,
    },
    {
      id: 37,
      name: "Amul Probiotic Dahi",
      img: "https://images.pexels.com/photos/3590632/pexels-photo-3590632.jpeg", // Probiotic Dahi image
      quantity: "400g",
      cost: 50,
    },
    {
      id: 38,
      name: "Amul Malai Paneer",
      img: "https://images.pexels.com/photos/2992882/pexels-photo-2992882.jpeg", // Paneer image
      quantity: "200g",
      cost: 75,
    },
    {
      id: 39,
      name: "Danone Low Fat Yogurt",
      img: "https://images.pexels.com/photos/2988851/pexels-photo-2988851.jpeg", // Low Fat Yogurt image
      quantity: "400g",
      cost: 85,
    },
    {
      id: 40,
      name: "Amul Cream",
      img: "https://images.pexels.com/photos/3542650/pexels-photo-3542650.jpeg", // Cream image
      quantity: "250ml",
      cost: 65,
    }
  ];
  
  
  export default dairyItems;
  
  
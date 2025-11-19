const sampleListings = [
  {
    title: "Tesla Model S",
    description: "Electric luxury sedan with top performance and range.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1698514333866-e0d21c6c7d6d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974"
    },
    price: 80000,
    location: "California",
    country: "USA",
  },
  {
    title: "BMW M3",
    description: "High-performance sports sedan with sleek design and power.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1628079586925-6e7792daaf0b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1964"
    },
    price: 75000,
    location: "Munich",
    country: "Germany",
  },
  {
    title: "Audi A6",
    description: "Executive car blending technology, comfort, and elegance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974"
    },
    price: 65000,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Mercedes-Benz G-Class",
    description: "Iconic luxury SUV with unmatched off-road performance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1689554863630-c0d4c3e4ed93?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1935"
    },
    price: 130000,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Ford Mustang GT",
    description: "American muscle car with roaring V8 and timeless design.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974"
    },
    price: 55000,
    location: "Texas",
    country: "USA",
  },
  {
    title: "Porsche 911",
    description: "Legendary sports car that defines precision and performance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593353798398-6024b7444bb6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1964"
    },
    price: 120000,
    location: "Stuttgart",
    country: "Germany",
  },
  {
    title: "Lamborghini Huracán",
    description: "Italian masterpiece blending speed and beauty flawlessly.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1689310872287-98f535cfe121?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2128"
    },
    price: 250000,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Hummer",
    description: "Japanese sports icon reborn with turbocharged power.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1722915377083-4d8a2c9d3bbb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1965"
    },
    price: 60000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Range Rover Sport",
    description: "Luxury SUV combining comfort, power, and off-road mastery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1725815761064-b84c3f4f9b94?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
    },
    price: 95000,
    location: "London",
    country: "UK",
  },
  {
    title: "Chevrolet Camaro ZL1",
    description: "Aggressive design meets track-level performance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974"
    },
    price: 65000,
    location: "Detroit",
    country: "USA",
  },
  {
    title: "Nissan GT-R",
    description: "Godzilla of the road — raw power, speed, and precision.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1609964729554-a02fb2a04830?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1965"
    },
    price: 115000,
    location: "Yokohama",
    country: "Japan",
  },
  {
    title: "Ferrari F8 Tributo",
    description: "A tribute to speed and aerodynamic excellence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
    },
    price: 280000,
    location: "Maranello",
    country: "Italy",
  },
  {
    title: "Volvo XC90",
    description: "Scandinavian luxury SUV with safety and style.",
    image: {
      filename: "listingimage",
      url: "https://wallpapers.com/images/featured-full/volvo-xc90-y8v4vnerjdxkzvag.jpg"
    },
    price: 70000,
    location: "Stockholm",
    country: "Sweden",
  },
  {
    title: "Mustang",
    description: "Scandinavian luxury SUV with safety and style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657385721478-5c913be94e47?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
    },
    price: 70000,
    location: "Stockholm",
    country: "Sweden",
  },
  {
    title: "Audi T6",
    description: "Scandinavian luxury SUV with safety and style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1563339018-51d1ef22f402?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
    },
    price: 70000,
    location: "Stockholm",
    country: "Sweden",
  },
];

module.exports = { data: sampleListings };

const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Premium Leather Jacket",
    category: "Jackets",
    description: "High-quality genuine leather jacket with a classic design. Perfect for all seasons with comfortable inner lining.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    stock: 15,
    featured: true
  },
  {
    name: "Denim Jacket",
    category: "Jackets",
    description: "Classic blue denim jacket with a modern fit. Versatile and stylish for casual wear.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    stock: 20,
    featured: false
  },
  {
    name: "Bomber Jacket",
    category: "Jackets",
    description: "Trendy bomber jacket with ribbed cuffs and hem. Lightweight and comfortable.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
    featured: true
  },
  {
    name: "Cotton T-Shirt White",
    category: "T-Shirts",
    description: "Premium 100% cotton t-shirt. Soft, breathable, and perfect for everyday wear.",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 50,
    featured: false
  },
  {
    name: "Graphic Print T-Shirt",
    category: "T-Shirts",
    description: "Trendy graphic print t-shirt with unique design. Made from soft cotton blend.",
    price: 999,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
    sizes: ["M", "L", "XL"],
    stock: 30,
    featured: true
  },
  {
    name: "V-Neck T-Shirt",
    category: "T-Shirts",
    description: "Classic v-neck t-shirt with a modern slim fit. Comfortable and stylish.",
    price: 899,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    stock: 25,
    featured: false
  },
  {
    name: "Polo T-Shirt",
    category: "T-Shirts",
    description: "Smart casual polo t-shirt with collar. Perfect for semi-formal occasions.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    stock: 18,
    featured: false
  },
  {
    name: "Hooded Jacket",
    category: "Jackets",
    description: "Comfortable hooded jacket with zipper closure. Perfect for outdoor activities.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    sizes: ["M", "L", "XL"],
    stock: 10,
    featured: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('✅ Sample products added successfully!');
    console.log(`📦 Added ${sampleProducts.length} products`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

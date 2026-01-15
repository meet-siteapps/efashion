# 🚀 Quick Start Guide

Get your Men's Fashion Store up and running in minutes!

## Step 1: Install Dependencies

Open 3 terminals and run these commands:

### Terminal 1 - Backend
```bash
cd backend
npm install
```

### Terminal 2 - User Frontend
```bash
cd frontend
npm install
```

### Terminal 3 - Admin Frontend
```bash
cd adminfrontend
npm install
```

## Step 2: Setup MongoDB

Make sure MongoDB is running on your system:

```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in backend/.env with your Atlas connection string
```

## Step 3: Seed Sample Data (Optional)

Add sample products to your database:

```bash
cd backend
npm run seed
```

This will add 8 sample products (jackets and t-shirts) to your database.

## Step 4: Start All Services

### Terminal 1 - Backend (Port 5000)
```bash
cd backend
npm run dev
```

### Terminal 2 - User Frontend (Port 3000)
```bash
cd frontend
npm run dev
```

### Terminal 3 - Admin Frontend (Port 3001)
```bash
cd adminfrontend
npm run dev
```

## Step 5: Access the Applications

- **User Store**: http://localhost:3000
- **Admin Panel**: http://localhost:3001
- **Backend API**: http://localhost:5000

## 🎯 What to Do Next

### Admin Panel (http://localhost:3001)
1. Click "Add Product" button
2. Fill in product details:
   - Name (e.g., "Leather Jacket")
   - Category (Jackets or T-Shirts)
   - Description
   - Price (e.g., 4999)
   - Stock (e.g., 10)
   - Image URL (use Unsplash or any image URL)
3. Select sizes (XS, S, M, L, XL, XXL)
4. Add colors using color picker
5. Toggle "Featured Product" if needed
6. Click "Create Product"

### User Store (http://localhost:3000)
1. Browse products on the home page
2. Filter by category (All, Jackets, T-Shirts)
3. Click on any product to view details
4. Select size and color
5. Click "Order on WhatsApp" to place order

## 📱 WhatsApp Integration

The WhatsApp number is set to: **+91 93274 64610**

To change it, update in:
- `backend/.env` - WHATSAPP_NUMBER
- `frontend/src/components/Navbar.jsx`
- `frontend/src/pages/Home.jsx`
- `frontend/src/pages/ProductDetail.jsx`

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js` in both frontend folders:

```javascript
colors: {
  'dark-bg': '#0a0e27',      // Main background
  'dark-card': '#151b3d',    // Card background
  'neon-blue': '#00d4ff',    // Accent color
  'blue-glow': '#1e40af',    // Secondary accent
}
```

### Add More Categories
Update `backend/models/Product.js`:

```javascript
category: {
  type: String,
  required: true,
  enum: ['Jackets', 'T-Shirts', 'Hoodies', 'Jeans'] // Add more
}
```

## 🐛 Troubleshooting

### Port Already in Use
If you get "Port already in use" error:

```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 3001
npx kill-port 3001

# Kill process on port 5000
npx kill-port 5000
```

### MongoDB Connection Error
- Make sure MongoDB is running
- Check MONGODB_URI in backend/.env
- For MongoDB Atlas, whitelist your IP address

### CORS Error
- Make sure backend is running on port 5000
- Check proxy settings in vite.config.js

## 📦 Sample Image URLs

Use these Unsplash URLs for testing:

**Jackets:**
- https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500
- https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500
- https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500

**T-Shirts:**
- https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500
- https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500
- https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500

## ✅ Success!

You should now have:
- ✅ Backend API running on port 5000
- ✅ User store running on port 3000
- ✅ Admin panel running on port 3001
- ✅ MongoDB connected with sample data
- ✅ WhatsApp integration working

Happy coding! 🎉

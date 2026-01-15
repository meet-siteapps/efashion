# Men's Fashion Store - MERN Stack

A modern clothing store built with MERN stack featuring a dark theme with neon blue accents. Includes separate user and admin interfaces with WhatsApp integration for orders.

## 🎨 Features

### User Frontend (Port 3000)
- Browse men's jackets and t-shirts
- Product detail pages with size and color selection
- Direct WhatsApp ordering integration
- Responsive design with smooth animations
- Dark theme with neon blue accents

### Admin Frontend (Port 3001)
- Complete CRUD operations for products
- Add/Edit/Delete products
- Manage product details (name, category, price, stock, sizes, colors)
- Image URL management
- Featured product toggle

### Backend API (Port 5000)
- RESTful API with Express.js
- MongoDB database
- Product management endpoints
- CORS enabled for both frontends

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### 1. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/estore
WHATSAPP_NUMBER=+919327464610
NODE_ENV=development
```

Start backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

### 2. User Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Access at: `http://localhost:3000`

### 3. Admin Frontend Setup

```bash
cd adminfrontend
npm install
npm run dev
```

Access at: `http://localhost:3001`

## 📁 Project Structure

```
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── ProductDetail.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── adminfrontend/
    ├── src/
    │   ├── components/
    │   │   ├── ProductForm.jsx
    │   │   └── ProductList.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## 🎯 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 🎨 Theme Colors

- **Dark Background**: `#0a0e27`
- **Dark Card**: `#151b3d`
- **Neon Blue**: `#00d4ff`
- **Blue Glow**: `#1e40af`

## 📱 WhatsApp Integration

Products can be ordered directly via WhatsApp. When users click "Order on WhatsApp", a pre-filled message is sent to: **+91 93274 64610**

The message includes:
- Product name and price
- Selected size and color
- Product description
- Product image link

## 🔧 Development

### Start all services:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - User Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 3 - Admin Frontend:**
```bash
cd adminfrontend
npm run dev
```

## 🌟 Usage

### Admin Panel
1. Open `http://localhost:3001`
2. Click "Add Product" to create new products
3. Fill in product details (name, category, price, stock, image URL)
4. Select sizes and colors
5. Toggle featured status
6. Save product

### User Interface
1. Open `http://localhost:3000`
2. Browse products by category (All, Jackets, T-Shirts)
3. Click on a product to view details
4. Select size and color
5. Click "Order on WhatsApp" to place order

## 📝 Product Schema

```javascript
{
  name: String (required),
  category: String (Jackets | T-Shirts),
  description: String (required),
  price: Number (required),
  image: String (URL, required),
  sizes: Array of Strings (XS, S, M, L, XL, XXL),
  colors: Array of Strings (hex colors),
  stock: Number (default: 0),
  featured: Boolean (default: false),
  timestamps: true
}
```

## 🚀 Production Build

### Frontend
```bash
cd frontend
npm run build
```

### Admin Frontend
```bash
cd adminfrontend
npm run build
```

## 📄 License

MIT

## 👨‍💻 Author

Built with ❤️ using MERN Stack

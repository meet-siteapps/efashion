# 🚀 Start All Services

## Quick Commands

Copy and paste these commands in separate terminals:

### Terminal 1 - Backend
```bash
cd backend && npm install && npm run dev
```

### Terminal 2 - User Frontend  
```bash
cd frontend && npm install && npm run dev
```

### Terminal 3 - Admin Frontend
```bash
cd adminfrontend && npm install && npm run dev
```

## First Time Setup

If this is your first time running the project:

### 1. Install all dependencies
```bash
# Backend
cd backend
npm install

# User Frontend
cd ../frontend
npm install

# Admin Frontend
cd ../adminfrontend
npm install
```

### 2. Setup MongoDB
Make sure MongoDB is running:
```bash
mongod
```

Or use MongoDB Atlas (update MONGODB_URI in backend/.env)

### 3. Seed sample data
```bash
cd backend
npm run seed
```

### 4. Start all services (3 terminals)

**Terminal 1:**
```bash
cd backend
npm run dev
```
✅ Backend running on http://localhost:5000

**Terminal 2:**
```bash
cd frontend
npm run dev
```
✅ User Store running on http://localhost:3000

**Terminal 3:**
```bash
cd adminfrontend
npm run dev
```
✅ Admin Panel running on http://localhost:3001

## Access URLs

- 🛍️ **User Store**: http://localhost:3000
- ⚙️ **Admin Panel**: http://localhost:3001
- 🔌 **API**: http://localhost:5000

## Verify Everything Works

1. Open http://localhost:3001 (Admin)
2. You should see sample products
3. Open http://localhost:3000 (User Store)
4. You should see the same products
5. Click on a product
6. Click "Order on WhatsApp"
7. WhatsApp should open with pre-filled message

## Troubleshooting

### MongoDB not connecting?
- Check if MongoDB is running: `mongod`
- Check MONGODB_URI in backend/.env

### Port already in use?
```bash
# Windows
npx kill-port 3000
npx kill-port 3001
npx kill-port 5000

# Mac/Linux
lsof -ti:3000 | xargs kill
lsof -ti:3001 | xargs kill
lsof -ti:5000 | xargs kill
```

### Dependencies not installing?
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Stop All Services

Press `Ctrl + C` in each terminal to stop the services.

## Production Build

### Build frontends
```bash
# User Frontend
cd frontend
npm run build

# Admin Frontend
cd adminfrontend
npm run build
```

### Run backend in production
```bash
cd backend
NODE_ENV=production npm start
```

---

**Happy Coding! 🎉**

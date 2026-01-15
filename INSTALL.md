# 📦 Installation Guide

## One-Command Install (Recommended)

### Windows (PowerShell)
```powershell
# Install all dependencies at once
cd backend; npm install; cd ../frontend; npm install; cd ../adminfrontend; npm install; cd ..
```

### Mac/Linux (Bash)
```bash
# Install all dependencies at once
cd backend && npm install && cd ../frontend && npm install && cd ../adminfrontend && npm install && cd ..
```

## Step-by-Step Install

If the one-command doesn't work, install each separately:

### 1. Backend
```bash
cd backend
npm install
```

**Expected output:**
```
added 150 packages in 15s
```

### 2. User Frontend
```bash
cd frontend
npm install
```

**Expected output:**
```
added 200 packages in 20s
```

### 3. Admin Frontend
```bash
cd adminfrontend
npm install
```

**Expected output:**
```
added 200 packages in 20s
```

## Verify Installation

Check if all node_modules folders exist:

```bash
# Windows
dir backend\node_modules
dir frontend\node_modules
dir adminfrontend\node_modules

# Mac/Linux
ls backend/node_modules
ls frontend/node_modules
ls adminfrontend/node_modules
```

## MongoDB Setup

### Option 1: Local MongoDB

**Install MongoDB:**
- Windows: https://www.mongodb.com/try/download/community
- Mac: `brew install mongodb-community`
- Linux: `sudo apt-get install mongodb`

**Start MongoDB:**
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongod
```

### Option 2: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clothing-store
   ```

## Seed Sample Data

After MongoDB is running:

```bash
cd backend
npm run seed
```

**Expected output:**
```
✅ MongoDB Connected
🗑️  Cleared existing products
✅ Sample products added successfully!
📦 Added 8 products
```

## Start Development Servers

### Option 1: All at Once (3 Terminals)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Server running on http://localhost:5000

**Terminal 2 - User Frontend:**
```bash
cd frontend
npm run dev
```
✅ Running on http://localhost:3000

**Terminal 3 - Admin Frontend:**
```bash
cd adminfrontend
npm run dev
```
✅ Running on http://localhost:3001

### Option 2: Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend (after build):**
```bash
cd frontend
npm run build
npm run preview
```

## Verify Everything Works

### 1. Check Backend API
Open browser: http://localhost:5000
Should see: `{"message":"Clothing Store API is running!"}`

### 2. Check User Store
Open browser: http://localhost:3000
Should see: Product grid with 8 products

### 3. Check Admin Panel
Open browser: http://localhost:3001
Should see: Admin dashboard with product list

### 4. Test WhatsApp Integration
1. Click any product on user store
2. Click "Order on WhatsApp"
3. WhatsApp should open with pre-filled message

## Common Issues & Solutions

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: "MongoDB connection error"
**Solution:** 
- Make sure MongoDB is running: `mongod`
- Check MONGODB_URI in backend/.env

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Windows
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Issue: "Cannot find module"
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "CORS error"
**Solution:**
- Make sure backend is running on port 5000
- Check vite.config.js proxy settings

### Issue: "Tailwind styles not working"
**Solution:**
```bash
# Rebuild Tailwind
npm run dev
```

## Package Versions

Ensure you have compatible versions:

```json
Node.js: v16+ (check: node --version)
npm: v8+ (check: npm --version)
MongoDB: v5+ (check: mongod --version)
```

## Update Dependencies

To update all packages to latest versions:

```bash
# Backend
cd backend
npm update

# Frontend
cd frontend
npm update

# Admin Frontend
cd adminfrontend
npm update
```

## Clean Install

If you face persistent issues, do a clean install:

```bash
# Remove all node_modules
rm -rf backend/node_modules
rm -rf frontend/node_modules
rm -rf adminfrontend/node_modules

# Remove all package-lock files
rm backend/package-lock.json
rm frontend/package-lock.json
rm adminfrontend/package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall everything
cd backend && npm install
cd ../frontend && npm install
cd ../adminfrontend && npm install
```

## Environment Variables

Make sure `backend/.env` exists with:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/estore
WHATSAPP_NUMBER=+919327464610
NODE_ENV=development
```

## Success Checklist

- [ ] Node.js installed
- [ ] MongoDB installed/configured
- [ ] All dependencies installed (3 folders)
- [ ] Sample data seeded
- [ ] Backend running on port 5000
- [ ] User frontend running on port 3000
- [ ] Admin frontend running on port 3001
- [ ] Can view products on user store
- [ ] Can add products in admin panel
- [ ] WhatsApp integration works

## Next Steps

Once installation is complete:

1. Read **QUICK_START.md** for usage guide
2. Read **README.md** for full documentation
3. Read **FEATURES_SHOWCASE.md** to see what you can do
4. Start customizing your store!

## Need Help?

Check these files:
- **README.md** - Full documentation
- **QUICK_START.md** - Quick start guide
- **START_ALL.md** - Commands reference
- **PROJECT_SUMMARY.md** - Project overview

---

**Installation Complete! 🎉**

Your Men's Fashion Store is ready to use!

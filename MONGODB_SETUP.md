# 🗄️ MongoDB Setup Guide

## Quick Setup

### Step 1: Check if MongoDB is Installed

```bash
mongod --version
```

If you see version info, MongoDB is installed. Skip to Step 3.

### Step 2: Install MongoDB

#### Windows
1. Download from: https://www.mongodb.com/try/download/community
2. Run installer
3. Choose "Complete" installation
4. Install as Windows Service (recommended)
5. Install MongoDB Compass (GUI tool)

#### Mac
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
```

#### Linux (Ubuntu/Debian)
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Create list file
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update and install
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Step 3: Start MongoDB

#### Windows
```bash
# If installed as service (automatic)
net start MongoDB

# Or run manually
mongod
```

#### Mac
```bash
# Start as service
brew services start mongodb-community

# Or run manually
mongod --config /usr/local/etc/mongod.conf
```

#### Linux
```bash
# Start service
sudo systemctl start mongod

# Enable on boot
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod
```

### Step 4: Verify MongoDB is Running

```bash
# Check if MongoDB is listening on port 27017
netstat -an | findstr 27017    # Windows
lsof -i :27017                 # Mac/Linux
```

You should see MongoDB listening on port 27017.

### Step 5: Connect with MongoDB Compass

1. Open MongoDB Compass
2. Connection string: `mongodb://localhost:27017/estore`
3. Click "Connect"
4. You should see the connection successful

### Step 6: Seed Sample Data

```bash
cd backend
npm run seed
```

Expected output:
```
✅ MongoDB Connected
🗑️  Cleared existing products
✅ Sample products added successfully!
📦 Added 8 products
```

### Step 7: Verify in Compass

1. Refresh MongoDB Compass
2. You should see:
   - Database: **estore**
   - Collection: **products**
   - 8 documents (products)

## 🎯 Connection Details

```
Database Name: estore
Connection String: mongodb://localhost:27017/estore
Host: localhost
Port: 27017
Authentication: None (local development)
```

## 🔧 MongoDB Configuration

### Default Data Directory

**Windows:** `C:\data\db`  
**Mac:** `/usr/local/var/mongodb`  
**Linux:** `/var/lib/mongodb`

### Default Config File

**Windows:** `C:\Program Files\MongoDB\Server\6.0\bin\mongod.cfg`  
**Mac:** `/usr/local/etc/mongod.conf`  
**Linux:** `/etc/mongod.conf`

### Default Log File

**Windows:** `C:\data\log\mongod.log`  
**Mac:** `/usr/local/var/log/mongodb/mongo.log`  
**Linux:** `/var/log/mongodb/mongod.log`

## 🚀 Quick Commands

### Start MongoDB
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Stop MongoDB
```bash
# Windows
net stop MongoDB

# Mac
brew services stop mongodb-community

# Linux
sudo systemctl stop mongod
```

### Restart MongoDB
```bash
# Windows
net stop MongoDB && net start MongoDB

# Mac
brew services restart mongodb-community

# Linux
sudo systemctl restart mongod
```

### Check Status
```bash
# Windows
sc query MongoDB

# Mac
brew services list | grep mongodb

# Linux
sudo systemctl status mongod
```

## 🗄️ MongoDB Shell Commands

### Connect to MongoDB Shell
```bash
mongosh
# or older versions
mongo
```

### Show Databases
```javascript
show dbs
```

### Use Database
```javascript
use estore
```

### Show Collections
```javascript
show collections
```

### View Products
```javascript
db.products.find().pretty()
```

### Count Products
```javascript
db.products.countDocuments()
```

### Find Jackets
```javascript
db.products.find({ category: "Jackets" })
```

### Find Featured Products
```javascript
db.products.find({ featured: true })
```

### Delete All Products
```javascript
db.products.deleteMany({})
```

### Drop Database
```javascript
db.dropDatabase()
```

## 🔍 Troubleshooting

### Issue: "mongod: command not found"
**Solution:**
- MongoDB not installed or not in PATH
- Reinstall MongoDB
- Add MongoDB bin folder to PATH

### Issue: "Data directory not found"
**Solution:**
```bash
# Windows
mkdir C:\data\db

# Mac/Linux
sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
```

### Issue: "Port 27017 already in use"
**Solution:**
```bash
# Find process using port 27017
# Windows
netstat -ano | findstr :27017
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:27017 | xargs kill -9
```

### Issue: "Connection refused"
**Solution:**
- Make sure MongoDB is running
- Check firewall settings
- Verify port 27017 is open

### Issue: "Authentication failed"
**Solution:**
- For local development, no auth needed
- Remove username/password from connection string
- Use: `mongodb://localhost:27017/estore`

## 🌐 MongoDB Atlas (Cloud Alternative)

If you prefer cloud database:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create free cluster (M0)
4. Create database user
5. Whitelist your IP (0.0.0.0/0 for development)
6. Get connection string
7. Update `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/estore
   ```

## 📊 Database Structure

### Database: estore
```
estore/
└── products/
    ├── _id (ObjectId)
    ├── name (String)
    ├── category (String)
    ├── description (String)
    ├── price (Number)
    ├── image (String)
    ├── sizes (Array)
    ├── colors (Array)
    ├── stock (Number)
    ├── featured (Boolean)
    ├── createdAt (Date)
    └── updatedAt (Date)
```

## ✅ Setup Checklist

- [ ] MongoDB installed
- [ ] MongoDB running
- [ ] Port 27017 accessible
- [ ] MongoDB Compass installed
- [ ] Connected to localhost:27017
- [ ] Database "estore" created
- [ ] Sample data seeded
- [ ] Can view products in Compass
- [ ] Backend connects successfully

## 🎉 Success!

Your MongoDB is now set up and ready to use!

**Next Steps:**
1. Read `MONGODB_COMPASS_GUIDE.md` for Compass usage
2. Start your backend: `cd backend && npm run dev`
3. Start your frontend: `cd frontend && npm run dev`
4. Start your admin: `cd adminfrontend && npm run dev`

---

**Connection String:** `mongodb://localhost:27017/estore`  
**Database:** `estore`  
**Collection:** `products`

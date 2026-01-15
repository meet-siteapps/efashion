# 🗄️ MongoDB Compass Connection Guide

## Connection String

```
mongodb://localhost:27017/estore
```

## Step-by-Step Connection

### 1. Install MongoDB Compass

If you don't have MongoDB Compass installed:
- Download from: https://www.mongodb.com/try/download/compass
- Install and open the application

### 2. Start MongoDB Server

Before connecting, make sure MongoDB is running:

**Windows:**
```bash
# Start MongoDB service
net start MongoDB

# Or run mongod directly
mongod
```

**Mac:**
```bash
brew services start mongodb-community
# Or
mongod --config /usr/local/etc/mongod.conf
```

**Linux:**
```bash
sudo systemctl start mongod
# Or
sudo service mongod start
```

### 3. Connect via MongoDB Compass

#### Option 1: Using Connection String (Recommended)

1. Open MongoDB Compass
2. You'll see "New Connection" screen
3. In the connection string field, paste:
   ```
   mongodb://localhost:27017/estore
   ```
4. Click **"Connect"**

#### Option 2: Fill Connection Form

1. Open MongoDB Compass
2. Click "Fill in connection fields individually"
3. Enter these details:
   - **Hostname**: `localhost`
   - **Port**: `27017`
   - **Authentication**: None (for local development)
   - **Database**: `estore`
4. Click **"Connect"**

### 4. Verify Connection

After connecting, you should see:
- Left sidebar with database name: **estore**
- Collections inside:
  - **products** (after seeding data)

### 5. View Your Data

1. Click on **estore** database in left sidebar
2. Click on **products** collection
3. You should see your products in a table/document view

## 📊 What You'll See in Compass

### Database: estore
```
estore/
└── products/
    ├── Document 1: Premium Leather Jacket
    ├── Document 2: Denim Jacket
    ├── Document 3: Bomber Jacket
    ├── Document 4: Cotton T-Shirt White
    ├── Document 5: Graphic Print T-Shirt
    ├── Document 6: V-Neck T-Shirt
    ├── Document 7: Polo T-Shirt
    └── Document 8: Hooded Jacket
```

### Sample Document Structure
```json
{
  "_id": "ObjectId('...')",
  "name": "Premium Leather Jacket",
  "category": "Jackets",
  "description": "High-quality genuine leather jacket...",
  "price": 4999,
  "image": "https://images.unsplash.com/...",
  "sizes": ["S", "M", "L", "XL"],
  "colors": ["#000000", "#8B4513", "#2F4F4F"],
  "stock": 15,
  "featured": true,
  "createdAt": "2024-01-14T...",
  "updatedAt": "2024-01-14T...",
  "__v": 0
}
```

## 🔧 Compass Features You Can Use

### 1. View Documents
- See all products in a readable format
- Switch between Table, JSON, and List views

### 2. Add Documents
- Click "Add Data" → "Insert Document"
- Paste JSON or use the form
- Click "Insert"

### 3. Edit Documents
- Hover over any document
- Click the pencil icon (Edit)
- Modify fields
- Click "Update"

### 4. Delete Documents
- Hover over any document
- Click the trash icon (Delete)
- Confirm deletion

### 5. Query Documents
- Use the filter bar at top
- Example: `{ "category": "Jackets" }`
- Click "Find" to filter results

### 6. Indexes
- View existing indexes
- Create new indexes for performance

### 7. Schema Analysis
- Click "Schema" tab
- See field types and distributions
- Understand your data structure

## 🎯 Common Compass Operations

### Filter Products by Category
```json
{ "category": "Jackets" }
```

### Find Products Under ₹1000
```json
{ "price": { "$lt": 1000 } }
```

### Find Featured Products
```json
{ "featured": true }
```

### Find Out of Stock Products
```json
{ "stock": 0 }
```

### Find Products with Specific Size
```json
{ "sizes": "XL" }
```

## 🚀 Quick Actions in Compass

### 1. Seed Data (If Not Done)
Run this in your terminal:
```bash
cd backend
npm run seed
```

Then refresh Compass to see the data.

### 2. Clear All Products
In Compass:
1. Select **products** collection
2. Click "Documents" tab
3. Click "..." menu
4. Select "Delete all documents"
5. Confirm

### 3. Export Data
1. Select **products** collection
2. Click "..." menu
3. Select "Export Collection"
4. Choose format (JSON/CSV)
5. Save file

### 4. Import Data
1. Select **products** collection
2. Click "Add Data" → "Import File"
3. Choose your JSON/CSV file
4. Map fields
5. Click "Import"

## 🔍 Troubleshooting

### Issue: "Connection Refused"
**Solution:**
- Make sure MongoDB is running: `mongod`
- Check if port 27017 is available
- Try: `netstat -an | findstr 27017` (Windows)
- Try: `lsof -i :27017` (Mac/Linux)

### Issue: "Authentication Failed"
**Solution:**
- For local development, no authentication needed
- Remove username/password from connection string
- Use: `mongodb://localhost:27017/estore`

### Issue: "Database Not Found"
**Solution:**
- Database is created automatically when you insert data
- Run seed script: `npm run seed`
- Refresh Compass

### Issue: "No Collections Visible"
**Solution:**
- Make sure you've seeded data
- Click refresh button in Compass
- Check if you're viewing the correct database

## 📱 MongoDB Compass Shortcuts

| Action | Shortcut |
|--------|----------|
| New Connection | Ctrl/Cmd + N |
| Refresh | Ctrl/Cmd + R |
| Find | Ctrl/Cmd + F |
| New Document | Ctrl/Cmd + D |
| Close Tab | Ctrl/Cmd + W |

## 🎨 Compass Views

### 1. Documents View (Default)
- See all documents in collection
- Edit, delete, clone documents
- Best for: Viewing and editing data

### 2. Schema View
- Analyze field types
- See data distributions
- Best for: Understanding data structure

### 3. Indexes View
- View existing indexes
- Create new indexes
- Best for: Performance optimization

### 4. Validation View
- Set validation rules
- Ensure data quality
- Best for: Data integrity

## 💡 Pro Tips

1. **Save Favorite Connections**
   - Click "Save" after connecting
   - Name it "Estore Local"
   - Quick access next time

2. **Use Filters**
   - Save common queries
   - Quick filter by category
   - Export filtered results

3. **Monitor Performance**
   - Check "Performance" tab
   - See slow queries
   - Optimize indexes

4. **Backup Data**
   - Export collections regularly
   - Keep JSON backups
   - Easy restore if needed

## 🔗 Connection String Variations

### Local Development (Current)
```
mongodb://localhost:27017/estore
```

### With Authentication (If Enabled)
```
mongodb://username:password@localhost:27017/estore
```

### MongoDB Atlas (Cloud)
```
mongodb+srv://username:password@cluster.mongodb.net/estore
```

### With Options
```
mongodb://localhost:27017/estore?retryWrites=true&w=majority
```

## ✅ Verification Checklist

After connecting to Compass:

- [ ] MongoDB Compass installed
- [ ] MongoDB server running
- [ ] Connected to localhost:27017
- [ ] Database "estore" visible
- [ ] Collection "products" visible
- [ ] 8 sample products visible (after seeding)
- [ ] Can view document details
- [ ] Can edit documents
- [ ] Can add new documents

## 🎉 Success!

You should now see:
- ✅ Connected to MongoDB via Compass
- ✅ Database: **estore**
- ✅ Collection: **products**
- ✅ 8 sample products (after seeding)
- ✅ Full CRUD operations available

**Your MongoDB Compass is ready to use! 🗄️**

---

## Quick Reference

**Connection String:**
```
mongodb://localhost:27017/estore
```

**Database Name:** `estore`  
**Collection Name:** `products`  
**Port:** `27017`  
**Host:** `localhost`

**Need Help?**
- MongoDB Compass Docs: https://docs.mongodb.com/compass/
- MongoDB Manual: https://docs.mongodb.com/manual/

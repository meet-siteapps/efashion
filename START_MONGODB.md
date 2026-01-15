# 🚀 Start MongoDB - Quick Guide

## MongoDB is Not Running!

You need to start MongoDB server before running the application.

## ✅ Option 1: Start MongoDB Service (Recommended)

### Windows - Run as Administrator:

1. **Open PowerShell as Administrator:**
   - Press `Windows + X`
   - Click "Windows PowerShell (Admin)" or "Terminal (Admin)"

2. **Run this command:**
   ```powershell
   net start MongoDB
   ```

3. **You should see:**
   ```
   The MongoDB Server service is starting.
   The MongoDB Server service was started successfully.
   ```

## ✅ Option 2: Start MongoDB Manually

If the service doesn't work, start MongoDB manually:

1. **Open PowerShell (normal, not admin)**

2. **Run:**
   ```powershell
   mongod
   ```

3. **Keep this window open** - MongoDB is running!

## ✅ Option 3: Using MongoDB Compass

1. **Open MongoDB Compass**
2. **Connection String:** `mongodb://localhost:27017/estore`
3. **Click "Connect"**
4. If it connects, MongoDB is running!
5. If it fails, MongoDB is not running - use Option 1 or 2

## 🔍 Check if MongoDB is Running

```powershell
# Check if MongoDB is listening on port 27017
netstat -an | findstr 27017
```

**Expected output:**
```
TCP    0.0.0.0:27017    0.0.0.0:0    LISTENING
```

## ⚠️ If MongoDB is Not Installed

If you get "MongoDB service not found", you need to install MongoDB:

1. **Download:** https://www.mongodb.com/try/download/community
2. **Install** with default settings
3. **Check "Install as Windows Service"**
4. **Restart computer**
5. **Try again**

## 🎯 After MongoDB is Running

Once MongoDB is running, come back and run:

```powershell
# Terminal 1 - Seed data
cd backend
npm run seed

# Terminal 2 - Start backend
cd backend
npm run dev

# Terminal 3 - Start user frontend
cd frontend
npm run dev

# Terminal 4 - Start admin frontend
cd adminfrontend
npm run dev
```

## ✅ Success Indicators

MongoDB is running when:
- ✅ `net start MongoDB` succeeds
- ✅ `netstat -an | findstr 27017` shows LISTENING
- ✅ MongoDB Compass connects successfully
- ✅ No "ECONNREFUSED" errors

---

**Next Step:** Start MongoDB using one of the options above, then run the seed command again!

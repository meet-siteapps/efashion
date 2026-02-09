# Start Servers for Image Upload

## ✅ Fixed: Admin Frontend Now Points to Local Backend

The admin frontend was trying to upload to the production server instead of your local backend.

## 🚀 Start Both Servers:

### **Terminal 1: Start Backend**
```bash
cd backend
npm start
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on port 5000
```

### **Terminal 2: Start Admin Frontend**
```bash
cd adminfrontend
npm run dev
```

You should see:
```
Local: http://localhost:3001/
```

## ✅ Now Try Upload:

1. Open http://localhost:3001/ in browser
2. Add/Edit product
3. Select image (under 1MB)
4. Upload should work now!

## 🔍 Troubleshooting:

### If upload still fails:

**Check backend is running:**
- Open http://localhost:5000/ in browser
- Should see: `{"message":"Clothing Store API is running!"}`

**Check image size:**
- Must be under 1MB
- Compress at https://tinypng.com/ if needed

**Check console for errors:**
- Open browser DevTools (F12)
- Check Console tab for detailed error messages

### Alternative (Always Works):

**Use Direct URL Input:**
1. Upload to https://imgbb.com/
2. Copy URL
3. Paste in "Or Enter Image URL Directly" field
4. Save ✅

---

## 📝 Summary:

1. ✅ Backend configured with ImageKit credentials
2. ✅ Admin frontend now points to localhost:5000
3. ✅ Body size limit increased to 50MB
4. ✅ Ready to upload images!

**Just restart both servers and try again!**

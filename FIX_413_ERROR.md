# Fix Error 413 - Payload Too Large

## ✅ Solution: Restart Backend Server

The server code has been updated to accept larger files (50MB), but you need to **restart the backend server** for changes to take effect.

### 🔄 Restart Backend Server:

**Step 1: Stop the current server**
- Press `Ctrl + C` in the terminal where backend is running

**Step 2: Start it again**
```bash
cd backend
npm start
```

**Step 3: Try uploading again**
- The 413 error should be gone now

### 📏 Image Size Limits:

- **Max file size**: 1MB (for reliable uploads)
- **Recommended**: 500KB or less
- **Format**: JPG, PNG, WEBP

### 🗜️ If Image is Too Large:

**Compress your image first:**

1. Go to https://tinypng.com/
2. Upload your image
3. Download the compressed version
4. Upload the compressed image to admin panel

**Or resize it:**
- Recommended size: 800x800px or 1000x1000px
- Use any image editor or online tool

### ✅ Alternative (Works Without Restart):

**Use Direct URL Input:**
1. Upload image to https://imgbb.com/
2. Copy the direct image URL
3. Paste in "Or Enter Image URL Directly" field
4. Save product

This method works immediately without needing to restart the server!

---

## 🎯 Quick Summary:

1. **Restart backend server** (Ctrl+C then `npm start`)
2. **Use images under 1MB**
3. **Or use direct URL input** (works now)
